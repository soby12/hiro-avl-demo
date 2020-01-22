const deviceReducer=(state=75,action)=>{
    switch(action.type){
        case "CARID":{
            return state=action.payload
        }
        default:{
            return state
        }
    }
}
export default deviceReducer;