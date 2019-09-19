import React, { Component } from 'react';
import Map from "../../../components/map/Map"

// login hooks fun
var map
class Login extends Component {

    
      render() {
        
        return (
            <Map
            id="map"
            options={{
              center: { lat: 28.6210, lng: 77.3812 },
              zoom: 16
            }}
            onMapLoad={map => {
                console.log("dataaaaaa", map)
              var marker = new window.google.maps.Marker({
                position: { lat: 28.6210, lng: 77.3812 },
                map: map,
                title: 'Mobcoder'
              });
              
            }}
          />
       
        );
      }
    }
export default Login;
