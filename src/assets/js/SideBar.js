import React from 'react';
import { faPoll, faBars ,faSun, faFile , faWrench ,faMap} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {getCarId,getCarSum,getCarTrip,changeFlag,getDate,getDevices,getRoute} from '../../redux/actions/index';
import {connect} from "react-redux";


class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dashCon:this.props.dashCon,
            mapCon:this.props.mapCon,

            dashIcon:this.props.dashIcon,
            mapIcon:this.props.mapIcon,

            dashA:this.props.dashA,
            mapA:this.props.mapA,

            dash_txt:this.props.dashTxt,
            map_txt:this.props.mapTxt,

            sideCon:'side-main',
            txtDis:'',
            legoML:'60px'
        }
        console.log(this.props);
        
        
    }

    sideClick(){
        if(this.state.sideCon==='side-main'){
            this.setState({sideCon:'side-main-click',txtDis:'none',legoML:'8px'})
        }else{
            this.setState({sideCon:'side-main',txtDis:'',legoML:'60px'})
        }
    }

    render(){
        const {dashCon,mapA,dashA,mapCon,dashIcon,mapIcon,dash_txt,map_txt,sideCon,txtDis,legoML}=this.state;
        // console.log(dashCon);
        
        return(
            <div className={sideCon} style={{}}>
                <div className='side-logo'>
                    <div className='brandT'>
                        <h5 className='brandText' style={{display:txtDis}}>
                            Hiro FMS
                        </h5>
                    </div>
                    <div className='logo' style={{marginLeft:legoML}}>
                        <img  src={require('../img/logo1.png')}/>
                    </div>
                </div>

{/* *********list************ */}
                <div className='side-list'>
                    <div className='side-list-item'>
                        <img className='menu-bar' src={require('../img/menu1.png')} /*onClick={ this.sideClick.bind(this)}//*//>
                    </div>

                    <div className={dashCon}>
                        <a href='http://localhost:3000/dash'className={dashA}>
                            <FontAwesomeIcon className={dashIcon} icon={faPoll} style={{width:'25px',height:'25px'}}/>
                            <h3 className={dash_txt} style={{display:txtDis}}>
                                داشبورد
                            </h3>
                            
                        </a>                        
                    </div>

                    <div className={mapCon}>
                        <a href='http://localhost:3000/maps' className={mapA}>
                            <FontAwesomeIcon className={mapIcon} icon={faMap} style={{width:'25px',height:'25px'}}/>
                            <h3 className={map_txt} style={{display:txtDis}}>
                                نقشه
                            </h3>

                        </a>
                    </div>

                    <div className='side-list-item'>
                        <a href='#' className='side-list-item-text'>
                            <FontAwesomeIcon className='icon' icon={faFile} style={{width:'25px',height:'25px'}}/>
                            <h3 className='side-list-h3' style={{display:txtDis}}>
                                دستگاه ها
                            </h3>

                        </a>
                    </div>

                    <div className='side-list-item'>
                        <a href='#' className='side-list-item-text'>
                            <FontAwesomeIcon className='icon' icon={faSun} style={{width:'25px',height:'25px'}}/>
                            <h3 className='side-list-h3' style={{display:txtDis}}>
                                عملیات
                            </h3>

                        </a>
                    </div>

                    <div className='side-list-item'>
                        <a href='#' className='side-list-item-text'>
                            <FontAwesomeIcon className='icon' icon={faWrench} style={{width:'25px',height:'25px'}}/>
                            <h3 className='side-list-h3' style={{display:txtDis}}>
                                نگه داری
                            </h3>

                        </a>
                    </div>


                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        carId: state.carId,
        Date:state.Date,
        from:state.from,
        to:state.to,
        devices:state.devices,
        Routes:state.Routes
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
        getRoute,
    }
}

export default connect(mapStateToProps,mapDicpatchToProps())(SideBar)