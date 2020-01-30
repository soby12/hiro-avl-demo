import Leaf  from 'leaflet';
import React from "react";
import {getCarId,getCarSum,getCarTrip,changeFlag,getDate,getDevices,getRoute} from '../../../redux/actions/index';
import {connect} from "react-redux";


class SimpleExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13,
            routes:this.props.routees,
            poly:null,
            Cars:null,
            deviceName:['first'],
        }
        console.log('lesf constructor *********');
    }


    ws = new WebSocket('ws://shahrdari.dynu.net:8082/api/socket')

    createMap(){
        console.log('lesf create map *********');
        console.log(this.props.devices);
        
        var carActive = Leaf.icon({
            iconUrl: require('../../img/carr2.png'),
            // shadowUrl: '',
            iconSize:     [55, 55], // size of the icon
            shadowSize:   [0, 0], // size of the shadow
            iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
            shadowAnchor: [0, 0],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        var carDeactive = Leaf.icon({
            iconUrl: require('../../img/carr1.png'),
            // shadowUrl: '',
            iconSize:     [55, 55], // size of the icon
            shadowSize:   [0, 0], // size of the shadow
            iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
            shadowAnchor: [0, 0],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        const map= this.map = Leaf.map('map',{
            center:[35.830618, 50.932967],
            zoom:12.3,
            zoomControl:true,            
        });
        var street= Leaf.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
            id:'MapId',
            detectRetina:true,
            maxZoom:20,
            maxNativeZoom:17,
            subdomains:['mt0','mt1','mt2','mt3'],
        }).addTo(this.map)
        

        console.log(this.props.devices);
        
        this.ws.onopen = () => {
            console.log('connected')
            }    
        this.ws.onmessage = event => { 
            var data = JSON.parse(event.data);

            if (data.devices) {
                console.log('devices',data);
                this.updateDevices(data.devices);
            }
            if (data.positions) {
                console.log('positions',data);
                const cars = {}
                if(data.positions.length > 1){
                    console.log(this.state.deviceName);
                    const names=this.state.deviceName;
                    data.positions.map(position=>{
                        // console.log(position.deviceId);
                        cars[position.deviceId]=Leaf.marker([position.latitude,position.longitude], {icon: carActive} ).bindPopup(`<h2>${position.deviceId}</h2><h4>${names[position.deviceId]} </h4>`).addTo(this.map)
                        this.setState({Cars:cars})
                    })
                    // console.log(cars[1]);
                }else{
                    const Cars= this.state.Cars
                    this.updatePositions(data.positions,Cars)
                }
                
            }
            if (data.events) {
                // this.updateEvents(data.events);
                console.log(data.events)
            }        
            }    
        this.ws.onclose = () => {
            // console.log('disconnected')
            // setTimeout(() => this.connectSocket(), 60 * 1000);
            // automatically try to reconnect on connection loss    
        }
        
        return(map)
    }


    updateDevices(array){
        console.log('this is a devise',array[0].id,array[0].status);    
    }

    updatePositions(array,devices){
        const ID =array[0].deviceId;
        devices[ID].setLatLng([array[0].latitude,array[0].longitude])
        
    }
    createPolyline(){
        if(this.props.routees){
            const poly= Leaf.polyline(
                this.props.routees
            ).addTo(this.map);
            this.setState({poly:poly})
        }
    }



    // componentDidUpdate(prevState,preProps){
    //     this.updatePoly(this.state.poly,this.props.routees)
    // }
    
    componentDidMount(){
        console.log('DidMount');
        this.createMap()
        this.createPolyline()
            // ********************location on click
            // map.on('click', function(ev) {
            //     alert(ev.latlng); // ev is an event object (MouseEvent in this case)
            //     var lat= ev.latlng.lat;
            //     var lng= ev.latlng.lng;
            //     console.log(`this is ${lat}`);
            //     // x.push([lat,lng]);
            //     console.log(x);                
            //   });
        }

        
    render(){
      return(<div style={{width:'100%',height:'100%'}} id="map"></div>)
    }
}


const mapStateToProps = state => {
    return{
        carId: state.carId,
        Date:state.Date,
        from:state.from,
        to:state.to,
        devices:state.devices,
        Routes:state.Routes
    }
};

const mapDicpatchToProps =()=>{
    return{
        getCarId,
        getCarSum,
        getCarTrip,
        changeFlag,
        getDate,
        getDevices,
        getRoute,
    }
}

export default connect(mapStateToProps,mapDicpatchToProps())(SimpleExample)