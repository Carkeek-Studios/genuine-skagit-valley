import React, { useRef, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import icons from './icons';


const Pin = (props) => {
    const markerRef = useRef(null);
    const { center, title, excerpt, link, openPopup, onItemClick, itemId, groupRef } = props;
    useEffect(() => {
        if (openPopup) {
            const target = markerRef.current.leafletElement;
            const group = groupRef.current.leafletElement;

            group.zoomToShowLayer(target, ()=>{
                target.openPopup();
            });
        }
      }, [openPopup]);

    const getMyIcon =() => {
          const myIcon = L.divIcon({
            className: 'farm-icon',
            html: openPopup ? `${icons.selected}` : `${icons.marker}`,
            iconSize: [30, 30],
            iconAnchor: [10, 40],
            popupAnchor:  [0, -56]
        });
        return myIcon;
    }
    const popup = <div className={'map-archive-popup'}><span className={'popup-title'} dangerouslySetInnerHTML={ {__html: title} } /><span className={'popup-excerpt'} dangerouslySetInnerHTML={ {__html: excerpt} }/><a className={'popup-link'} href={link}>Learn More</a></div>
    return (
        <Marker
            position={center}
            icon={getMyIcon()}
            ref={markerRef}
            onClick={() => {
                onItemClick(itemId);
            }}>
        <Popup>{popup}</Popup>
        </Marker>
    );
}


export default Pin;