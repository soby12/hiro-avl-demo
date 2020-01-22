
const From = (state='from',action)=>{
    switch(action.type){
        case "FROM":{
            return state=action.payload
        }
        default:{
            return state
        }
    }
}

const DateR = (state='date',action)=>{
    switch(action.type){
        case "DATE":{
            return state=action.payload
        }
        default:{
            return state
        }
    }
}



export default From;
// export default DateR;