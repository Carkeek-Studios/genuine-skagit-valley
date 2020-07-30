//import React, { Component } from 'react';
//import { render } from 'react-dom';
import "leaflet/dist/leaflet.css";
const { render, Component } = wp.element;
import Map from './components/Map';
import markerData from "./components/getData";
import L from 'leaflet';
import './style.scss';

function App(){
    return (<Map zoom={4} bounds={bounds} maxZoom={10} locations={markerData} />);
}


    const WaState = [
        [48.95339556830784, -124.46411132812501],
        [45.94565925725525, -116.78466796875001]
    ];

    const bounds = L.latLngBounds();
    WaState.forEach((data) => {
        bounds.extend(data)
    })
if (document.getElementById('mapped-posts-map')){
    render(<App/>, document.getElementById('mapped-posts-map'));
}
