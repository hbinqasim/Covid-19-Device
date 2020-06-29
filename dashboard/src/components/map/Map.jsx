import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import React, { Component } from "react";
import { style, mapStyle } from "./style";
import { useContext } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import IconMarker from "../../images/icon-marker.png";

function _mapLoaded(mapProps, map) {
  map.setOptions({
    styles: mapStyle,
  });
}

const MapContainer = (props) => {
  const [locationArray, setlocationArray] = useState([]);
  const [showingInfoWindow, setshowingInfoWindow] = useState(false); //Hides or the shows the infoWindow
  const [activeMarker, setactiveMarker] = useState({}); //Shows the active marker upon click
  const [selectedPlace, setselectedPlace] = useState({});

  const onMarkerClick = (props, marker, e) => {
    setselectedPlace(props);
    setactiveMarker(marker);
    setshowingInfoWindow(true);
  };

  const onClose = (props) => {
    if (showingInfoWindow) {
      setshowingInfoWindow(false);
      setactiveMarker(null);
    }
  };

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_SRV_URL}/patients`)
      .then((value) => {
        const array = value.data.data;
        setlocationArray(array);
      })
      .catch((reason) => {
        console.log(reason);
      });
  }, []);

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
      {locationArray.map((value, index) => {
        return (
          <Marker
            // @ts-ignore
            name={`Quarantine location of ${value.name}`}
            onClick={onMarkerClick}
            key={index}
            position={{ lat: value.location.lat, lng: value.location.long }}
            icon={{
              url: IconMarker,
              anchor: new window.google.maps.Point(32, 32),
              scaledSize: new window.google.maps.Size(34, 34),
            }}
          ></Marker>
        );
      })}
      {locationArray.map((value, index) => {
        return (
          value.current_location && (
            <Marker
              // @ts-ignore
              name={`Cuttent location of ${value.name}`}
              onClick={onMarkerClick}
              key={index}
              position={{
                lat: value.current_location.lat,
                lng: value.current_location.long,
              }}
            ></Marker>
          )
        );
      })}

      <InfoWindow
        // @ts-ignore
        marker={activeMarker}
        visible={showingInfoWindow}
        onClose={onClose}
      >
        <div>
          <h6>
            {
              // @ts-ignore
              selectedPlace.name
            }
          </h6>
        </div>
      </InfoWindow>
    </Map>
  );
};

const LoadingContainer = (props) => <div>Fancy loading container!</div>;

const GoogleMap = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
  LoadingContainer: LoadingContainer,
})(MapContainer);

export default GoogleMap;
