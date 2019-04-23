import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showingInfoWindow: false, //Hides or the shows the infoWindow
        activeMarker: {}, //Shows the active marker upon click
        selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    }; 
  } 

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null
        });
    }
  };

  render() {
    return (
      <div>
        <h1>Hello Google Maps</h1>
        <Map 
          google={this.props.google}
          initialCenter={{
            lat: 43.7044,
            lng: -72.2887
          }}
          zoom={16}
        > 
          <Marker
            name={'DIs a marker'}
            position={{lat: 43.70455, lng: -72.2943}}
            onClick={this.onMarkerClick}
          />

          <InfoWindow 
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h2>{this.state.selectedPlace.name}</h2>
            </div>
          </InfoWindow>
        </Map>

      </div>
    ) 
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDVptf0KFvD8VjJ8qOerMCo-b8JFwp5c14'
})(MapContainer);