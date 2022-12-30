import React from 'react'
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import markers from '../components/markers'
import './css/map.css'
import { useState } from 'react';


const KEY = process.env.REACT_APP_GOOGLE_API_KEY
const MapPage = () => {
  const [ iframeDisplay, setIframeDisplay ]= useState('none')
  const [ markerName, setMarkerName ] = useState('')

  const infoImage = '/img/' + markerName + '.webp'

 const containerStyle = {
   width: '100%',
   height: '100%',
   borderRadius: '20px'
 };

const MarkerSection = () =>{
  const handleNodeClick = (marker) => {
    console.log('marker', marker)
    setIframeDisplay('visible')
    setMarkerName(marker.name)

  }
  return(
  <section className="markers">
      {markers.map(marker =>
      <div className='marker' key={Math.random(4)}>
        <Marker 
          className='marker'
          onClick={() => handleNodeClick(marker)} 
          position={marker} 
          label={marker.name} 
          icon={icon} 
          style={{border: '5px solid black'}} 
          key={Math.random(5)} 
        />
      </div>
      )}
      </section>
)}

const handleInfoClose = () => {
  setIframeDisplay('none')
}
const center = {
  lat: 44.5558,
  lng: -116.4701
};
const icon = {
  url: "/img/map/pop.svg",
}
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: KEY
  })

  const [map, setMap] = React.useState(null)
  console.log(map)

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const infoStyle = {
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: 'lightgrey',
    width: '70vw',
    height: '65vh',
    position: 'absolute',
    //border: '5px solid red',
    top: '180px',
    right: '100px',
    display: iframeDisplay
  }

  const InfoStuff = () => {
    console.log(infoImage)
    return (
      <section>
        <button style={{float: 'right'}} onClick={() => handleInfoClose()}>X</button>
        <h3>
          {markerName}
        </h3>
        <img style={{maxWidth: '70vw', maxHeight: '65vh', objectFit: 'contain'}} src={infoImage} alt='track layout'></img>
      </section>
    )
  }
  

  return isLoaded ? (
    <div id="map_canvas">
      <GoogleMap
        center={center}
        zoom={5}
        mapContainerStyle={containerStyle}
        //onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerSection />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      <div style={infoStyle} >
        <InfoStuff />
      </div>
    </div>
  ) : <></>
}

  return (
    <div id="angry_main">
      <h3>Map with pins of Supermoto / Minimoto racing tracks</h3>
      <div className='mainComponent'>
      <MyComponent />
      </div>
    </div>
  );
}

export default MapPage;
