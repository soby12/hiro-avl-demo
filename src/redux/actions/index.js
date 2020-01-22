import Flag from "../reducers/flag"

export const getCarSum=(id,from,to)=>{
    return{
        type:'CAR_SUMMARY',
        payload:{
            id:id,
            from:from,
            to:to,
        }
    }
}
export const getCarTrip=(id,from,to)=>{
    return{
        type:'CAR_TRIP',
        payload:{
            id:id,
            from:from,
            to:to,
        }
    }
}

export const getCarId=(id)=>{
    return{
        type:"CARID",
        payload:id
    }
}

export const getFrom=(from)=>{
    return{
        type:"FROM",
        payload:from,
    }
}

export const getTo=(to)=>{
    return{
        type:"TO",
        payload:to,
    }
}

export const getDate=(D)=>{
    return{
        type:"DATE",
        payload:D,
    }
}

export const changeFlag =(f)=>{
    return{
        type:"FLAG",
        payload:f
    }
}

export const getDevices=(dev)=>{
    // fetch('/api/devices')
    //         .then(response => {
    //             if (response.ok) {
    //             response.json().then(devices => {
    //                     return{
    //                         type:'DEVICE',
    //                         payload:devices
    //                     }            
    //                 });            
    //             };
    //         });
    return {
        type:'DEVICE',
        payload:dev,
    }
            
}

export const getRoute =(/*id,from,to*/r)=>{
    return{
        type:"ROUTE",
        payload:r
        // {
        //     // id:id,
        //     // from:from,
        //     // to:to
        // }
    }
}
export const Side =(nav,con,left,right)=>{
    return{
        type:"SIDE",
        payload:{
            nav,
            con,
            left,
            right,
        }
    }
}