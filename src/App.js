import React, { useState } from 'react';
import './App.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import * as mapData from './data/airports.json';

function App() {



  const [viewPort, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  })

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  return (

    <ReactMapGL mapStyle="mapbox://styles/nirmalkrishnav/cke1kci6u012d1an799uhgqbw" {...viewPort} mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN} onViewportChange={viewPort => { setViewport(viewPort) }}>

      {mapData.features.map(airport => {
        return <Marker key={airport.properties.name} longitude={airport.geometry.coordinates[0]} latitude={airport.geometry.coordinates[1]}>
          <div>Skate</div>
        </Marker>

      })}

    </ReactMapGL>
  );
}

export default App;
