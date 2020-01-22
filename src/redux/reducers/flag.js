const  Flag = (state=false,action) =>{
    switch(action.type){
        case"FLAG":{
            return state= action.payload
        }
        default:
            return state
    }
}

export default Flag;