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
            // car33:[36.0074496, 50.7053248],
            // car34:[35.9674496, 50.7053248],
            // car35:[35.9052642, 50.8876486],
            // car36:[35.8127072, 50.9863232],
            // car38:[35.9127072, 50.9863232],
            // car73:[36.5127072, 50.9863232],
            // car74:[34.8556546, 50.9794034],
            // car75:[35.8127072, 50.9863232],
            poly:null,
            Cars:null,
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
        // ***********************************
        // const tool=Leaf.control.custom({
        //     position: 'topright',
        //     content : '<button type="button" class="btn btn-default">'+
        //               '    <i class="fa fa-crosshairs"></i>'+
        //               '</button>'+
        //               '<button type="button" class="btn btn-info">'+
        //               '    <i class="fa fa-compass"></i>'+
        //               '</button>'+
        //               '<button type="button" class="btn btn-primary">'+
        //               '    <i class="fa fa-spinner fa-pulse fa-fw"></i>'+
        //               '</button>'+
        //               '<button type="button" class="btn btn-danger">'+
        //               '    <i class="fa fa-times"></i>'+
        //               '</button>'+
        //               '<button type="button" class="btn btn-success">'+
        //               '    <i class="fa fa-check"></i>'+
        //               '</button>'+
        //               '<button type="button" class="btn btn-warning">'+
        //               '    <i class="fa fa-exclamation-triangle"></i>'+
        //               '</button>',
        //     classes : 'btn-group-vertical btn-group-sm',
        //     style   :
        //     {
        //         margin: '10px',
        //         padding: '0px 0 0 0',
        //         cursor: 'pointer',
        //     },
        //     // datas   :
        //     // {
        //     //     'foo': 'bar',
        //     // },
        //     // events:
        //     // {
        //     //     click: function(data)
        //     //     {
        //     //         console.log('wrapper div element clicked');
        //     //         console.log(data);
        //     //     },
        //     //     dblclick: function(data)
        //     //     {
        //     //         console.log('wrapper div element dblclicked');
        //     //         console.log(data);
        //     //     },
        //     //     contextmenu: function(data)
        //     //     {
        //     //         console.log('wrapper div element contextmenu');
        //     //         console.log(data);
        //     //     },
        //     // }
        // }).addTo(map);
        // ***********************************
        var street= Leaf.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
            id:'MapId',
            detectRetina:true,
            maxZoom:20,
            maxNativeZoom:17,
            subdomains:['mt0','mt1','mt2','mt3'],
        }).addTo(this.map)
        const deviceOnMap=[]
        fetch('/api/devices')
            .then(response => {
                if (response.ok) {
                response.json().then(devices => {
                    console.log(devices);  
                    devices.map(device=>{
                        if(device.status==='online'){

                        }else if(device.status==='offline'){

                        }
                    })      
                });
                // this.setState({display:'none'})            
                };
            }); 

        console.log(deviceOnMap);
        this.setState({deviceOnMap})
            

        // var car33=Leaf.marker(this.state.car33, {icon: carActive} ).bindPopup("<h2>car33</h2><h4> ال نود </h4>").addTo(this.map)

        // var car34=Leaf.marker(this.state.car34, {icon: carActive} ).bindPopup("<b>car34</b><br>I am a popup.").addTo(this.map);
        
        // var car35=Leaf.marker(this.state.car35, {icon: carDeactive} ).bindPopup("<b>car35</b><br>I am a popup.").addTo(this.map);
        
        // var car36=Leaf.marker(this.state.car36, {icon: carActive} ).bindPopup("<b>car36</b><br>I am a popup.").addTo(this.map);

        // var car38=Leaf.marker(this.state.car38, {icon: carActive} ).bindPopup("<b>car38</b><br>I am a popup.").addTo(this.map);

        // var car73=Leaf.marker(this.state.car73, {icon: carActive} ).bindPopup("<b>car73</b><br>I am a popup.").addTo(this.map);
        
        // var car74=Leaf.marker(this.state.car74, {icon: carActive} ).bindPopup("<b>car74</b><br>I am a popup.").addTo(this.map);

        // var car75=Leaf.marker(this.state.car75, {icon: carActive} ).bindPopup("<b>car75</b><br>I am a popup.").addTo(this.map);


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
                    data.positions.map(position=>{
                        // console.log(position.deviceId);
                        cars[position.deviceId]=Leaf.marker([position.latitude,position.longitude], {icon: carActive} ).bindPopup(`<h2></h2><h4> ال نود </h4>`).addTo(this.map)
                        this.setState({Cars:cars})
                    })
                    // console.log(cars[1]);
                }else{
                    const Cars= this.state.Cars
                    this.updatePositions(data.positions,Cars)
                }
                
            }
            // if (data.events) {
            //     this.updateEvents(data.events);
            // }        
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

    updatePositions(array,devices/*car33,car36,car74,car35,car34,car38,car73,car75*/){
        // console.log(array[0].deviceId);
        const ID =array[0].deviceId;
        // console.log(devices[ID]);
        devices[ID].setLatLng([array[0].latitude,array[0].longitude])
        
        // if(array[0].deviceId==33){
        //     console.log('updateposition 33');
        //     car33.setLatLng([array[0].latitude,array[0].longitude]);
        // }else if(array[0].deviceId==74){
        //     console.log('updateposition 74');
        //     car74.setLatLng([array[0].latitude,array[0].longitude]);
        // }else if(array[0].deviceId==35){
        //     console.log('updateposition 35');
        //     car35.setLatLng([array[0].latitude,array[0].longitude]);
        // }else if(array[0].deviceId==36){
        //     console.log('updateposition 36');
        //     car36.setLatLng([array[0].latitude,array[0].longitude]);
        // }else if(array[0].deviceId==38){
        //     console.log('updateposition 38');
        //     car38.setLatLng([array[0].latitude,array[0].longitude]);
        // }else if(array[0].deviceId==73){
        //     console.log('updateposition 73');
        //     car73.setLatLng([array[0].latitude,array[0].longitude]);
        // }else if(array[0].deviceId==34){
        //     console.log('updateposition 34');
        //     car34.setLatLng([array[0].latitude,array[0].longitude]);
        // }else if(array[0].deviceId==75){
        //     console.log('updateposition 75');
        //     car75.setLatLng([array[0].latitude,array[0].longitude]);  
        // }
    }
    createPolyline(){
        if(this.props.routees){
            const poly= Leaf.polyline(
                this.props.routees
            ).addTo(this.map);
            this.setState({poly:poly})
        }
    }


    updatePoly(poly,latlon){
        // poly.setLatLngs(latlon)
    }

    componentDidUpdate(prevState,preProps){
        this.updatePoly(this.state.poly,this.props.routees)
    }
    
    componentDidMount(){
        console.log('DidMount');

        this.createMap()
        

        this.createPolyline()



            // ********circle
            // Leaf.circle([35.83, 51.408], {
            //     color: 'red',
            //     fillColor: '#f03',
            //     fillOpacity: 0.5,
            //     radius: 5000
            // }).addTo(this.map)


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