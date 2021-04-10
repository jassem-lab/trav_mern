import './App.css';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { listLogEntries } from './API';
import MarkerSvg from './component/markersvg';
const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState();
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
          <>
            <Marker
              key={entry._id}
              latitude={entry.latitude}
              longitude={entry.longitude}
              // offsetLeft={-20}
              // offsetTop={-10}
            >
              <div>
                {/* <MarkerSvg /> */}
                <img
                  style={{
                    height: `${6 * viewport.zoom}px`,
                    width: `${6 * viewport.zoom}px`,
                  }}
                  src='https://i.imgur.com/y0G5YTX.png'
                  alt='marker'
                  className='Marker'
                />
              </div>
              {showPopup[entry._id] ? (
                <Popup
                  latitude={entry.latitude}
                  longitude={entry.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  onClose={() => {}}
                  anchor='top'
                >
                  <div>You are Here right now !</div>
                </Popup>
              ) : null}
            </Marker>
          </>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default App;
