import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, LoadScript} from '@react-google-maps/api';
import markers from '../components/markers'
import './css/map.css'
import { useState } from 'react';


const KEY = process.env.REACT_APP_GOOGLE_API_KEY
// const MapPage = () => {
//   const [ iframeDisplay, setIframeDisplay ]= useState('none')
//   const [ markerName, setMarkerName ] = useState('')
//   const [activeInfoWindow, setActiveInfoWindow] = useState("");

// const MarkerSection = () =>{
//   const handleNodeClick = (marker) => {
//     setIframeDisplay('visible')
//     setMarkerName(marker.name)
//   }
//   return(
//   <section className="markers">
//       {markers.map(marker =>
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
//       )}
//       </section>
// )}

//  const handleInfoClose = (e) => {
//   e.preventDefault();
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

  // const InfoStuff = () => {
  //   return (
  //     <section>
  //       <button style={{float: 'right'}} onClick={handleInfoClose}>close</button>
  //       <h3>
  //         {markerName}
  //       </h3>
  //       <img style={{maxWidth: '70vw', maxHeight: '50vh', objectFit: 'contain'}} src={infoImage} alt='track layout'></img>
  //     </section>
  //   )
  // }
  // const onLoad = () => {
  // }
  
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
//
const MapPage = () => {
  const [activeInfoWindow, setActiveInfoWindow] = useState("")

  const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '20px'
  };
  const center = {
     lat: 44.5558,
     lng: -116.4701
  };

  const mapClicked = (event) => { 
    console.log(event.latLng.lat(), event.latLng.lng()) 
  }

  const markerClicked = (marker, index) => {  
    setActiveInfoWindow(index)
    console.log(marker, index) 
  }

  const markerDragEnd = (event, index) => { 
    console.log(event.latLng.lat())
    console.log(event.latLng.lng())
  }

  return (
    <div id="angry_main">
      <h3>Map with pins of Supermoto / Minimoto racing tracks</h3>
      <div className='mainComponent'>
        <div id="map_canvas">
          <LoadScript googleMapsApiKey={KEY}>
              <GoogleMap 
                  mapContainerStyle={containerStyle} 
                  center={center} 
                  zoom={5}
                  onClick={mapClicked}
              >
                  {markers.map((marker, index) => (
                      <Marker 
                          key={index} 
                          position={marker}
                          label={{text: marker.name, fontSize: '20px', fontWeight: 'bold'}}
                          //draggable={marker.draggable}
                          onDragEnd={event => markerDragEnd(event, index)}
                          onClick={event => markerClicked(marker, index)} 
                      >
                          {
                              (activeInfoWindow === index)
                              &&
                              <InfoWindow position={marker.position}>
                                  <span>
                                  {marker.name}
                                  <img src={`/img/` + marker.name + `.webp`} alt="sandy"></img>
                                  </span>
                              </InfoWindow>
                          }  
                      </Marker>
                  ))}
              </GoogleMap>     
          </LoadScript>
        </div>
      </div>
    </div>
  );
}

export default MapPage;