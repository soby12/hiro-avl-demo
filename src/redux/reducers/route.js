const Routes = (state=null,action)=>{
    switch(action.type){
        case "ROUTE":{
            // const routes=[];
            // fetch(`/api/reports/route?_dc=1578901966730&deviceId=${action.payload.id}&from=${action.payload.from}&to=${action.payload.to}&page=1&start=0&limit=25`).then(response => {
            //     if (response.ok) { 
            //         response.json().then(datas => {
            //             console.log('red=u===============================cer',datas);
                        
            //             datas.map((data)=>{routes.push([data.latitude,data.longitude])})
            //         });/*.then(routes =>{return state=routes});*/
            //     }
            //     return state=routes
            // });
            return state=action.payload
        }
        default:{
            return state
        }
    }
}


export default Routes;