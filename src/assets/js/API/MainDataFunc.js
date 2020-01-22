import Leaf  from 'leaflet';
import React from "react";
import HashMap from 'hashmap';

var dataHash = new HashMap();


const ws = new WebSocket('ws://shahrdari.dynu.net:8082/api/socket')

export default function MainData(){
    console.log('main data function*************');    
    ws.onopen = () => {console.log('connected')}    
    ws.onmessage = event => { 
        var data = JSON.parse(event.data);
        if (data.devices) {}
        if (data.positions) {
            var Position=[data.positions[0].latitude,data.positions[0].longitude]
            var key =data.positions[0].deviceId;
            var values=[Position,data.positions[0].attributes.distance,data.positions[0].speed]
            
            dataHash.set(key,values);
            
            for (const pair of dataHash) {
                console.log(`${pair.key} : ${pair.value}`)
            };
        }
        if (data.events) {}        
        }    
    ws.onclose = (e) => {
        console.log('disconnected')
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
        // setTimeout(function() {connect();}, 1000);
        }  
    
    
    return('data')
}

export  function Summary(id,from,to){
    console.log('summaRY MAIN FUNCTION');
    fetch(`/api/reports/summary?_dc=1578125549177&deviceId=${id}&type=allEvents&from=${from}&to=${to}&page=1&start=0&limit=25`).then(response => {
        if (response.ok) {
          response.json().then(devices => {
            console.log(devices);            
          });
        }
      });
    
}

export  function Trip(id,from,to){
    console.log('TRIPS MAIN FUNCTION');
    fetch(`/api/reports/trips?_dc=1578126054208&deviceId=${id}&type=allEvents&from=${from}&to=${to}&page=1&start=0&limit=25`).then(response => {
        if (response.ok) {
          response.json().then(devices => {
            console.log(devices);            
          });
        }
      });
}