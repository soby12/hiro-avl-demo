

const To = (state='1',action)=>{
    switch(action.type){
        case "TO":{
            return state=action.payload
        }
        default:{
            return state
        }
    }
}



export default To;