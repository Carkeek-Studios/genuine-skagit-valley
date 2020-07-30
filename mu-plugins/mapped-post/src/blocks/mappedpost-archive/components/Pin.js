import React, { useRef, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import icons from './icons';


const Pin = (props) => {
    const markerRef = useRef(null);
    const { center, content, openPopup, onItemClick, itemId, groupRef } = props;
    useEffect(() => {
        if (openPopup) {
            const target = markerRef.current.leafletElement;
            const group = groupRef.current.leafletElement;

            group.zoomToShowLayer(target, ()=>{
                target.openPopup();
            });
        }
      }, [openPopup]);

    const myIcon = L.divIcon({
        className: 'farm-icon  has-shadow',
        html: openPopup ? `${icons.selected} <span> </span>` : `${icons.marker} <span></span>`,
        iconSize: [30, 30],
        iconAnchor: [15, 45],
        popupAnchor:  [0, -50]
    });

    return (
        <Marker
            position={center}
            icon={myIcon}
            ref={markerRef}
            onClick={e => {
                onItemClick(itemId);
            }}>
        <Popup><div className={'map-archive-popup'} dangerouslySetInnerHTML={{__html: content}} /></Popup>
        </Marker>
    );
}


export default Pin;