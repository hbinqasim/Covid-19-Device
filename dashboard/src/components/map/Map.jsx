import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import React, { Component } from "react";
import { style, mapStyle } from "./style";

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
    ></Map>
  );
};

const LoadingContainer = (props) => <div>Fancy loading container!</div>;

const GoogleMap = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
  LoadingContainer: LoadingContainer,
})(MapContainer);

export default GoogleMap;
