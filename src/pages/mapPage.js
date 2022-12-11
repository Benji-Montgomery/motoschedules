//import './App.css';
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import {Wrapper, Status } from '@googlemaps/react-wrapper'
import { useState, useEffect } from 'react'
import markers from '../components/markers'

//import { Marker } from "@react";

const MapPage = () => {
const containerStyle = {
  width: '600px',
  height: '400px'
};
const MarkerSection = () =>{
  console.log(markers)
  return(
  <section className="markers">
    <h2>blogs</h2>
      {markers.map(marker =>
        <Marker position={marker} label={marker.name} icon={icon} key={Math.random(5)} />
      )}
      </section>
)}
const center = {
  lat: 44.5558,
  lng: -114.4701
};
const icon = {
  url: "/img/map/pop.svg",
  anchor: { x: 5, y: 5 }
}
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBvy-6NL3yuEiqBubSgwEIaOpQACy5iCiM'
  })

  const [map, setMap] = React.useState(null)

//const onLoad = React.useCallback(function callback(map) {
//  // This is just an example of getting and using the map instance!!! don't just blindly copy!
//  const bounds = new window.google.maps.LatLngBounds(center);
//  map.fitBounds(bounds);
//  setMap(map)
//}, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        //onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerSection />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

  return (
    <div>
      <h1>Super Moto Schedules</h1>
      <MyComponent />
    </div>
  );
}

export default MapPage;
