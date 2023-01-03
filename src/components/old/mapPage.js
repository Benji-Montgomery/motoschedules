import React from 'react'
// import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
// import markers from '../components/markers'
import './css/map.css'
// import { useState} from 'react';


// const KEY = process.env.REACT_APP_GOOGLE_API_KEY
// const MapPage = () => {
//   const [ iframeDisplay, setIframeDisplay ]= useState('none')
//   const [ markerName, setMarkerName ] = useState('')

//   const infoImage = '/img/' + markerName + '.webp'

//  const containerStyle = {
//    width: '100%',
//    height: '100%',
//    borderRadius: '20px'
//  };

// const MarkerSection = () =>{

//   const handleNodeClick = (marker) => {
//     setIframeDisplay('visible')
//     setMarkerName(marker.name)
//   }
//   return(
//   <section className="markers">
//       {markers.map((marker =>
//       <div className='marker' key={Math.random(4)}>
//         <Marker 
//           className='marker'
//           onClick={() => handleNodeClick(marker)} 
//           position={marker} 
//           label={marker.name}
//           icon={icon} 
//           style={{border: '5px solid black'}} 
//           key={Math.random(5)} 
//         />
//       </div>
//       ))}
//       </section>
// )}

//  const handleInfoClose = () => {

//    setIframeDisplay('none')
//  }

// const center = {
//   lat: 44.5558,
//   lng: -116.4701
// };
// const icon = {
//   url: "/img/map/pop.svg",
// }
// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: KEY
//   })

//   const [map, setMap] = React.useState(null)
//   console.log(map)
//   const onUnmount = React.useCallback(function callback(map) {
//     console.log('unmounting')
//     setMap(map)
//   }, [])

//   const infoStyle = {
//     borderRadius: '10px',
//     overflow: 'hidden',
//     backgroundColor: 'lightgrey',
//     width: '80vw',
//     height: '60vh',
//     position: 'absolute',
//     //border: '5px solid red',
//     top: '180px',
//     left: '10vw',
//     display: iframeDisplay,
//     border: '5px solid black'
//   }

//   const InfoStuff = () => {
//     return (
//       <section>
//         <button style={{float: 'right'}} onClick={() => handleInfoClose()}>close</button>
//         <h3>
//           {markerName}
//         </h3>
//         <img style={{maxWidth: '70vw', maxHeight: '50vh', objectFit: 'contain'}} src={infoImage} alt='track layout'></img>
//       </section>
//     )
//   }
//   const onLoad = () => {
//   }
  
  

//   return isLoaded ? (
//     <div id="map_canvas">
//       <GoogleMap
//         center={center}
//         zoom={5}
//         mapContainerStyle={containerStyle}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         <MarkerSection />
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//       <div style={infoStyle} >
//         <InfoStuff />
//       </div>
//     </div>
//   ) : <></>
// }

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from '../components/img/leaf-green.png';

const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],     
});

const center = {
  lat: 44.5558,
  lng: -116.4701
};
const containerStyle = {
  width: '90vw',
  height: '70vh',
  borderRadius: '20px'
};
const position = [39.6810, -119.8668]
const mapClick = (prop) => {
  console.log(prop)
}
const MapPage= () => {
  return (
    <div >
      <h3>Map with Pins of Super Moto and Mini Moto tracks</h3>
    <MapContainer center={center} zoom={5} style={containerStyle}>
      <TileLayer
        //https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}'
        url="https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a> contributors'
      />
      <Marker position={position}  icon={myIcon} click={() => mapClick('hii')} cli>
      <Popup style={{width: '80vw'}}>
        A pretty CSS3 popup. <br /> Easily customizable.
        <img src='/img/TCKC.webp' alt='Track Layout Map'></img>
      </Popup>
      </Marker>
      
    </MapContainer>
    </div>
  );
};
export default MapPage;
