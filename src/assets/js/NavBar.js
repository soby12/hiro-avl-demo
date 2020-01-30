import React from 'react';
import { faCog , faRedo , faFilter} from '@fortawesome/free-solid-svg-icons';
import { faUserCircle} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Modal} from 'react-bootstrap';
import ModalSet from './Modal.js';

const user=<FontAwesomeIcon icon={faUserCircle} style={{marginLeft:'18px',width:'30px',height:'30px',color:'#A6A7A8',marginTop:'15px'}}/>;
const cog=<FontAwesomeIcon icon={faCog} style={{marginLeft:'34px',width:'30px',height:'30px',color:'#A6A7A8',marginTop:'15px'}} />;
const redo=<FontAwesomeIcon icon={faRedo} style={{float:'left',width:'20px',height:'20px',marginTop: '20px',marginLeft:'70px',color:'white'}} />;
const filter=<FontAwesomeIcon icon={faFilter} className='' style={{float:'right',color:' #A6A7A8',width:'20px',height:'20px'}} />;



export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page:this.props.page,
            modal:'none',
            driverFont:'15px',
            deviceFont:'15px'
        }
        // console.log(this.state.page);        
    }
    modal(dis){
        this.setState({modal:dis})
        console.log('modal click //--------------');
        console.log(this.state.modal);
        
    }
    setting(a){
        if(a==1){
            this.setState({driverFont:'20px',driverCon:'block'
                            ,deviceFont:'15px',deviceCon:'none'
                            ,userFont:'15px',userCon:'none'})
        }else if(a==2){
            this.setState({driverFont:'15px',driverCon:'none'
                          ,deviceFont:'20px',deviceCon:'block'
                          ,userFont:'15px',userCon:'none'})
        }else if(a==3){
            this.setState({driverFont:'15px',driverCon:'none'
                          ,deviceFont:'15px',deviceCon:'none'
                          ,userFont:'20px',userCon:'block'})
        }
    }
    render(){
        const {page,modal,driverFont,deviceFont,userFont}=this.state;
        return(
            <div className='main-nav'>

                {/* <ModalSet dis={modal}/> */}
                <div className='modal-con'style={{display:modal}} onClick={()=>this.modal('none')}>

                    <div className='modal' style={{}}>
                        <div className='modal-head'>
                            <div style={{width:'20px',height:'20px',background:'black',float:'right'}}onClick={()=>this.modal('none')}></div>

                            <div  onClick={()=>this.setting(1)} style={{float:'left',marginLeft:'15px',cursor:'pointer'}}>
                                <h4  style={{fontSize:driverFont}}>اضافه کردن راننده</h4>
                            </div>

                            <div onClick={()=>this.setting(2)} style={{float:'left',marginLeft:'15px',cursor:'pointer'}}>
                                <h4 style={{fontSize:deviceFont}}>اضافه کردن دستگاه</h4>
                            </div>
                            <div onClick={()=>this.setting(3)} style={{float:'left',marginLeft:'15px',cursor:'pointer'}}>
                                <h4 style={{fontSize:userFont}}>مدیریت کاربران</h4>
                            </div>
                        </div>
                        <div className='modal-body'></div>
                    </div>

                </div>
{/* *****first****** */}
                <div className='nav-first'>
                    <div className='first-nav-item-1' onClick={()=> this.modal('block')}>
                        {cog}
                        {user}
                    </div>
                    <div className='first-nav-item-2'>
                        <h4 className='page-name' style={{font:'normal Segoe UI'}}>{page}</h4>
                    </div>
                        {/* <Modal
                            size="lg"
                            show={modal}
                            onHide={() => this.modal(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Large Modal
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                        </Modal> */}
                </div>
{/* *******sec******** */}
                <div className='nav-second'>
                    <div className='sec-nav-item-1'>
                        <div className='first-filter-container filter-container' style={{}}>
                            <FontAwesomeIcon icon={faFilter} className='first-filter' style={{}} />
                        </div>
                        <div className='sec-nav-1item-txt-container' style={{}}>
                            <h4 className='sec-nav-1item-txt' style={{}}>مدیریت فیلتر ها</h4>
                        </div>
                    </div>
                    <div className='sec-nav-item-2'>
                        <div className='sec-nav-item-2-container'>
                            {redo}
                            <div className='sec-nav-item-2-inner'>
                                <h4 className='sec-nav-2-txt'style={{textAlign:'center'}}>
1398/5/7    15:54:63
                                </h4>
                            </div>
                            <div className='sec-nav-item-2-inner'>
                                <h4 className='sec-nav-2-txt'style={{textAlign:'left'}}>
                                    |   آخرین بروزرسانی
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='sec-nav-item-3'>
                        <div className='last-filter-container filter-container' style={{}}>
                            <FontAwesomeIcon icon={faFilter} className='last-filter' style={{}} />
                        </div>
                        <div style={{float:'right'}}>
                            <h4 className='sec-nav-2item-txt' style={{}}>تمام دستگاه ها</h4>
                        </div>
                    </div>
                </div>
{/* ******nav-side****** */}
                <div className='nav-side'>
                    <div className='nav-side-item-active'>
                        <a href='http://localhost:3000'>
                            <h3 className='nav-side-item-text-active'>
                                داشبورد
                            </h3>
                        </a>
                    </div>
                    <div className='nav-side-item'>
                        <a href='http://localhost:3000/maps'>
                            <h3 className='nav-side-item-text'>
                                نقشه
                            </h3>
                        </a>
                    </div>
                    <div className='nav-side-item'>
                        <h3 className='nav-side-item-text'>
                            دستگاه ها
                        </h3>
                    </div>
                    <div className='nav-side-item'>
                        <h3 className='nav-side-item-text'>
                            عملیات
                        </h3>
                    </div>
                    <div className='nav-side-item'>
                        <h3 className='nav-side-item-text'>
                            نگه داری
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}
