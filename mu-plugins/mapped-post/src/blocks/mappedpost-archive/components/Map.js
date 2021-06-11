import React, { useRef, useState, useEffect } from "react";
import { Map, ZoomControl, TileLayer } from "react-leaflet";
import { useHistory, withRouter } from 'react-router-dom';
import queryString from 'query-string';

var _ = require('lodash');

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



function MapCluster(props) {
    const { zoom, locations, categories, isMapLoading, isCatLoading, visibleLocations, onUpdateLocations, visibleBounds, taxFilter, location} = props;
    const hideListAtLoad = window.innerWidth > 600 ? false : true;
    const [selected, setSelected] = useState();
    let params = queryString.parse(location.search)
    let paramCats = [];
    if (params && params.ck_listing_category) {
        paramCats = params.ck_listing_category.split(',').map(function(item){
            return parseInt(item, 10);
        });
    }
    const [selectedCats, setSelectedCats] = useState(paramCats);
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
    //todo: tie this to browser resize https://react-cn.github.io/react/tips/dom-event-listeners.html
    let boundsOptions = {padding: [25, 25]}
    if ( window.innerWidth > 599 ) {
        boundsOptions= {paddingTopLeft: [275, 0]}
    }

    const history = useHistory();

    const updateSelectedCats = (selected) => {
        setSelectedCats( () => {
            return (selected);
        });
        const params = new URLSearchParams();
        if (selected.length > 0) {
            params.append('ck_listing_category', selected)
        } else {
            params.delete('ck_listing_category')
        }
        history.push({
            search: '?' + params.toString()
        })
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


        <Map {...mapProps} zoom={zoom} maxZoom={18} minZoom={8} zoomControl={false} ref={mapRef} scrollWheelZoom={false} onClick={handleMapClick} boundsOptions={boundsOptions}>
        <TileLayer
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank" >&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=yRFimapDOtSxWTi4dx3l"
        />
            {mapReady&&
                <Pins selectedIndex={selected} data={visibleLocations} selectedCats={selectedCats} onItemClick={handleItemClick}  />
            }
            <ZoomControl position="topright" />
        </Map>

        </div>

        </div>
    );
}

export default withRouter (MapCluster);