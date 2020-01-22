import React from 'react';
import Select from 'react-select';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {faEllipsisV,faDownload, faTimes,faMinus , faPlus, faCheckSquare,faCircle} from "@fortawesome/free-solid-svg-icons";
import {faSquare} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import moment from 'moment';
import moment from 'moment-jalaali';


import { ClipLoader ,RingLoader,SquareLoader,BarLoader} from "react-spinners";
import { css } from "@emotion/core";

import "react-modern-calendar-datepicker/lib/DatePicker.css";

import {getCarId,getCarSum,getCarTrip,changeFlag,getDate,getDevices,getRoute} from '../../redux/actions/index';
import {connect} from "react-redux";
import Cal from './Left_Cal';


const override = css`
    margin-top: 100px;
    margin-left: 10px;
    position: absolute;
    float: left;
`;
class Leftbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            con_h:'100%',
            con_w:'0px',

            leftsidebar1:'',
            leftsidebar1Cls:'sec-page-side-L-head-item-active',
            leftsidebar2:'none',
            leftsidebar2Cls:'sec-page-side-L-head-item',
            leftsidebar3:'none',
            leftsidebar3Cls:'sec-page-side-L-head-item',

            btn_display:'none',

            AllDevices:[{name:'دستگاه ها',status:'online'}],
            options:[],
            selectedOption:{/*value: 36, label: "هایس 05"*/},
            reportT:'none',
            reportS:'none',
            checkedT:false,
            checkedS:false,
            loadDis:"none",
            bodyDis:'none',
            carId:'',
            summary:{
                max:'',
                dis:'',
                avr:''
            },
            trips:[],
            loading:true,
            routees:null,
            tripBack:'white'

        }; 
                
        
        fetch('/api/devices')
        .then(response => {
            if (response.ok) {
                response.json().then(devices => {
                    this.setState({AllDevices:devices});
                    let A=[]
                    const options=devices.map(function(x){
                        A.push({value:x.id , label:x.name});                         
                    })
                    this.setState({options:A})         
                });          
            };
        });
        String.prototype.allReplace = function(obj) {
            var retStr = this;
            for (var x in obj) {
                retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
            }
            return retStr;
        };
        
    }
   
    
    leftbar(){               
        if(this.state.con_w==='410px'){
            this.setState({con_w:'0px',btn_display:'none'})
        }else{
            this.setState({con_w:'410px',btn_display:''})
        }
    }
    leftsidebar1(){
        this.setState({leftsidebar1:'',leftsidebar1Cls:'sec-page-side-L-head-item-active',                              leftsidebar2:'none',leftsidebar2Cls:'sec-page-side-L-head-item',                                 leftsidebar3:'none',leftsidebar3Cls:'sec-page-side-L-head-item'})
    }
    leftsidebar2(){
        this.setState({leftsidebar1:'none',leftsidebar1Cls:'sec-page-side-L-head-item'
                    ,leftsidebar2:'',leftsidebar2Cls:'sec-page-side-L-head-item-active',leftsidebar3:'none',leftsidebar3Cls:'sec-page-side-L-head-item'})
    }
    leftsidebar3(){
        this.setState({leftsidebar1:'none',leftsidebar1Cls:'sec-page-side-L-head-item',                                 leftsidebar2:'none',leftsidebar2Cls:'sec-page-side-L-head-item',
                        leftsidebar3:'',leftsidebar3Cls:'sec-page-side-L-head-item-active'})
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        this.setState({carId:selectedOption['value']});
        this.props.getCarId(selectedOption['value'])
      };

    checkS(){        
        if(this.state.reportS ==='none' && this.state.checkedS==false){
            this.setState({reportS:'block',reportT:'none',checkedS:true,checkedT:false})
        }else{
            this.setState({reportS:'none',reportT:'none',checkedS:false,checkedT:false})
        }
    }
    checkT(){
        if(this.state.reportT ==='none'){
            this.setState({reportT:'block',reportS:'none',checkedS:false,checkedT:true})
        }else{
            this.setState({reportT:'none',reportS:'none',checkedS:false,checkedT:false})
        }
    }
    flag(){
        this.setState({loadDis:'block',bodyDis:'none'})
        if(this.state.checkedS ){
            fetch(`/api/reports/summary?_dc=1578125549177&deviceId=${this.props.carId}&type=allEvents&from=${this.props.from}T10:26:00.996Z&to=${this.props.to}T10:26:00.996Z&page=1&start=0&limit=25`).then(response => {
                if (response.ok) {
                  response.json().then(devices => {
                    this.setState({
                        summary:{
                            max:devices[0].maxSpeed.toFixed(2),
                            dis:devices[0].distance.toFixed(2),
                            avr:devices[0].averageSpeed.toFixed(2)},
                        loadDis:'none',
                        bodyDis:'block'
                    })
                  });
                }
              });
        }else{
            fetch(`/api/reports/trips?_dc=1578126054208&deviceId=${this.props.carId}&type=allEvents&from=${this.props.from}T10:26:00.996Z&to=${this.props.to}T10:26:00.996Z&page=1&start=0&limit=25`).then(response => {
                if (response.ok) {
                  response.json().then(devices => {
                    console.log(devices);
                    let Trips=[]
                    devices.map(device =>{Trips.push([device.deviceId,device.maxSpeed.toFixed(2),device.averageSpeed.toFixed(2),device.distance.toFixed(2),device.startTime.replace(/:/g, '%3A').replace(/[+]/, 'Z').replace(/0000/, ''),device.endTime.replace(/:/g, '%3A').replace(/[+]/, 'Z').replace(/0000/, '')])
                    })
                    this.setState({
                        trips:Trips,
                        loadDis:'none',
                        bodyDis:'block',
                    })
                })
              };
            })
          
        }}
    componentDidMount(){
        console.log(this.props.devices);

    }

    sendData = (routees) => {
        this.props.parentCallback(routees);
   }


    routes(f,t){
        const id=this.props.carId;
        console.log(id,f,t);
        const routes=[]
        this.setState({loadDis:'block'})
        fetch(`/api/reports/route?_dc=1578901966730&deviceId=${id}&from=${f}&to=${t}&page=1&start=0&limit=25`).then(response => {
            if (response.ok) { 
                response.json().then(datas => {
                    datas.map((data)=>{routes.push([data.latitude,data.longitude])})
                    this.setState({routees:routes,loadDis:'none'})
                    this.sendData(routes)
                })
            }

            
        });
        console.log(this.state.routees);
    }

    render(){
        console.log(this.state.routees);
        this.props.getRoute(this.state.routees)  
        
        const {con_h,con_w,selectedOption, leftsidebar1,leftsidebar1Cls, leftsidebar2,leftsidebar2Cls, leftsidebar3,leftsidebar3Cls, btn_display,reportS,reportT,checkedS,checkedT,loadDis,bodyDis,trips,AllDevices,tripBack} =this.state;
        
        console.log(AllDevices);

        const Ts = [];
        trips.map(trip=>{
            Ts.push([
                    [moment(trip[4].replace(/[+]/, '').replace(/0000/, '').replace(/%3A/g,':').replace('T','').replace('Z',' ').replace(/000/,'').replace(/-/g,'/').slice(0,10),'YYYY/MM/DD').format('jYYYY/jM/jD'),
                    trip[4].replace(/[+]/, '').replace(/0000/, '').replace(/%3A/g,':').replace('T','').replace('Z',' ').replace(/000/,'').replace(/-/g,'/').slice(10,18)],
                    [moment(trip[5].replace(/[+]/, '').replace(/0000/, '').replace(/%3A/g,':').replace('T','').replace('Z',' ').replace(/000/,'').replace(/-/g,'/').slice(0,10),'YYYY/MM/DD').format('jYYYY/jM/jD'),
                    trip[5].replace(/[+]/, '').replace(/0000/, '').replace(/%3A/g,':').replace('T','').replace('Z',' ').replace(/000/,'').replace(/-/g,'/').slice(10,18)],
                    trip[2],
                    trip[1],
                    trip[3],
                    trip[4],
                    trip[5]
                ])
        })
        console.log(Ts);
        
        return(
            <div className='leftbar-container'>
                <div className='leftbar-con' style={{height:con_h,width:con_w}}>
                    
                        {/* **********head********* */}
                        <div className='sec-page-side-L-head' style={{display:btn_display}} >
                            <div className={leftsidebar1Cls}
                            onClick={() => this.leftsidebar1()} style={{cursor:'pointer'}}>
                                    <h5 className='head-item-h5' >
                                        دستگاه ها
                                    </h5>
                            </div>
                            <div className={leftsidebar2Cls}
                            onClick={() => this.leftsidebar2()} style={{cursor:'pointer'}}>
                                    <h5 className='head-item-h5'>
                                        رویداد ها
                                    </h5>
                            </div>
                            <div className={leftsidebar3Cls} onClick={() => this.leftsidebar3()} style={{cursor:'pointer'}}>
                                    <h5 className='head-item-h5'>
                                        تاریخچه  
                                    </h5>                          
                            </div>
                        </div>


                        {/* ***********pages********** */}
                        <div className='sec-page-side-L-pages' style={{display:btn_display}}>

                            {/* **********first********** */}
                            <div className='page-container' style={{display:leftsidebar1}}>

                                <input className='page-search' placeholder='جستجو'>
                                </input>
                                <div className='first-page-container'>
                                    {
                                        AllDevices.map(device=>{
                                            if(device.status==='online'){
                                                return <div className='first-page-item' >
                                                <div className='first-page-item-cols'>
                                                    <FontAwesomeIcon icon={faCheckSquare} style={{ marginTop:'15px',height:'30px',width:'30px',marginLeft:'15px',color:'white',cursor:'pointer'}}/>
                                                </div>                      
                                                <div className='first-page-item-cols' style={{marginLeft:'20px'}}> 
                                                    <FontAwesomeIcon className='first-page-plus-icon' icon={faCircle} style={{ width:'10px',height:'10px',marginTop:'25px',    marginLeft: '10px',color:'#12F948'}}/>
                                                </div>                     
                                                <div className='first-page-item-cols-last'>
                                                    <Button id="PopoverLegacy" type="button" style={{width:'1px',height:'20px',background:'transparent',border:'none'}}>
                                                        <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                                    </Button>
                                                    <UncontrolledPopover trigger="legacy" placement="left" target="PopoverLegacy">
                                                        {/* <PopoverHeader>گزینه ها</PopoverHeader> */}
                                                        <PopoverBody> lll</PopoverBody>
                                                    </UncontrolledPopover>
                                                </div>
                                                <div className='first-page-item-cols-4'>
                                                    <h4 style={{cursor:'pointer'}}>
                                                        {device.name}
                                                    </h4>
                                                </div>                      
                                            </div>
                                            }else if(device.status==='offline'){
                                                return <div className='first-page-item' >
                                                <div className='first-page-item-cols'>
                                                    <FontAwesomeIcon icon={faCheckSquare} style={{ marginTop:'15px',height:'30px',width:'30px',marginLeft:'15px',color:'white',cursor:'pointer'}}/>
                                                </div>                      
                                                <div className='first-page-item-cols' style={{marginLeft:'20px'}}> 
                                                    <FontAwesomeIcon className='first-page-plus-icon' icon={faCircle} style={{ width:'10px',height:'10px',marginTop:'25px',    marginLeft: '10px',color:'#F10D0D'}}/>
                                                </div>                     
                                                <div className='first-page-item-cols-last'>
                                                    <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                                </div>
                                                <div className='first-page-item-cols-4'>
                                                    <h4 style={{cursor:'pointer'}}>
                                                        {device.name}
                                                    </h4>
                                                </div>                      
                                            </div>
                                            }else{
                                                return <div className='first-page-item' >
                                                <div className='first-page-item-cols'>
                                                    <FontAwesomeIcon icon={faCheckSquare} style={{ marginTop:'15px',height:'30px',width:'30px',marginLeft:'15px',color:'white',cursor:'pointer'}}/>
                                                </div>                      
                                                <div className='first-page-item-cols' style={{marginLeft:'20px'}}> 
                                                    <FontAwesomeIcon className='first-page-plus-icon' icon={faMinus} style={{width:'25px',height:'25px',marginTop:'15px', color:'white'}}/>
                                                </div>                     
                                                <div className='first-page-item-cols-last'>
                                                    <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                                </div>
                                                <div className='first-page-item-cols-4'>
                                                    <h4 style={{cursor:'pointer'}}>
                                                        {device.name}
                                                    </h4>
                                                </div>                      
                                            </div>
                                            }
                                            }
                                            )
                                    }
                                    
                                    {/* {
                                        devices.map(device=><div>{device.id}</div>)
                                    } */}
                                    {/* <div className='first-page-item' >
                                        <div className='first-page-item-cols' style={{}}>
                                            <FontAwesomeIcon icon={faSquare} style={{ marginTop:'15px',height:'30px',width:'30px',marginLeft:'15px',color:'white'}}/>
                                        </div>                      <div className='first-page-item-cols' style={{marginLeft:'20px'}}> 
                                            <FontAwesomeIcon className='first-page-plus-icon' icon={faMinus} style={{width:'25px',height:'25px',marginTop:'15px', color:'white'}}/>
                                        </div>                      <div className='first-page-item-cols-4'>
                                            <h4>
                                                دسته بندی نشده
                                            </h4>
                                        </div>                      <div className='first-page-item-cols-last' style={{}}>
                                            <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                        </div>
                                    </div>
                                    <div className='first-page-item' >
                                        <div className='first-page-item-cols' style={{}}>
                                            <FontAwesomeIcon icon={faCheckSquare} style={{marginTop:'15px',height:'30px',width:'30px',marginLeft:'15px', color:'white'}}/>
                                        </div>                      <div className='first-page-item-cols' style={{marginLeft:'20px'}}> 
                                            <FontAwesomeIcon className='first-page-plus-icon' icon={faCircle} style={{ width:'10px',height:'10px',marginTop:'25px',    marginLeft: '10px',color:'#12F948'}}/>
                                        </div>                      <div className='first-page-item-cols-4'>
                                            <h4>دسته بندی نشده</h4>
                                        </div>                      <div className='first-page-item-cols-last' style={{float:'right'}}>
                                            <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                        </div>
                                    </div>
                                    <div className='first-page-item' >
                                        <div className='first-page-item-cols' style={{}}>
                                            <FontAwesomeIcon icon={faCheckSquare} style={{marginTop:'15px',height:'30px',width:'30px',marginLeft:'15px', color:'white'}}/>
                                        </div>                      <div className='first-page-item-cols' style={{marginLeft:'20px'}}> 
                                            <FontAwesomeIcon className='first-page-plus-icon' icon={faPlus} style={{ width:'25px',height:'25px',marginTop:'15px',color:'white'}}/>
                                        </div>                      <div className='first-page-item-cols-4'>
                                            <h4>دسته بندی نشده</h4>
                                        </div>                      <div className='first-page-item-cols-last' style={{float:'right'}}>
                                            <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                        </div>
                                    </div>
                                    <div className='first-page-item' >
                                        <div className='first-page-item-cols' style={{}}>
                                            <FontAwesomeIcon icon={faCheckSquare} style={{marginTop:'15px',height:'30px',width:'30px',marginLeft:'15px', color:'white'}}/>
                                        </div>                      <div className='first-page-item-cols' style={{marginLeft:'20px'}}> 
                                            <FontAwesomeIcon className='first-page-plus-icon' icon={faCircle} style={{ width:'10px',height:'10px',marginTop:'25px',    marginLeft: '10px',color:'#F10D0D'}}/>
                                        </div>                      <div className='first-page-item-cols-4'>
                                            <h4>دسته بندی نشده</h4>
                                        </div>                      <div className='first-page-item-cols-last' style={{float:'right'}}>
                                            <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                        </div>
                                    </div> */}

                                    
                                </div>

                            </div>

                            {/* ***********second********* */}
                            <div className='page-container' style={{display:leftsidebar2}}>

                                <input className='page-search' style={{}} placeholder='جستجو'>
                                </input>
                                <table className='sec-table'>
                                    <tr className='sec-table-head'>
                                        <th className='sec-table-head-item'>نوع رویداد</th>
                                        <th className='sec-table-head-item'>زمان رویداد</th>
                                        <th className='sec-table-head-item'>دستگاه</th>
                                        <th></th>
                                    </tr>
                                    
                                </table>
                                <div className='sec-page-con-container'>
                                    <div className='sec-page-con-rows'>
                                        <div className='sec-page-con-cols-1'>
                                            <h6 className='sec-page-con-cols-txt'>
                                                تجاوز از سرعت مجاز
                                            </h6>

                                        </div>
                                        <div className='sec-page-con-cols-2'>
                                            <h6 className='sec-page-con-cols-txt'>
                        21:20   1398/7/24
                                            </h6>

                                        </div>
                                        <div className='sec-page-con-cols-3'>
                                            <h6 className='sec-page-con-cols-txt'>
                                                سمند LX

                                            </h6>
                                        </div>
                                        
                                        <div className='sec-page-con-cols-4' style={{float:'left',marginTop:'20px'}}> 
                                            <FontAwesomeIcon icon={faEllipsisV}  style={{ color:'#adb5bd78' , marginLeft:'28px', marginRight:'10px'}}/>                            
                                        </div>
                                    </div>

                                    <div className='sec-page-con-rows'>
                                        <div className='sec-page-con-cols-1'>
                                            <h6 className='sec-page-con-cols-txt'>
                                                تجاوز از سرعت مجاز
                                            </h6>

                                        </div>
                                        <div className='sec-page-con-cols-2'>
                                            <h6 className='sec-page-con-cols-txt'>
                        21:20   1398/7/24
                                            </h6>

                                        </div>
                                        <div className='sec-page-con-cols-3'>
                                            <h6 className='sec-page-con-cols-txt'>
                                                سمند LX

                                            </h6>
                                        </div>
                                        
                                        <div className='sec-page-con-cols-4' style={{float:'left',marginTop:'20px'}}> 
                                            <FontAwesomeIcon icon={faEllipsisV}  style={{ color:'#adb5bd78' , marginLeft:'28px', marginRight:'10px'}}/>                            
                                        </div>
                                    </div>

                                    <div className='sec-page-con-rows'>
                                        <div className='sec-page-con-cols-1'>
                                            <h6 className='sec-page-con-cols-txt'>
                                                تجاوز از سرعت مجاز
                                            </h6>

                                        </div>
                                        <div className='sec-page-con-cols-2'>
                                            <h6 className='sec-page-con-cols-txt'>
                        21:20   1398/7/24
                                            </h6>

                                        </div>
                                        <div className='sec-page-con-cols-3'>
                                            <h6 className='sec-page-con-cols-txt'>
                                                سمند LX

                                            </h6>
                                        </div>
                                        
                                        <div className='sec-page-con-cols-4' style={{float:'left',marginTop:'20px'}}> 
                                            <FontAwesomeIcon icon={faEllipsisV}  style={{ color:'#adb5bd78' , marginLeft:'28px', marginRight:'10px'}}/>                            
                                        </div>
                                    </div>

                                    <div className='sec-page-con-rows'>
                                        <div className='sec-page-con-cols-1'>
                                            <h6 className='sec-page-con-cols-txt'>
                                                تجاوز از سرعت مجاز
                                            </h6>

                                        </div>
                                        <div className='sec-page-con-cols-2'>
                                            <h6 className='sec-page-con-cols-txt'>
                        21:20   1398/7/24
                                            </h6>

                                        </div>
                                        <div className='sec-page-con-cols-3'>
                                            <h6 className='sec-page-con-cols-txt'>
                                                سمند LX

                                            </h6>
                                        </div>
                                        
                                        <div className='sec-page-con-cols-4' style={{float:'left',marginTop:'20px'}}> 
                                            <FontAwesomeIcon icon={faEllipsisV}  style={{ color:'#adb5bd78' , marginLeft:'28px', marginRight:'10px'}}/>                            
                                        </div>
                                    </div>

                                    <div className='sec-page-con-rows'>
                                        <div className='sec-page-con-cols-1'>
                                            <h6 className='sec-page-con-cols-txt'>
                                                تجاوز از سرعت مجاز
                                            </h6>

                                        </div>
                                        <div className='sec-page-con-cols-2'>
                                            <h6 className='sec-page-con-cols-txt'>
                        21:20   1398/7/24
                                            </h6>

                                        </div>
                                        <div className='sec-page-con-cols-3'>
                                            <h6 className='sec-page-con-cols-txt'>
                                                سمند LX

                                            </h6>
                                        </div>
                                        
                                        <div className='sec-page-con-cols-4' style={{float:'left',marginTop:'20px'}}> 
                                            <FontAwesomeIcon icon={faEllipsisV}  style={{ color:'#adb5bd78' , marginLeft:'28px', marginRight:'10px'}}/>                            
                                        </div>
                                    </div>

                                    <div style={{background:'#52575CE3',marginBottom:'5px',height:'60px',width:'360px'}}></div>

                                    <div style={{background:'#52575CE3',marginBottom:'5px',height:'60px',width:'360px'}}></div>

                                    <div style={{background:'#52575CE3',marginBottom:'5px',height:'60px',width:'360px'}}></div>

                                    <div style={{background:'#52575CE3',marginBottom:'5px',height:'60px',width:'360px'}}></div>
                                    
                                    <div style={{background:'#52575CE3',marginBottom:'5px',height:'60px',width:'360px'}}></div>

                                    
                                </div>

                            </div>
                            
                            {/* **********third************* */}
                            <div className='page-container' style={{display:leftsidebar3}}>

                                <div className='page-3-input-container'>

                                    {/* ***** 1 input***** */}
                                
                                    <div className='page-3-input'>

                                        <Cal/>

                                        <div style={{width:'280px',float:'left', marginBottom:'0px',marginTop:'20px'}}>
                                            <Select
                                                value={selectedOption}
                                                onChange={this.handleChange.bind(this)}
                                                options={this.state.options}
                                                placeholder=''
                                                style={{width:'50px'}}
                                            />
                                        </div>
                                    
                                        <div className='input-1-txt-container'>
                                            <h5 className='input-txt' style={{color:'#A6A7A8',fontSize:'20px',marginTop:'25px'}}>دستگاه</h5>
                                        </div>
                                        <FormControlLabel
                                            control={
                                            <Checkbox 
                                                checked={checkedT} 
                                                onChange={this.checkT.bind(this)} 
                                                value="checkedA" 
                                                />
                                            }
                                            label="تمام سفر ها"
                                        />
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                checked={checkedS}
                                                onChange={this.checkS.bind(this)}
                                                value="checkedB"
                                                color="primary"
                                            />
                                            }
                                            label="خلاصه سفر ها"
                                        />
                                    </div>
                               
                                

                                {/* ******end 3 input****** */}
                                <div className='page-3-last' style={{}}>

                                    <div className='page-3-last-btns-item12'style={{cursor:'pointer'}}>
                                        <FontAwesomeIcon className='sec-page-side-3-page-icon'icon={faTimes}/> 
                                    </div>

                                    <div className='page-3-last-btns-item12'style={{cursor:'pointer'}}>
                                        <FontAwesomeIcon className='sec-page-side-3-page-icon'icon={faDownload}/> 
                                    </div>

                                        <div className='page-3-last-btns-item-3' onClick={this.flag.bind(this)} style={{cursor:'pointer'}}>
                                        <h5 className='page-3-last-btns-txt'>
                                        نمایش تاریخچه
                                        </h5>
                                    </div>

                                </div>
                                

                                {/* ****************** summary table************** */}
                                <div style={{width:'100%',height:'590px',background:'#3e3b3b',marginTop:'30px',display:reportS}}>
                                    <div className='sum-head' style={{borderBottom:'2px solid white',borderTop:'2px solid white',width: '100%', height:' 73px'}}>
                                        <div style={{float:'left',marginRight:'20px',marginLeft:'20px'}}>
                                            <h5 style={{color:'white',fontSize:'15px',marginBottom:'0px',marginTop:'15px'}}>
                                               حداکثر سرعت
                                            </h5>
                                            <h5 style={{marginTop:'5px',color:'white',paddingLeft:'17px'}}>
                                                km/h
                                            </h5>
                                        </div>
                                        <div style={{float:'left',marginRight:'20px',marginLeft:'35px'}}>
                                            <h5 style={{color:'white',fontSize:'15px',marginBottom:'0px',marginTop:'15px'}}>
                                               میانگین سرعت
                                            </h5>
                                            <h5 style={{marginTop:'5px',color:'white',marginBottom:'0px',paddingLeft:'17px'}}>
                                                km/h 
                                            </h5>
                                        </div>
                                        <div style={{float:'right',marginRight:'20px'}}>
                                            <h5 style={{color:'white',fontSize:'15px',marginBottom:'0px',marginTop:'15px'}}>
                                                 طول سفر
                                            </h5>
                                            <h5 style={{marginTop:'5px',color:'white',paddingLeft:'17px'}}>
                                                 m  
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='sum-body'>
                                    <div style={{float:'left',marginRight:'10px',marginLeft:'35px'}}>
                                            <h5 style={{fontSize:'16px',color:'white'}}>
                                                {this.state.summary.max}
                                            </h5>
                                        </div>
                                        <div style={{float:'left',marginRight:'10px',marginLeft:'85px'}}>
                                            <h5 style={{fontSize:'16px',color:'white'}}>
                                                {this.state.summary.avr}                       
                                            </h5>
                                        </div>
                                        <div style={{float:'right',marginRight:'20px'}}>
                                            <h5 style={{fontSize:'16px',color:'white'}}>
                                                {this.state.summary.dis} 
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                {/* ****************** trips table************** */}                   
                                <div style={{width:'100%',height:'588px',background:'white',marginTop:'30px',display:reportT,borderBottom:'solid 2px white'}}>
                                    {/* *************trip head******** */}
                                    <div className='trip-head'>
                                        <div className='' style={{float:'left',marginLeft:'10px'}}>
                                            <h6 style={{color:'black'}}>
                                                شروع سفر
                                            </h6>
                                        </div>
                                        <div className='' style={{float:'left',marginLeft:'40px'}}>
                                            <h6 style={{color:'black'}}>
                                                پایان سفر
                                            </h6>
                                        </div>
                                        <div className='' style={{float:'left',marginLeft:'40px'}}>
                                            <h6 style={{color:'black'}}>
                                                میانگین سرعت
                                            </h6>
                                        </div>
                                        <div className='' style={{float:'left',marginLeft:'30px'}}>
                                            <h6 style={{color:'black'}}>
                                                حداکثر سرعت
                                            </h6>
                                        </div>
                                        <div className='' style={{float:'left',marginLeft:'30px'}}>
                                            <h6 style={{color:'black'}}>
                                                طول سفر
                                            </h6>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    {/* *************trip body******** */}
                                    <div className='trip-body pointers' style={{width:'100%',height:' 530px',overflowY:'scroll',display:bodyDis}} >
                                        {
                                            Ts.map(T=>
                                                <div style={{float:'left',background:tripBack}} onClick={()=>{this.routes(T[5],T[6])}}>
                                                    <div className='' style={{float:'left',marginLeft:'8px'}}>
                                                        <h5 style={{marginTop:'5px',marginBottom:'0px'}}>   {T[0][0]}
                                                        </h5>           
                                                        <h5 style={{marginTop:'5px'}}>
                                                            {T[0][1]}
                                                        </h5>
                                                    </div>
                                                    <div style={{float:'left',marginLeft:'20px'}}>
                                                        <h5 style={{marginTop:'5px',marginBottom:'0px'}}>   
                                                            {T[1][0]}
                                                        </h5>           
                                                        <h5 style={{marginTop:'5px'}}>
                                                            {T[1][1]}
                                                        </h5>
                                                    </div>
                                                    <div className='' style={{float:'left',marginTop:'4px',marginLeft:'45px'}}>
                                                        {T[2]}
                                                    </div>
                                                    <div className='' style={{float:'left',marginTop:'4px',marginLeft:'40px'}}>
                                                        {T[3]}
                                                    </div>
                                                    <div className='' style={{float:'left',marginTop:'4px',marginLeft:'17px'}}>
                                                        {T[4]}
                                                    </div>
                                                </div>
                                                )
                                        }
                                    </div>
                                </div>
                                
                                {/* *******report loading******* */}
                                <div className='loading-report' style={{width:'100%',height:'590px',background:'#081d1891',marginTop:'-590px',display:loadDis}}>
                                    <BarLoader
                                        css={override}
                                        size={150}
                                        //size={"150px"} this also works
                                        color={"#54D5EA"}
                                        loading={this.state.loading}
                                        style={{display:loadDis}}
                                        height={20}
                                        width={380}
                                    />
                                </div>
                                </div>


                            </div>

                        </div>
                        
                </div>
                <div className='leftbar-btn' style={{}} onClick={()=>this.leftbar()}></div>
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

export default connect(mapStateToProps,mapDicpatchToProps())(Leftbar)