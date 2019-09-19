import React, { Component } from 'react';
import { render } from 'react-dom'

const cli = ()=> alert("ok")

class Map extends Component {
  constructor(props) {
    super(props);

  }
  

  onScriptLoad= ()=> {
    var map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    //   new window.google.maps.addEventListener('click',cli)
      var drawingManager = new window.google.maps.drawing.DrawingManager({
        drawingControl: true,
        drawingControlOptions: {
          position: window.google.maps.ControlPosition.TOP_CENTER,
          drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
        },
        
      
      });

      window.google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
        // assuming you want the points in a div with id="info"
        // document.getElementById('info').innerHTML += "polygon points:" + "<br>";
        for (var i = 0; i < polygon.getPath().getLength(); i++) {
            // document.getElementById('info').innerHTML += polygon.getPath().getAt(i).toUrlValue(6) + "<br>";
            console.log("map data ", polygon.getPath().getAt(i).toUrlValue(6))
         }
    });
    // window.google.maps.event.addListener(drawingManager, 'overlaycomplete', function (polygon) {
    //     // assuming you want the points in a div with id="info"
    //     // document.getElementById('info').innerHTML += "polygon points:" + "<br>";
    //     // for (var i = 0; i < polygon.getPath().getLength(); i++) {
    //         // document.getElementById('info').innerHTML += polygon.getPath().getAt(i).toUrlValue(6) + "<br>";
    //         console.log("map data ", polygon)
    //     // }
    // });

     
      drawingManager.setMap(map);
    this.props.onMapLoad(map)

    
  }




  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBZt87qC93OB0fgzGAcVPBOdaan41YIuqA&libraries=drawing&callback=initMap`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {     
  
    return (
      <div style={{ width: "100vw", height: "100vh" }} id="map" />
    );
  }
}

export default Map