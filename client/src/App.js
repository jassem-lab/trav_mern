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
            <div>{entry.title}</div>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default App;
