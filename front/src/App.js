import logo from './assets/logo(1).png';
import github from './assets/github.png'
import './App.css';
import { useEffect, useState } from 'react';
import SpotsList from './components/SpotsList';
import axios from 'axios'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
        <div className='App-header-logo'>
          <a href='http://localhost:3000' alt='home'>
            <img src={logo} alt="" className='LogoImg' />
          </a>
        </div>
        <Stack className='App-header-menu' direction="row" spacing={2}>
          <Button className='MUI-Button' variant="outlined" disabled>List of Spots</Button>
          <Button className='MUI-Button' variant="outlined" disabled>Contact</Button>
          <a href='https://github.com/cerenault/click-n-surf'>
            <img src={github} alt='github-project' className='GithubImg' />
          </a>
        </Stack>        
      </header>
      
      <section className='Section'> 
        
        <div className='Section-Map'>
          <div ref={mapContainer} className="map-container" />
        </div>
       
        <div className='Section-Spots'>
          <SpotsList spotsList={spotsList}/>
        </div>
      </section>
    </div>
  );
}

export default App;
