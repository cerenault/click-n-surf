import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SpotsList from './components/SpotsList';
import axios from 'axios'

import React, { useRef } from 'react'; 
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY

function App() {

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });

  const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(2.3262946);
    const [lat, setLat] = useState(46.75168);
    const [zoom, setZoom] = useState(4);
    

  const [spotsList, setSpotsList] = useState([{}])

  useEffect(() => {
    axios.get("http://localhost/spots")
      .then(res => {
        setSpotsList(res.data)
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SURF MAP</h1>
        <SpotsList spotsList={spotsList}/>
      </header>
      <div>
                <div ref={mapContainer} className="map-container" />
            </div>
    </div>
  );
}

export default App;
