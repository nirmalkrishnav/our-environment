import React from 'react';
import './App.css';
import ReactMapGL, { Marker, GeolocateControl, NavigationControl } from 'react-map-gl';
import Sidebar from './components/sidebar/Sidebar';
import './tailwind.output.css';
import axios from 'axios';

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

  mapClicked = (e) => {
    this.addMarker(e.lngLat[0], e.lngLat[1]);
  }

  addMarker = (lng, lat) => {
    const obj = {
      properties: { name: new Date().toISOString },
      geometry: {
        coordinates: [lng, lat]
      }
    }
    this.saveMarkerData(obj);
    this.setState({ features: [...this.state.features, obj] })
    console.log(this.state)
  }

  markerClicked = (e, dirt) => {
    e.preventDefault();
    console.log(dirt)
  }

  getTrashData = () => {
    axios.get('http://localhost:5500/trash').then(resp => resp = resp.data).then(data => {
      data.forEach(element => {
        this.addMarker(element.lng, element.lat);
      });
    });
  }

  saveMarkerData = (obj) => {
    axios.post('http://localhost:5500/trash/add', obj).then(resp => resp = resp.data).then(data => {
      data.forEach(element => {
        this.addMarker(element.lng, element.lat);
      });
    });
  }

  componentDidMount = () => {
    this.getTrashData();
  }

  render() {
    return (
      <div>

        <div className="invisible md:visible lg:visible">
          <Sidebar />
        </div>
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN}
          mapStyle="mapbox://styles/nirmalkrishnav/cke1kci6u012d1an799uhgqbw" {...this.state.viewPort}
          onViewportChange={viewPort => { this.setViewport(viewPort) }}
          onClick={this.mapClicked}>


          <div style={{ position: 'absolute', right: '50px', bottom: '50px', zIndex: 100 }}>
            <div style={{ marginBottom: '15px' }}>
              <NavigationControl />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <GeolocateControl
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true} style={{ zIndex: 100 }}
              />
            </div>
          </div>

          {this.state.features.map((dirt, index) => {
            return <Marker key={index} longitude={dirt.geometry.coordinates[0]} latitude={dirt.geometry.coordinates[1]} onClick={e => this.markerClicked(e, dirt)} captureClick={true}>
              <span role="img" aria-label="dirt">💩</span>
            </Marker>

          })}

        </ReactMapGL>
      </div>
    );
  }
}

export default App;
