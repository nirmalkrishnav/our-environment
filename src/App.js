import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMapGL from 'react-map-gl';

function App() {
  const [viewPort, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  })

  return (

    <ReactMapGL mapStyle="mapbox://styles/nirmalkrishnav/cke1kci6u012d1an799uhgqbw" {...viewPort} mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN} onViewportChange={viewPort => { setViewport(viewPort) }}>
      markers here
    </ReactMapGL>
  );
}

export default App;
