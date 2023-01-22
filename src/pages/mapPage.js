import React from 'react'
import { GoogleMap, Marker, InfoWindow, LoadScript} from '@react-google-maps/api';
import markers from '../components/markers'
import './css/map.css'
import { useState } from 'react';


const KEY = process.env.REACT_APP_GOOGLE_API_KEY
const Children = () => {
  const [activeInfoWindow, setActiveInfoWindow] = useState("")
  const [iconState, setIconState] = useState('')

  const markerClicked = (marker, index) => {
    setIconState(marker.name)
    setActiveInfoWindow(index)
    console.log(marker, index) 
  }

  const markerDragEnd = (event, index) => { 
    console.log(event.latLng.lat())
    console.log(event.latLng.lng())
  }
   const iconMarker = (marker) => {
     if(marker.name === iconState){
       return '/img/sumoIcon64.png'
     }else{
       return '/img/motorcycling.png'
     }
   }
  const checker = (prop) => {
    if(prop !== undefined){
    return prop
    }else{
      return 'Unknown '
    }
  }

return (
  <span>
    {markers.map((marker, index) => (
      <Marker 
        key={index} 
        position={marker}
        icon={iconMarker(marker)}
        label={{text: marker.name, fontSize: '18px', fontWeight: 'bold', color: 'white'}}
        //draggable={marker.draggable}
        onDragEnd={event => markerDragEnd(event, index)}
        onClick={event => markerClicked(marker, index)}
        onMouseOver={event => setIconState(marker.name)}
        onMouseOut={() => setIconState('')}
      >
        {
          (activeInfoWindow === index)
          &&
          <InfoWindow
            options={{maxWidth: '100vw'}}
            position={marker.position}
            //onCloseClick={() => {setIconState('')}}
            >
              <span className='mainInfo'>
                <p className='title'>{marker.fullName} - {marker.location}</p>
                <span>
                  <img style={{maxHeight: '40vh', maxWidth: '70vw'}}src={`/img/` + marker.name + `.webp`} alt="Track Map"></img>
                </span>
                <ul className='mapUL'>
                  <li className='mapLI'>Longest Straightaway: {checker(marker.straight)}ft</li>
                  <li className='mapLI'>Turns: {checker(marker.turns)}</li>
                  <li className='mapLI'>Amenities: {checker(marker.amenities)}</li>
                  <li className='mapLI'>Racing Clubs: {checker(marker.clubs)}</li>
                </ul>
              </span>
          </InfoWindow>
        }  
      </Marker>
    ))}
  </span>
)

}
const MapPage = () => {
  const center = {
     lat: 44.5558,
     lng: -116.4701
  };
  const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '20px'
  };

  const mapClicked = (event) => { 
    console.log(event)
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
              <Children />
            </GoogleMap>     
          </LoadScript>
        </div>
      </div>
    </div>
  );
}

export default MapPage;