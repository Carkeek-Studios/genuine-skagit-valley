import React, { useRef, useState, useEffect } from "react";
import { Map, ZoomControl } from "react-leaflet";
var _ = require('lodash');

import MapBoxGLLayer from "./MapBoxGLLayer";
import Pins from './Pins.js';
import FilterList from './Filters.js';

function PointsList(props) {
    const { data, onItemClick, selectedIndex, onHeaderClick } = props;


    return (
        <div className={"data-list"}>
            <div className="data-list--header" onClick={onHeaderClick}>Artists</div>
            <ol className="data-list--data">

                {data.map((item) => (
                <li
                    key={item.id}
                    onClick={() => {
                    onItemClick(item.id);
                    }}
                    className = {selectedIndex == item.id ? 'selected' : '' }
                >
                    <span dangerouslySetInnerHTML={{__html: item.content}}></span>
                </li>
                ))}
            </ol>
        </div>
    );
}

const MapBox = () => {
    return (
        <MapBoxGLLayer
            accessToken={'pk.eyJ1IjoicGF0dHlvayIsImEiOiJja2Q1OWI1bnkxaWdxMndudjU4dDIxd2tyIn0.8wNkxnelM0meYNGz-6yDQQ'}
            style="mapbox://styles/mapbox/outdoors-v11"
            attribution="&amp;copy <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> &amp;copy <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
        />
    )
}


function MapCluster(props) {
    const { zoom, locations, categories, isMapLoading, isCatLoading, visibleLocations, onUpdateLocations, visibleBounds, taxFilter} = props;
    const hideListAtLoad = window.innerWidth > 600 ? false : true;
    const [selected, setSelected] = useState();
    const [selectedCats, setSelectedCats] = useState([]);
    const [hideList, setHideList] = useState(hideListAtLoad);

    const mapRef = useRef(null);

    const arrayContains = (arr1, arr2) => {
        return _.intersection(arr1, arr2).length > 0;
    }

    const mapReady = !isMapLoading && !isCatLoading;

    function handleItemClick(index) {
        //setSelected(index); //this makes the map zoom back out weird, need to figure that out.
    }

    function handleHeaderClick() {
        setHideList(!hideList);
    }

    function handleMapClick() {
        setSelected();
    }

    useEffect(() => {
        mapRef.current.leafletElement.invalidateSize()
    }, [hideList])

    const mapStyle = hideList ? 'list-hidden' : 'list-visible';

    const showList = false;

    const filterLocations = (selectedCats) => {

        //const all = _.clone(locations);
        if (selectedCats.length > 0 ) {
            const visible = []
            locations.map((item) => {
                if (arrayContains(selectedCats, item[taxFilter])) {
                    visible.push(item);
                }
            })
            onUpdateLocations(visible);
        } else {
        onUpdateLocations(locations);
        }
    }



    const updateSelectedCats = (selected) => {
        setSelectedCats( () => {
            return (selected);
        });
        filterLocations(selected);
    }
    let mapProps = {};
    if (mapReady && visibleLocations.length > 0) {

        mapProps = {
            bounds: visibleBounds
        }
    } else {
        mapProps = {
            center: ['48.41789', '-122.323702']
        }
    }
    return (
        <div className={`archive-map-wrapper ${mapStyle}`}>
        {showList &&
            <PointsList
            data={visibleLocations}
            onItemClick={handleItemClick}
            selectedIndex={selected}
            hideList={hideList}
            onHeaderClick={handleHeaderClick}
            />
        }
        {mapReady &&
        <FilterList
            options={categories}
            selectedOptions={selectedCats}
            onChange={(selectedCats) => updateSelectedCats(selectedCats)}
            level="0"
        />
        }
        <div className={'data-map'}>


        <Map {...mapProps} zoom={zoom} maxZoom={36} zoomControl={false} ref={mapRef} scrollWheelZoom={false} onClick={handleMapClick} boundsOptions={{paddingTopLeft: [275, 0]}}>
            <MapBox />
            {mapReady&&
                <Pins selectedIndex={selected} data={visibleLocations} selectedCats={selectedCats} onItemClick={handleItemClick}  />
            }
            <ZoomControl position="topright" />
        </Map>

        </div>

        </div>
    );
}

export default MapCluster;