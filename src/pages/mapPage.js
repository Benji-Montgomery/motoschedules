import React from 'react'
import { GoogleMap, Marker, InfoWindow, LoadScript} from '@react-google-maps/api';
import markers from '../components/markers'
import './css/map.css'
import { useState } from 'react';


const KEY = process.env.REACT_APP_GOOGLE_API_KEY

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
    console.log(event)
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
                  icon={'img/motorcycling.png'}
                  label={{text: marker.name, fontSize: '18px', fontWeight: 'bold', color: 'white'}}
                  //draggable={marker.draggable}
                  onDragEnd={event => markerDragEnd(event, index)}
                  onClick={event => markerClicked(marker, index)}
                  //onMouseOver={event => setIconState(iconState.concat(marker.name))}
                  // onMouseOut={() => setIconState(...iconState, '')}
                >
                  {
                    (activeInfoWindow === index)
                    &&
                    <InfoWindow
                      options={{maxWidth: '100vw'}}
                      position={marker.position}
                      >
                        <span style={{fontSize: '20px', fontWeight: 'bold', display: 'flex', flexDirection: 'column'}}>
                          <p style={{margin: 0}}>{marker.fullName} - {marker.location}</p>
                          <span>
                            <img style={{maxHeight: '40vh', maxWidth: '70vw'}}src={`/img/` + marker.name + `.webp`} alt="Track Map"></img>
                          </span>
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