import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import React, { Component } from "react";
import { style, mapStyle } from "./style";

const locations = [
  { lat: 31.522355, lng: 74.436162 },
  { lat: 31.522335, lng: 74.43574 },
  { lat: 31.522315, lng: 74.436162 },
  { lat: 31.522345, lng: 74.43574 },
  { lat: 31.522355, lng: 74.436172 },
  { lat: 31.522335, lng: 74.43594 },
  { lat: 31.524029, lng: 74.437116 },
  { lat: 31.524095, lng: 74.437374 },
  { lat: 31.527824, lng: 74.434982 },
  { lat: 31.527796, lng: 74.42804 },
  { lat: 31.521017, lng: 74.434363 },
];

function _mapLoaded(mapProps, map) {
  map.setOptions({
    styles: mapStyle,
  });
}

const MapContainer = (props) => {
  const onMarkerClick = () => {};
  return (
    <Map
      google={props.google}
      style={style}
      initialCenter={{
        lat: 31.4579117,
        lng: 74.2522293,
      }}
      zoom={10}
      onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
    >
      {locations.map((value, index) => {
        return <Marker position={value}></Marker>;
      })}
    </Map>
  );
};

const LoadingContainer = (props) => <div>Fancy loading container!</div>;

const GoogleMap = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
  LoadingContainer: LoadingContainer,
})(MapContainer);

export default GoogleMap;
