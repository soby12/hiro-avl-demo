import React from 'react';
// import { Col , Row } from 'react-bootstrap';

// import SecPagSideL from './second-page-sideL';
import LeftbarRes from './leftbar_res';
import Downbar from './downbar';
import Leftbar from './leftbar';
import SimpleExample from './API/LeafLet';
// import SimpleExample from './API/React-Leaft';

export default class SecondPannel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            routees:[
                [35.700000,51.408302],
                [35.710500,51.418502]
            ],
        }
    }

    callbackFunction = (childData) => {
        this.setState({routees: childData})
    }

    render(){
        console.log(this.state.routees);
        
        return(
            <div className='main-div'>
                <div className='leftbar-res'>
                    <LeftbarRes/>
                </div>
                <div className='map-first-res'>
                    <SimpleExample routees={this.state.routees}/>
                    {/* <ReactLeaf/> */}
                    <Downbar/>
                    <Leftbar parentCallback = {this.callbackFunction}/>       
                </div>
                <div className='downbar-res'>

                </div>
            </div>
        )
    }
}
