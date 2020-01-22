import React from 'react';
import { css } from "@emotion/core";
import { ClipLoader ,RingLoader,SquareLoader,BarLoader} from "react-spinners";
import Websocket from 'react-websocket';
import {getCarId,getCarSum,getCarTrip,changeFlag,getDate,getDevices} from '../../redux/actions/index';
import {connect} from "react-redux";


import NavBar from '../js/NavBar';
import SideBar from '../js/SideBar';
import Pannel from '../js/first_panel';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top:400px;
`;
class FirstPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            display:'block',
            loading:true,
        };
        fetch('/api/devices')
            .then(response => {
                if (response.ok) {
                response.json().then(devices => {
                    console.log(devices); 
                    // this.props.getDevices(devices)           
                    // this.props.getDevices()           
                });
                this.setState({display:'none'})            
                };
            }); 
    }

    render(){
        const {display} = this.state;
        return(
            <React.Fragment>
                <div style={{zIndex:'200000',background:'white',position:'absolute',    height: '1013px',width: '2048px',display:display}}>
                    <BarLoader
                    css={override}
                    size={150}
                    color={"#54D5EA"}
                    loading={this.state.loading}
                    style={{display:display}}
                    height={20}
                    width={700}
                    />
                </div>
                <NavBar page='داشبورد'/>
                <SideBar 
                    dashCon='side-list-item active' 
                    dashIcon='icon active-icon'
                    dashTxt='side-list-h3 active-text active' 
                    dashA='side-list-item-text active'

                    mapCon='side-list-item'
                    mapIcon='icon'
                    mapTxt='side-list-h3'
                    mapA='side-list-item-text'
                />
                <Pannel/>
            </React.Fragment>
        )
    }

}


const mapStateToProps = state => {
    return{
        carId: state.carId,
        Date:state.Date,
        from:state.from,
        to:state.to,
        devices:state.devices
    }
};

const mapDicpatchToProps =()=>{
    return{
        getCarId,
        getCarSum,
        getCarTrip,
        changeFlag,
        getDate,
        getDevices,
    }
}

export default connect(mapStateToProps,mapDicpatchToProps())(FirstPage)