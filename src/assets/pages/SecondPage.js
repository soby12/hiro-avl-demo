import React from 'react';

import NavBar from '../js/NavBar';
import SideBar from '../js/SideBar';
import SecondPannel from '../js/second_map';

import {getCarId,getCarSum,getCarTrip,changeFlag,getDate,getDevices} from '../../redux/actions/index';
import {connect} from "react-redux";


class SecondPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
        fetch('/api/devices')
            .then(response => {
                if (response.ok) {
                response.json().then(devices => {
                    this.props.getDevices(devices);
                    this.props.changeFlag(true)
                });            
                };
            });
    }
    render(){
        return(
            <React.Fragment>
                <NavBar page='نقشه'/>
                <SideBar 
                    dashCon='side-list-item' 
                    dashIcon='icon '
                    dashTxt='side-list-h3 ' 
                    dashA='side-list-item-text'

                    mapCon='side-list-item active'
                    mapIcon='icon active-icon'
                    mapTxt='side-list-h3 active-text active'
                    mapA='side-list-item-text active'
                />
                <SecondPannel/>
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

export default connect(mapStateToProps,mapDicpatchToProps())(SecondPage)