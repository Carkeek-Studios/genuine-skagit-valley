import React, { useRef, useState, useEffect } from "react";
import { Map, ZoomControl } from "react-leaflet";
import MapBoxGLLayer from "./MapBoxGLLayer";
import Pins from './Pins.js';

function PointsList(props) {
    const { data, onItemClick, selectedIndex, onHeaderClick } = props;


    return (
        <div className={"data-list"}>
            <div className="data-list--header" onClick={onHeaderClick}>Protected Farms</div>
            <ul className="data-list--data">

                {data.map((item) => (
                <li
                    key={item.id}
                    onClick={() => {
                    onItemClick(item.id);
                    }}
                    className = {selectedIndex == item.id ? 'selected' : '' }
                >
                    {item.name}
                </li>
                ))}
            </ul>
        </div>
    );
}


function MapCluster(props) {
    const hideListAtLoad = window.innerWidth > 600 ? false : true;
    const [selected, setSelected] = useState();
    const [hideList, setHideList] = useState(hideListAtLoad);

    const mapRef = useRef(null);

    const { zoom, bounds, locations, maxZoom } = props;

    function handleItemClick(index) {
        setSelected(index);
        if (window.innerWidth < 601) {
            setHideList(true);
        }
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



    return (
        <div className={`archive-map-wrapper ${mapStyle}`}>
        <PointsList
            data={locations}
            onItemClick={handleItemClick}
            selectedIndex={selected}
            hideList={hideList}
            onHeaderClick={handleHeaderClick}
            />
            <div className={'data-map'}>
        <Map bounds={bounds} zoom={zoom} maxZoom={maxZoom} zoomControl={false} ref={mapRef} onClick={handleMapClick}>
        <MapBoxGLLayer
                accessToken={'pk.eyJ1IjoicGF0dHlvayIsImEiOiJja2Q1OWI1bnkxaWdxMndudjU4dDIxd2tyIn0.8wNkxnelM0meYNGz-6yDQQ'}
                style="mapbox://styles/mapbox/outdoors-v11"
                attribution="&amp;copy <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> &amp;copy <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
            />
            <Pins selectedIndex={selected} data={locations} onItemClick={handleItemClick}  />
            <ZoomControl position="topright" />
        </Map>
        </div>

        </div>
    );
}

export default MapCluster;