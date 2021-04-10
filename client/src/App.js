import './App.css';
import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { listLogEntries } from './API';

const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vh',
    height: '100vw',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
  });
  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      console.log(logEntries);
    })();
  }, []);
  return (
    <div className='App'>
      <ReactMapGL
        {...viewport}
        // Map Styling !
        mapStyle='mapbox://styles/jassemdev/cknb2b2660b6117nzjxppgoqm'
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      />
    </div>
  );
};

export default App;
