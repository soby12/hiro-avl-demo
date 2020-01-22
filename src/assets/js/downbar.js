import React from "react";





export default class Downbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            h:'0px',
            mt:'255px',


        };
    }
    downbar(){
        if(this.state.h ==='260px'){
            this.setState({h:'0px',mt:'255px'});
        }else{
            this.setState({h:'260px',mt:''})
        }
        console.log('testing');
        
    }

    render(){
        const {h,mt} = this.state;
        return(

            <div className='downbar-container' style={{}}>
                <div className='downbar-btn' style={{marginTop:mt}} onClick={() => this.downbar()}>
                    
                </div>
                <div className='downbar-con' style={{height:h,marginTop:mt}}>

                </div>
            </div>
        )
    }
}