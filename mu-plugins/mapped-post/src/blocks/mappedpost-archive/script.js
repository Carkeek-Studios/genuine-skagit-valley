//import React, { Component } from 'react';
//import { render } from 'react-dom';
import "leaflet/dist/leaflet.css";
const { render } = wp.element;
import Map from './components/Map';
import markerData from "./components/getData";
import L from 'leaflet';
import './style.scss';

function App(){
    return (<Map zoom={10} bounds={bounds} maxZoom={18} locations={markerData} />);
}

  const bounds = L.latLngBounds()
  markerData.forEach((data) => {
    bounds.extend(data.position)
  })
if (document.getElementById('mapped-posts-map')){
    render(<App/>, document.getElementById('mapped-posts-map'));
}
