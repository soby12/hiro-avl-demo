import React from 'react';

import LeftbarRes from './leftbar_res';
import Downbar from './downbar';
import Leftbar from './leftbar';
import SimpleExample from './API/LeafLet';

export default class SecondPannel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            routees:[
                [35.700000,51.408302],
                [35.710500,51.418502]
            ],
            events:null,
        }
    }

    callbackFunction = (childData) => {
        this.setState({routees: childData})
    }
    calbackEvent = (events) => {
        this.setState({events})
    }

    render(){
        console.log(this.state.routees);
        
        return(
            <div className='main-div'>
                <div className='leftbar-res'>
                    <LeftbarRes/>
                </div>
                <div className='map-first-res'>
                    <SimpleExample routees={this.state.routees} events={this.calbackEvent}/>
                    {/* <ReactLeaf/> */}
                    <Downbar/>
                    <Leftbar parentCallback = {this.callbackFunction} event={this.state.events}/>       
                </div>
                <div className='downbar-res'>

                </div>
            </div>
        )
    }
}
