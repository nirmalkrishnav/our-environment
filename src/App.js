import React from 'react';
import './App.css';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';

class App extends React.Component {
  state = {
    viewPort: {
      latitude: 12.986297,
      longitude: 80.218697,
      width: '100vw',
      height: '100vh',
      zoom: 10,
    },
    features: []
  }

  setViewport = (vp) => this.setState({ viewPort: vp });
  mapClicked = (e) => this.addMarker(e.lngLat[0], e.lngLat[1])

  addMarker = (lng, lat) => {
    const obj = {
      properties: { name: lng },
      geometry: {
        coordinates: [lng, lat]
      }
    }
    this.setState({ features: [...this.state.features, obj] })
    console.log(this.state)
  }

  markerClicked = (e, dirt) => {
    e.preventDefault();
    console.log(dirt)
  }
  componentDidMount() {

  }

  render() {
    return (
      <ReactMapGL mapStyle="mapbox://styles/nirmalkrishnav/cke1kci6u012d1an799uhgqbw" {...this.state.viewPort} mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN} onViewportChange={viewPort => { this.setViewport(viewPort) }} onClick={this.mapClicked}>
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />

        {this.state.features.map((dirt, index) => {
          return <Marker key={index} longitude={dirt.geometry.coordinates[0]} latitude={dirt.geometry.coordinates[1]} onClick={e => this.markerClicked(e, dirt)} captureClick={true}>
            <span role="img" aria-label="dirt">💩</span>
          </Marker>

        })}


      </ReactMapGL>
    );
  }
}

export default App;
