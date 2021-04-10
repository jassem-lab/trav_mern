import './App.css';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vh',
    height: '100vw',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
  });
  return (
    <div className='App'>
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      />
    </div>
  );
};

export default App;
