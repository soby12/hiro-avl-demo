import Leaf  from 'leaflet';
import React from "react";
import {getCarId,getCarSum,getCarTrip,changeFlag,getDate,getDevices,getRoute} from '../../../redux/actions/index';
import {connect} from "react-redux";


// MainData();
class SimpleExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13,
            routes:this.props.routees,
            car33:[36.0074496, 50.7053248],
            car34:[35.9674496, 50.7053248],
            car35:[35.9052642, 50.8876486],
            car36:[35.8127072, 50.9863232],
            car38:[35.9127072, 50.9863232],
            car73:[36.5127072, 50.9863232],
            car74:[34.8556546, 50.9794034],
            car75:[35.8127072, 50.9863232],
            poly:null
        }
        console.log('lesf constructor *********');
        // console.log('leafletroutess-----------------------',this.state.routees);
        
    }


    ws = new WebSocket('ws://shahrdari.dynu.net:8082/api/socket')

    createMap(){
        console.log('lesf create map *********');

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
            zoomControl:false,            
        });
        var street= Leaf.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
            id:'MapId',
            detectRetina:true,
            maxZoom:20,
            maxNativeZoom:17,
            subdomains:['mt0','mt1','mt2','mt3'],
        }).addTo(this.map)  
        // console.log('creatMap');
        var car33=Leaf.marker(this.state.car33, {icon: carActive} ).bindPopup("<h2>car33</h2><h4> ال نود </h4>").addTo(this.map)

        var car34=Leaf.marker(this.state.car34, {icon: carActive} ).bindPopup("<b>car34</b><br>I am a popup.").addTo(this.map);
        
        var car35=Leaf.marker(this.state.car35, {icon: carDeactive} ).bindPopup("<b>car35</b><br>I am a popup.").addTo(this.map);
        
        var car36=Leaf.marker(this.state.car36, {icon: carActive} ).bindPopup("<b>car36</b><br>I am a popup.").addTo(this.map);

        var car38=Leaf.marker(this.state.car38, {icon: carActive} ).bindPopup("<b>car38</b><br>I am a popup.").addTo(this.map);

        var car73=Leaf.marker(this.state.car73, {icon: carActive} ).bindPopup("<b>car73</b><br>I am a popup.").addTo(this.map);
        
        var car74=Leaf.marker(this.state.car74, {icon: carActive} ).bindPopup("<b>car74</b><br>I am a popup.").addTo(this.map);

        var car75=Leaf.marker(this.state.car75, {icon: carActive} ).bindPopup("<b>car75</b><br>I am a popup.").addTo(this.map);
        // var car5=Leaf.marker([35.726917, 51.308212]/*, {icon: this.carDeactive} */).bindTooltip("my tooltip text").openTooltip().addTo(this.map);


        this.ws.onopen = () => {
            console.log('connected')
            }    
        this.ws.onmessage = event => { 
            var data = JSON.parse(event.data);

            if (data.devices) {
                this.updateDevices(data.devices);
            }
            if (data.positions) {
                this.updatePositions(data.positions,car33,car36,car74,car35,car34,car38,car73,car75);
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

    updatePositions(array,car33,car36,car74,car35,car34,car38,car73,car75){
        console.log('lesf update position *********');

        if(array[0].deviceId==33){
            console.log('updateposition 33');
            car33.setLatLng([array[0].latitude,array[0].longitude]);
        }else if(array[0].deviceId==74){
            console.log('updateposition 74');
            car74.setLatLng([array[0].latitude,array[0].longitude]);
        }else if(array[0].deviceId==35){
            console.log('updateposition 35');
            car35.setLatLng([array[0].latitude,array[0].longitude]);
        }else if(array[0].deviceId==36){
            console.log('updateposition 36');
            car36.setLatLng([array[0].latitude,array[0].longitude]);
        }else if(array[0].deviceId==38){
            console.log('updateposition 38');
            car38.setLatLng([array[0].latitude,array[0].longitude]);
        }else if(array[0].deviceId==73){
            console.log('updateposition 73');
            car73.setLatLng([array[0].latitude,array[0].longitude]);
        }else if(array[0].deviceId==34){
            console.log('updateposition 34');
            car34.setLatLng([array[0].latitude,array[0].longitude]);
        }else if(array[0].deviceId==75){
            console.log('updateposition 75');
            car75.setLatLng([array[0].latitude,array[0].longitude]);  
        }
    }
    createPolyline(){
        console.log('createpolyline+++++++++++++++++++++++');
        
        if(this.props.routees){
            const poly= Leaf.polyline(
                this.props.routees
            ).addTo(this.map);
            this.setState({poly:poly})
        }
    }


    updatePoly(poly,latlon){
        poly.setLatLngs(latlon)
    }

    componentDidUpdate(prevState,preProps){

        // const poly= Leaf.polyline([
        //     this.props.routees
        // ]).addTo(this.map);
        // poly.setLatLngs(this.props.routees)
        this.updatePoly(this.state.poly,this.props.routees)
    }
    
    componentDidMount(){
        console.log('DidMount');

        this.createMap()
        
            console.log('didmount*/*/*/*/*/**/*/**/*/*/*/*/*/*/*/*/',this.props.routees);

            // const poly= Leaf.polyline([
            //     this.props.routees
            //     [35.700000,51.408302],
            //     [35.710500,51.418502],
            //     [35.730500,51.408502],
            //     [35.740500,51.488502],
            //     [35.680500,51.488502]
            // ]).addTo(this.map);
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
        console.log('leafletroutess-----------------------',this.props.routees);
        console.log('lesf render*********');
        // console.log(this.props.routees);
        // this.createMap();
        // this.createPolyline();

        

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