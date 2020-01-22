import React from "react";
import GoogleLayer from './google-layer/GoogleLayer';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
const ReactLeaflet =require ('react-leaflet');
// import DataTrac from './Traccar';

// import {latLngBounds,Map as LeafletMap, /*type*/ CRS, /*type*/ Renderer,  TileLayer,Marker, Popup} from 'leaflet'
// const { Map, TileLayer,Marker, Popup} = window.ReactLeaflet;


// class ReactLeaf extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             lat: 51.505,
//             lng: -0.09,
//             zoom: 13,
//         }
//     }

//     render(){
//         const position = [this.state.lat, this.state.lng];
//         return(
//             <LeafletMap center={position} zoom={this.state.zoom}>
//                 <TileLayer
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                     url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
//                 />
//                 <Marker position={position}>
//                     <Popup>
//                         A pretty CSS3 popup. <br/> Easily customizable.
//                     </Popup>
//                 </Marker>
//             </LeafletMap>
//         )
//     }
// }

// export default ReactLeaf;


// **********************************************************************
// import { render } from 'react-dom'
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

// const position = [51.505, -0.09]
// const map = (
//   <Map center={position} zoom={13}>
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//     />
//     <Marker position={position}>
//       <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
//     </Marker>
//   </Map>
// )

// render(map, document.getElementById('map-container'))
// ******************
// **************************************************************************
const ADDITIONAL_GOOGLE_LAYERS = {
  TRAFFIC_LAYER: 'TrafficLayer',
  TRANSIT_LAYER: 'TransitLayer',
}

const GOOGLE_LAYER_TYPES = {
  ROADMAP: 'roadmap',
  SATELLITE: 'satellite',
  TERRAIN: 'terrain',
  HYDRID: 'hybrid',
}
const { Map: LeafletMap, TileLayer, Marker, Popup,LayersControl,Tooltip ,Icon,Point } = ReactLeaflet
const { BaseLayer } = LayersControl;

// const CarIcon = new ReactLeaflet.Icon({
//   iconUrl: require('../../img/carr2.png'),
//   iconRetinaUrl: require('../../img/carr2.png'),
//   iconAnchor: null,
//   popupAnchor: null,
//   shadowUrl: null,
//   shadowSize: null,
//   shadowAnchor: null,
//   iconSize: (60, 75),
//   className: 'leaflet-div-icon'
// });


export default class SimpleExample extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 35.700000,
      lng: 51.408302,
      zoom: 12.3
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom} style={{width:'100%',height:'100%'}}>
        
          <TileLayer 
          // http://osm.org/copyright
            attribution='&copy; <a href="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {/* <LayersControl position="topright"> */}
          {/* <BaseLayer checked name='Google Maps Roadmap'>
            <GoogleLayer 
            googleKey={'AIzaSyBxDsaX9twtnrQ-yAIXtR_eJ4pEFspTLvM'} 
            maxZoom={17} 
            type={GOOGLE_LAYER_TYPES.HYDRID} 
            />
          </BaseLayer> */}
          {/* </LayersControl> */}
          {/* <ReactLeafletGoogleLayer googleMapsLoaderConf={{KEY:'AIzaSyBxDsaX9twtnrQ-yAIXtR_eJ4pEFspTLvM'}} type={'hybrid'} /> */}
        <Marker position={position} >
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
          <Tooltip>hello world</Tooltip>
        </Marker>
      </LeafletMap>
    );
  }
}


// ReactDOM.render(<SimpleExample />, document.getElementById('container'))