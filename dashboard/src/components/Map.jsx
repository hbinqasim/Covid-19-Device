import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import React, { Component } from "react";

// ...

const style = {
  width: "100%",
  height: "100%",
};
const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};
class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807,
        }}
        zoom={15}
        onClick={this.onMapClicked}
      ></Map>
    );
  }
}

const LoadingContainer = (props) => <div>Fancy loading container!</div>;

const GoogleMap = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
  LoadingContainer: LoadingContainer,
})(MapContainer);

export default GoogleMap;
