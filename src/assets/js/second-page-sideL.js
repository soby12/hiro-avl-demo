import React from "react";
import Select from 'react-select';
import Sidebar from "react-sidebar";


import {faEllipsisV,faDownload, faTimes,faMinus , faPlus, faCheckSquare,faCircle} from "@fortawesome/free-solid-svg-icons";
import {faSquare} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const options = [
    { value: 'pars', label: 'پژو پارس' },
    { value: 'megan', label: 'رنو مگان' },
    { value: 'vanet', label: 'وانت نیسان' },
    { value: 'bmw', label: 'BMW' },
    { value: 'nissan', label: 'Nissan' },
  ];

class SecPagSideL extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          width:'430px',
          marginright:'410',
          marginleft:'-410',
          sidebarOpen: false,
          leftsidebar1:'',
          leftsidebar2:'none',
          leftsidebar3:'none',
          selectedOption: null,
          };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }


    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    onSetSidebarOpen() {
        if (this.state.marginright==='410px'){
            this.setState({marginright:''})
        }else{
            this.setState({marginright:'410px'})
        }

        if (this.state.marginleft==='-410px'){
            this.setState({marginleft:''})
        }else{
            this.setState({marginleft:'-410px'})
        }
        
      }

      leftsidebar1(){
            this.setState({leftsidebar1:'',leftsidebar2:'none',leftsidebar3:'none'})
      }
      leftsidebar2(){
            this.setState({leftsidebar1:'none',leftsidebar2:'',leftsidebar3:'none'})
      }
      leftsidebar3(){
            this.setState({leftsidebar1:'none',leftsidebar2:'none',leftsidebar3:''})
      }


    render(){
        const sidebarStyles ={
           sidebar:{ 
            width:this.state.width,
            }
        };
        const {marginleft ,selectedOption , marginright , leftsidebar1, leftsidebar2, leftsidebar3} =this.state;
        return(
            
                
                <Sidebar 
                    sidebar={<b>

                            <div className='sec-page-side-L-container' style={{marginLeft:marginleft}}>
                                <div className='sec-page-side-L-content'>

                                    {/* **********head********* */}
                                    <div className='sec-page-side-L-head' >
                                        <div className='sec-page-side-L-head-item'
                                        onClick={() => this.leftsidebar1()}>
                                            <a href='#'>
                                                <h5 className='head-item-h5' >
                                                    دستگاه ها
                                                </h5>
                                            </a>
                                        </div>
                                        <div className='sec-page-side-L-head-item'
                                        onClick={() => this.leftsidebar2()}>
                                            <a href='#'>
                                                <h5 className='head-item-h5'>
                                                    رویداد ها
                                                </h5>
                                                
                                            </a>
                                        </div>
                                        <div className='sec-page-side-L-head-item' onClick={() => this.leftsidebar3()}>
                                            <a href='#'>
                                                <h5 className='head-item-h5'>
                                                    تاریخچه  
                                                </h5>                          
                                            </a>
                                        </div>
                                    </div>


                                    {/* ***********pages********** */}
                                    <div className='sec-page-side-L-pages'>

                                        {/* **********first********** */}
                                        <div className='page-container' style={{display:leftsidebar1}}>

                                            <input className='page-search' placeholder='جستجو'>
                                            </input>
                                            <div className='first-page-container'>
                                                <div className='first-page-item' >
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
                                                </div>
                                                {/* <div className='first-page-item' >
                                                    <div className='first-page-item-cols' style={{}}>
                                                        <FontAwesomeIcon icon={faSquare} style={{ color:'white'}}/>
                                                    </div>                          <div className='first-page-item-cols' style={{marginLeft:'40px'}}> 
                                                        <FontAwesomeIcon icon={faMinus} style={{ color:'white'}}/>
                                                    </div>                           <div className='first-page-item-cols' style={{marginLeft:'120px'}}>
                                                        <h4 style={{font:'Regular 20px/27px Segoe UI',fontSize:'20px',color:'#A6A7A8'}}>دسته بندی نشده</h4>
                                                    </div>                          <div className='first-page-item-cols-last' style={{}}>
                                                        <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                                    </div>
                                                </div>
                                                <div className='first-page-item' >
                                                    <div className='first-page-item-cols' style={{}}>
                                                        <FontAwesomeIcon icon={faCheckSquare} style={{ color:'white'}}/>
                                                    </div>                          <div className='first-page-item-cols' style={{marginLeft:'40px'}}> 
                                                        <FontAwesomeIcon icon={faPlus} style={{ color:'white'}}/>
                                                    </div>                          <div className='first-page-item-cols' style={{marginLeft:'120px'}}>
                                                        <h4 style={{font:'Regular 20px/27px Segoe UI',fontSize:'20px',color:'#A6A7A8'}}>دسته بندی نشده</h4>
                                                    </div>                          <div className='first-page-item-cols-last' style={{}}>
                                                        <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                                    </div>
                                                </div>
                                                <div className='first-page-item' >
                                                    <div className='first-page-item-cols' style={{}}>
                                                        <FontAwesomeIcon icon={faSquare} style={{ color:'white'}}/>
                                                    </div>                          <div className='first-page-item-cols' style={{marginLeft:'40px'}}> 
                                                        <FontAwesomeIcon icon={faMinus} style={{ color:'white'}}/>
                                                    </div>                           <div className='first-page-item-cols' style={{marginLeft:'120px'}}>
                                                        <h4 style={{font:'Regular 20px/27px Segoe UI',fontSize:'20px',color:'#A6A7A8'}}>دسته بندی نشده</h4>
                                                    </div>                          <div className='first-page-item-cols-last' style={{}}>
                                                        <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                                    </div>
                                                </div>
                                                <div className='first-page-item' >
                                                    <div className='first-page-item-cols' style={{}}>
                                                        <FontAwesomeIcon icon={faCheckSquare} style={{ color:'white'}}/>
                                                    </div>                          <div className='first-page-item-cols' style={{marginLeft:'40px'}}> 
                                                        <FontAwesomeIcon icon={faPlus} style={{ color:'white'}}/>
                                                    </div>                          <div className='first-page-item-cols' style={{marginLeft:'120px'}}>
                                                        <h4 style={{font:'Regular 20px/27px Segoe UI',fontSize:'20px',color:'#A6A7A8'}}>دسته بندی نشده</h4>
                                                    </div>                          <div className='first-page-item-cols-last' style={{}}>
                                                        <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                                    </div>
                                                </div>
                                                <div className='first-page-item' >
                                                    <div className='first-page-item-cols' style={{}}>
                                                        <FontAwesomeIcon icon={faSquare} style={{ color:'white'}}/>
                                                    </div>                          <div className='first-page-item-cols' style={{marginLeft:'40px'}}> 
                                                        <FontAwesomeIcon icon={faMinus} style={{ color:'white'}}/>
                                                    </div>                           <div className='first-page-item-cols' style={{marginLeft:'120px'}}>
                                                        <h4 style={{font:'Regular 20px/27px Segoe UI',fontSize:'20px',color:'#A6A7A8'}}>دسته بندی نشده</h4>
                                                    </div>                          <div className='first-page-item-cols-last' style={{}}>
                                                        <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                                    </div>
                                                </div>
                                                <div className='first-page-item' >
                                                    <div className='first-page-item-cols' style={{}}>
                                                        <FontAwesomeIcon icon={faCheckSquare} style={{ color:'white'}}/>
                                                    </div>                          <div className='first-page-item-cols' style={{marginLeft:'40px'}}> 
                                                        <FontAwesomeIcon icon={faPlus} style={{ color:'white'}}/>
                                                    </div>                          <div className='first-page-item-cols' style={{marginLeft:'120px'}}>
                                                        <h4 style={{font:'Regular 20px/27px Segoe UI',fontSize:'20px',color:'#A6A7A8'}}>دسته بندی نشده</h4>
                                                    </div>                          <div className='first-page-item-cols-last' style={{}}>
                                                        <FontAwesomeIcon icon={faEllipsisV} style={{ color:'white'}}/>
                                                    </div>
                                                </div>
                                                <div className='first-page-item' >
                                                    <div className='first-page-item-cols' style={{}}>
                                                        <FontAwesomeIcon icon={faCheckSquare} style={{ color:'white'}}/>
                                                    </div>                          <div className='first-page-item-cols' style={{marginLeft:'40px'}}> 
                                                        <FontAwesomeIcon icon={faPlus} style={{ color:'white'}}/>
                                                    </div>                          <div className='first-page-item-cols' style={{marginLeft:'120px'}}>
                                                        <h4 style={{font:'Regular 20px/27px Segoe UI',fontSize:'20px',color:'#A6A7A8'}}>دسته بندی نشده</h4>
                                                    </div>                          <div className='first-page-item-cols-last' style={{}}>
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
                                            
                                                <div className='page-3-input' style={{}}>
                                                    <div style={{width:'280px',float:'left', marginBottom:'20px'}}>
                                                        <Select
                                                            value={selectedOption}
                                                            onChange={this.handleChange}
                                                            options={options}
                                                            placeholder=''
                                                            style={{width:'50px'}}
                                                        />
                                                    </div>
                                                   
                                                    <div className='input-1-txt-container'>
                                                        <h5 className='input-txt' style={{color:'#A6A7A8',fontSize:'20px'}}>دستگاه</h5>
                                                    </div>
                                                </div>
                                                

                                            {/* ****** 2 input****** */}
                                            <div className='page-3-input' style={{width:'350px',height:'45px',marginBottom:'15px'}}>
                                                <div style={{width:'97px',float:'left'}}>
                                                    <Select
                                                        value={selectedOption}
                                                        onChange={this.handleChange}
                                                        options={options}
                                                        placeholder=''
                                                        style={{width:'50px'}}
                                                    />

                                                </div>

                                                <div className='input-container' style={{}}>
                                                    <input style={{height:'35px',width:'100%',background:'#4F5458E6',border:'none'}}></input>
                                                </div>

                                                <div className='input-2-txt-container'>                                  <h5 className='input-txt' style={{marginLeft:'10px'}}>
                                                        از زمان
                                                    </h5>

                                                </div>
                                            </div>
                                            


                                            {/* ******** 3 input********* */}
                                            <div className='page-3-input' style={{width:'350px',marginBottom:'30px',height:'45px'}}>
                                                <div style={{width:'97px',float:'left'}}>
                                                    <Select
                                                        value={selectedOption}
                                                        onChange={this.handleChange}
                                                        options={options}
                                                        placeholder=''
                                                        style={{width:'50px'}}
                                                    />

                                                </div>

                                                <div className='input-container' >
                                                    <input style={{height:'35px',width:'100%',background:'#4F5458E6',border:'none'}}></input>
                                                </div>

                                                <div className='input-2-txt-container' style={{}}>
                                                    <h5 className='input-txt' style={{marginLeft:'10px'}}>
                                                      تا زمان
                                                    </h5>

                                                </div>
                                            </div>
                                            

                                            {/* ******end 3 input****** */}
                                            <div className='page-3-last' style={{}}>

                                                <div className='page-3-last-btns-item12'>
                                                    <FontAwesomeIcon className='sec-page-side-3-page-icon'icon={faTimes}/> 
                                                </div>

                                                <div className='page-3-last-btns-item12'>
                                                    <FontAwesomeIcon className='sec-page-side-3-page-icon'icon={faDownload}/> 
                                                </div>

                                                <div className='page-3-last-btns-item-3'>
                                                    <h5 className='page-3-last-btns-txt'>
                                                    نمایش تاریخچه
                                                    </h5>
                                                </div>

                                            </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>



                                {/* ****btn**** */}
                            <div className='sec-page-side-L-btn' style={{background:'transparent',width:'20px',height:'866px',float:'right',marginLeft:''}}>
                                <div style={{background:'black',width:'20px',height:'50px',float:'right',marginRight:marginright,marginTop:'500px'}} onClick={() => this.onSetSidebarOpen()}>
                                </div>
                            </div>
                    
                    </b>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    children={<div></div>}
                    styles={sidebarStyles}
                    pullRight={false}
                    shadow={false}
                    touch={false}
                    transitions={true}
                    docked={true}
                    touchHandleWidth={500}
                    // defaultSidebarWidth={1000}
                    sidebarClassName='sidebar side'>
    
                    </Sidebar>

        )
    }
}

export default SecPagSideL;