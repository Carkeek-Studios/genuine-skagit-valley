import React, { useRef } from "react";
import MarkerClusterGroup from 'react-leaflet-markercluster';
var _ = require('lodash');
import 'react-leaflet-markercluster/dist/styles.min.css';
import Pin from './Pin.js';



const Pins = (props) => {
    const { data, selectedIndex, onItemClick } = props;
    const groupRef = useRef(null);

    const Markers = data.map((item) => {

        return (
        <Pin
        key={item.id}
        title={item.title.rendered}
        excerpt={item.excerpt.rendered}
        link={item.link}
        center={[item.acf.member_address.lat, item.acf.member_address.lng]}
        openPopup={selectedIndex === item.id}
        onItemClick={onItemClick}
        itemId={item.id}
        groupRef={groupRef}
        count={item.count}
        />)
    });

    return (
      <MarkerClusterGroup
        ref={groupRef}
        showCoverageOnHover={false}
        spiderfyOnMaxZoom={true}
        spiderLegPolylineOptions={{
          weight: 0,
          opacity: 0,
        }}
        removeOutsideVisibleBounds={true}
        maxClusterRadius={20}
      >
        {Markers}
      </MarkerClusterGroup>
    );
  };

  export default Pins;