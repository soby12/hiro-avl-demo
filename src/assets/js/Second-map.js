import React from "react";
// import Sidebar from "react-sidebar";
import SimpleMap from '../../../map';
import SecPagSideL from './second-page-sideL';
import Downbar from './downbar';

import {/*Navbar , NavbarBrand , Nav , NavDropdown, NavLink ,*/ Col , Row , Container} from 'react-bootstrap';
// import {BrowserRouter as Router,Route , Link , Switch} from "react-router-dom";
import { faHome ,faPoll, faBars , faFilter , faSearch,  faFileAlt, faFile , faWrench , faChartBar,faMap} from "@fortawesome/free-solid-svg-icons";
import { faSun, far} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Map extends React.Component{
    render(){
        const sidebarStyles ={

        }
        return(
            <div style={{width:'1900px',height:'865px',background:'white'}}>
                <Row>
                    <Col sm={12} style={{height:'865px' }}>
                        {/* <SimpleMap style={{width:'1950px',height:'700px',background:'white'}}/> */}


                        <Downbar/>
                    </Col>
                </Row>
                <SecPagSideL/>
                
            </div>
        )
    }
}


export default Map;