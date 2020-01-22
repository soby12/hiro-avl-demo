export const SideClick = (state={nav:'1730px',con:'1730px',left:'670px',right:'1000px'},action)=>{
    switch(action.type){
        case "SIDE":{
            
            return state=action.payload
        }
        default:{
            return state
        }
    }
}


