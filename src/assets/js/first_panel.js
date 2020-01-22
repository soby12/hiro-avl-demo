import React from 'react';
import {faEllipsisH,faCheckCircle,faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import  PersianNumber  from 'react-persian';

import SimpleExample from './API/LeafLet';




export default class Pannel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            devices:'',
            actives:'',
            deActives:'',
        }
        fetch('/api/devices')
            .then(response => {
                if (response.ok) {
                response.json()
            .then(devices => {
                    console.log('first data from back',devices);
                    this.setState({data:devices})
                    this.setState({devices:devices.length})
                    console.log(this.state.data);
                    console.log(this.state.devices);
                    var i
                    var a=0
                    var d=0
                    for( i = 0 ;i < devices.length;i++ ){    
                        if(this.state.data[i].status == 'online'){
                            a++
                        }else if (this.state.data[i].status == 'offline'){
                            d++
                        }
                    }
                    console.log(a,d);
                    this.setState({actives:a , deActives:d })        
                    });
                };
            });        
    }

    
    render(){
        const {devices,actives,deActives} = this.state;

        const more=<FontAwesomeIcon icon={faEllipsisH} style={{ color:'white'}} className='more'/>;
        const check =<FontAwesomeIcon icon={faCheckCircle} style={{ color:'white',width:'30px',height:'30px',marginTop: '10px',marginLeft:'50%'}}/>
        const times =<FontAwesomeIcon icon={faTimesCircle} style={{ color:'white',width:'30px',height:'30px',marginTop: '10px',marginLeft:'50%'}}/>
        const LastEvent='1398/5/8    13:4:65'
        
        return(
            <div className='pannel-container'>
                
                {/* ****left**** */}
                <div className='pannel-left'>
                    
                    {/* ****top***** */}
                    <div className='pannel-left-top'>
                        <div className='pannel-header'>
                            <div className='pannel-header-content-1'>
                                <h4 className='pannel-header-content1-text'>
                                    سه ساعت اخیر
                                </h4>
                            </div>
                            <div className='pannel-header-content-2'>
                                <h4 className='pannel-header-content2-text'>
                                    شاخص ها
                                </h4>
                            </div>
                        </div>

                        <div className='pannel-card'>
                            <div className='pannel-card-header'>
                                <h1 className='pannel-card-header-txt'>
                                    دستگاه های فعال
                                </h1>
                            </div>
                            <div className='pannel-card-sub'>
                                <h4 className='pannel-card-sub-txt'>
                                    تمام دستگاه ها
                                </h4>                  
                            </div>
                            <div className='pannel-card-number'>
                                <div className='pannel-card-number-L pannel-card-number-L-res' style={{}}>
                                    <h3 className='pannel-card-number-L-h'>
                                        {actives}
                                    </h3>
                                </div>
                                <div className='pannel-card-number-R' style={{float:'left'}}>
                                    <h4 style={{/*font: 'Bold 20px/27px Segoe UI',*/color:' #A6A7A8',marginTop:'45px'}}>
                                        /{devices}
                                    </h4>
                                </div>
                                
                            </div>
                            <div className='pannel-card-footer'>
                                </div>
                                <div>
                                <h4 className=''>

                                </h4>
                            </div>
                        </div>

                        <div className='pannel-card'>
                            <div className='pannel-card-header'>
                                <h1 className='pannel-card-header-txt'>
                                    مصرف سوخت
                                </h1>

                            </div>
                            <div className='pannel-card-sub'>
                                <h4 className='pannel-card-sub-txt'>
                                    تمام دستگاه ها
                                </h4>
                            </div>
                            <div className='pannel-card-number'>
                                <div className='pannel-card-number-L' style={{/*marginLeft:'60px'*/}}>
                                    <h3 className='pannel-card-number-L-h'>
                                        17500
                                    </h3>
                                </div>
                                <div className='pannel-card-number-R' style={{float:'left'}}>
                                    <h4 style={{/*font:' normal 20px/27px Segoe UI',*/color: '#A6A7A8',marginTop:'40px'}}>
                                        لیتر
                                    </h4>
                                </div>

                            </div>
                            <div className='pannel-card-footer'>
                                <div>

                                </div>
                                <h4 className=''>

                                </h4>
                            </div>
                        </div>

                    </div>
                    
                    {/* *****down***** */}
                    <div className='pannel-left-down'>
                        
                        <div className='pannel-header'>
                            <div className='pannel-header-content-1'>
                                <h4 className='pannel-header-content1-text'>
                                    هفته اخیر
                                </h4>
                            </div>

                            <div className='pannel-header-content-2'>
                                <h4 className='pannel-header-content2-text'>
                                    هشدار سیستمی
                                </h4>

                            </div>

                        </div>
                        
                        <div className='pannel-left-down-con'>
                            <div className='pannel-left-table-heade'>
                                <div className='table-head-item'>
                                    <h4 className='table-head-item-h' style={{textAlign:' left',marginLeft:'25px'}}>
                                        بیشتر
                                    </h4>
                                </div>
                                <div className='table-head-item'>
                                    <h4 className='table-head-item-h' style={{marginLeft:'-50px'}}>
                                        وضعیت بررسی
                                    </h4>
                                </div>
                                <div className='table-head-item'>
                                    <h4 className='table-head-item-h'>
                                        آخرین رویداد
                                    </h4>
                                </div>
                                <div className='table-head-item'>
                                    <h4 className='table-head-item-h'>
                                        درجه اهمیت
                                    </h4>
                                </div>
                                <div className='table-head-item'>
                                    <h4 className='table-head-item-h'>
                                        نوع اخطار
                                    </h4>
                                </div>
                            </div>
                            
                            
                            <div className='pannel-left-table-con'>
                                <div className='table-rows'>
                                    <div className='tabel-cols more-div'>
                                        {more}
                                    </div>
                                    <div className='tabel-cols'>
                                        {check}
                                    </div>
                                    <div className='tabel-cols last-div'>
                                        <h4 className='table-col-h'>
                                        {LastEvent}
                                        </h4>                                    
                                    </div>
                                    <div className='tabel-cols'>
                                        <h4 className='table-col-h'>
                                            کم
                                        </h4>                                    
                                    </div>
                                    <div className='tabel-cols'>
                                        <h4 className='table-col-h'>
                                            مصرف سوخت
                                        
                                        </h4>
                                    </div>
                                </div>
                                <div className='table-rows'>
                                    <div className='tabel-cols more-div'>
                                        {more}
                                    </div>
                                    <div className='tabel-cols'>
                                        {check}
                                    </div>
                                    <div className='tabel-cols last-div'>
                                        <h4 className='table-col-h'>
                                        {LastEvent}
                                        </h4>                                    
                                    </div>
                                    <div className='tabel-cols'>
                                        <h4 className='table-col-h'>
                                            زیاد
                                        </h4>                                    
                                    </div>
                                    <div className='tabel-cols'>
                                        <h4 className='table-col-h'>
                                            تجاوز از سرعت مجاز
                                        
                                        </h4>
                                    </div>
                                </div>
                                <div className='table-rows'>
                                    <div className='tabel-cols more-div'>
                                        {more}
                                    </div>
                                    <div className='tabel-cols'>
                                        {times}
                                    </div>
                                    <div className='tabel-cols last-div'>
                                        <h4 className='table-col-h'>
                                            {LastEvent}
                                        </h4>                                    
                                    </div>
                                    <div className='tabel-cols'>
                                        <h4 className='table-col-h'>
                                            زیاد
                                        </h4>                                    
                                    </div>
                                    <div className='tabel-cols'>
                                        <h4 className='table-col-h'>
                                            خروج از منطقه
                                        
                                        </h4>
                                    </div>
                                </div>
                                <div className='table-rows'>
                                    <div className='tabel-cols more-div'>
                                        {more}
                                    </div>
                                    <div className='tabel-cols'>
                                        {times}
                                    </div>
                                    <div className='tabel-cols last-div'>
                                        <h4 className='table-col-h'>
                                            {LastEvent}
                                        </h4>                                    
                                    </div>
                                    <div className='tabel-cols'>
                                        <h4 className='table-col-h'>
                                           کم
                                        </h4>                                    
                                    </div>
                                    <div className='tabel-cols'>
                                        <h4 className='table-col-h'>
                                            توقف طولانی
                                        
                                        </h4>
                                    </div>
                                </div>
                                <div className='table-rows'>
                                    <div className='tabel-cols more-div'>
                                        {more}
                                    </div>
                                    <div className='tabel-cols'>
                                        {times}
                                    </div>
                                    <div className='tabel-cols last-div'>
                                        <h4 className='table-col-h'>
                                            {LastEvent}
                                        </h4>                                    
                                    </div>
                                    <div className='tabel-cols'>
                                        <h4 className='table-col-h'>
                                            متوسط
                                        </h4>                                    
                                    </div>
                                    <div className='tabel-cols'>
                                        <h4 className='table-col-h'>
                                            مصرف سوخت
                                        
                                        </h4>
                                    </div>
                                </div>
                                <div className='table-rows'>
                                    <div className='tabel-cols more-div'>
                                        {more}
                                    </div>
                                    <div className='tabel-cols'>
                                        {check}
                                    </div>
                                    <div className='tabel-cols last-div'>
                                        <h4 className='table-col-h'>
                                            {LastEvent}
                                        </h4>                                    
                                    </div>
                                    <div className='tabel-cols'>
                                        <h4 className='table-col-h'>
                                            زیاد
                                        </h4>                                    
                                    </div>
                                    <div className='tabel-cols'>
                                        <h4 className='table-col-h'>
                                            مصرف سوخت
                                        
                                        </h4>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                {/* ****right***** */}
                <div className='pannel-right'>
                    
                    {/* ****top**** */}
                    <div className='pannel-right-top'>
                        <div className='pannel-header'>
                            <div className='pannel-header-content-1'>
                                <h4 className='pannel-header-content1-text'>
                                    بیشتر
                                </h4>
                            </div>
                            <div className='pannel-header-content-2'>
                                <h4 className='pannel-header-content2-text'>
                                    موقعیت دستگاه ها
                                </h4>
                            </div>
                        </div>
                        <div className='pannel-right-con'>
                            <div className='pannel-map'>
                                <SimpleExample/>
                            </div>
                            <div className='data'>
                                <div className='data-first'>
                                    <h2 className='data-first-h2'>
                                        تمام دستگاه ها
                                    </h2>
                                    <h5 className='data-first-h5'>
                                        دستگاه ها
                                    </h5>
                                </div>
                                <div className='data-second'>
                                    <div className='data-sec-col'>
                                        <h2 className='data-sec-h2' style={{}}>3</h2>
                                        <h5 className='data-sec-h5' style={{/*font:'  18px/24px Segoe UI',*/color:' #A6A7A8'}}>حیاتی</h5>                    
                                    </div>
                                    <div className='data-sec-col'>
                                        <h2 className='data-sec-h2' style={{color:' #FFF700'}}>2</h2>
                                        <h5 className='data-sec-h5' style={{/*font:'  18px/24px Segoe UI',*/color:' #A6A7A8'}}>اخطار ها</h5>
                                    </div>
                                </div>
                                <div className='data-third'>
                                    <div className='data-ther-col'>
                                        <h2 className='data-ther-h2' style={{/*font: 'Bold 50px/67px Segoe UI',color: '#A6A7A8'*/}}>{devices}</h2>
                                        <h5 className='data-ther-h5'>کل</h5>
                                    </div>
                                    <div className='data-ther-col'>
                                        <h2 className='data-ther-h2' style={{/*font: 'Bold 50px/67px Segoe UI',color: '#A6A7A8'*/}}>{actives}</h2>
                                        <h5 className='data-ther-h5' style={{}}>آنلاین</h5>
                                    </div>
                                    <div className='data-ther-col'>
                                        <h2 className='data-ther-h2' style={{/*font: 'Bold 50px/67px Segoe UI',color: '#A6A7A8'*/}}>{deActives}</h2>
                                        <h5 className='data-ther-h5'>افلاین</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ******down****** */}
                    <div className='pannel-right-down'>
                        <div className='pannel-header'>
                            <div className='pannel-header-content-1'>
                                <h4 className='pannel-header-content1-text'>
                                    بیشتر
                                </h4>
                            </div>

                            <div className='pannel-header-content-2'>
                                <h4 className='pannel-header-content2-text'>
                                    داده های لحظه ایی
                                </h4>

                            </div>
                        </div>

                    </div>

                </div>


            </div>
        )
    }
}
