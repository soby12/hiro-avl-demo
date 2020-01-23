const Routes = (state=null,action)=>{
    switch(action.type){
        case "ROUTE":{
            return state=action.payload
        }
        default:{
            return state
        }
    }
}


export default Routes;