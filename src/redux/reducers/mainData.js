// function Summary(id,from,to){
//     console.log('summaRY MAIN FUNCTION');
//     fetch(`/api/reports/summary?_dc=1578125549177&deviceId=${id}&type=allEvents&from=${from}&to=${to}&page=1&start=0&limit=25`).then(response => {
//         if (response.ok) {
//           response.json().then(devices => {
//             console.log(devices);            
//           });
//         }
//       });
    
// }
// function Trip(id,from,to){
//     console.log('TRIPS MAIN FUNCTION');
//     fetch(`/api/reports/trips?_dc=1578126054208&deviceId=${id}&type=allEvents&from=${from}&to=${to}&page=1&start=0&limit=25`).then(response => {
//         if (response.ok) {
//           response.json().then(devices => {
//             console.log(devices);            
//           });
//         }
//       });
// }


export default function reportReducer(state=null,action){
    switch(action.type){
        case "CAR_SUMMARY":{
          // let summary
          console.log(action.payload);
          
          fetch(`/api/reports/summary?_dc=1578125549177&deviceId=${action.payload.id}&type=allEvents&from=${action.payload.from}T20%3A30%3A00.000&to=${action.payload.to}T20%3A30%3A00.000&page=1&start=0&limit=25`).then(response => {
                    if (response.ok) {
                      response.json().then(devices => {
                        return state=devices           
                      });
                    }
                  });
          // return state=summary
        }
        
        case "GET_TRIPS":{
          fetch(`/api/reports/trips?_dc=1578126054208&deviceId=${action.payload.id}&type=allEvents&from=${action.payload.from}T20%3A30%3A00.000&to=${action.payload.to}T20%3A30%3A00.000&page=1&start=0&limit=25`).then(response => {
                    if (response.ok) {
                      response.json().then(devices => {
                        return state=devices   
                      });
                    }
                  });
          // return state=trips
        }
        default:
          return state
    }
}   

export const devices = (state=null,action) =>{
  switch(action.type){
    case 'DEVICE':{
      return state=action.payload
    }default:
      return state
    
  }
}

