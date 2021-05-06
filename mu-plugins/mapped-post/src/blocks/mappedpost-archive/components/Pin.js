import React, { useRef, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import icons from './icons';


const Pin = (props) => {
    const markerRef = useRef(null);
    const { center, content, openPopup, onItemClick, itemId, groupRef, count } = props;
    useEffect(() => {
        if (openPopup) {
            const target = markerRef.current.leafletElement;
            const group = groupRef.current.leafletElement;

            group.zoomToShowLayer(target, ()=>{
                target.openPopup();
            });
        }
      }, [openPopup]);

    const getMyIcon =({count}) => {
          const myIcon = L.divIcon({
            className: 'farm-icon',
            html: openPopup ? `${icons.selected} <span class="count">${count}</span>` : `${icons.marker} <span class="count">${count}</span>`,
            iconSize: [30, 30],
            iconAnchor: [15, 45],
            popupAnchor:  [-3, -76]
        });
        return myIcon;
    }
    return (
        <Marker
            position={center}
            icon={getMyIcon({count})}
            ref={markerRef}
            onClick={() => {
                onItemClick(itemId);
            }}>
        <Popup><div className={'map-archive-popup'} dangerouslySetInnerHTML={{__html: content}} /></Popup>
        </Marker>
    );
}


export default Pin;