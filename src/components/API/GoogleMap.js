import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

import styled from 'styled-components'

const MapStyled = styled.div`
position: relative;
width: 70vw;
height: 60vh;
margin-bottom: 5%;
z-index: 0;
`

export class GoogleMap extends Component {

    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };

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

        <MapStyled> 
        <Map 
          google={this.props.google}
          zoom={3}
          initialCenter={
            {
              lat: 43.6433,
              lng: 51.1546
            }
          }
        >
        <Marker
          onClick={this.onMarkerClick}
          name={'Yo!'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
        </MapStyled>
      );
    }
  }
  
  export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey // developer purpose without apiKey = free version 
    }
  ))(GoogleMap)