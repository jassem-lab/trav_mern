import './App.css';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { listLogEntries } from './API';

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
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
      setLogEntries(logEntries);
      // console.log(logEntries);
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
      >
        {logEntries.map((entry) => (
          <Marker
            key={entry._id}
            latitude={entry.latitude}
            longitude={entry.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <svg
              viewBox='0 0 24 24'
              width='48'
              style={{
                width: `calc(1vmin * ${viewport.zoom})`,
                height: `calc(1vmin * ${viewport.zoom})`,
              }}
              height='48'
              stroke='currentColor'
              stroke-width='1.5'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='Marker'
            >
              <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
              <circle cx='12' cy='10' r='3'></circle>
            </svg>{' '}
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default App;
