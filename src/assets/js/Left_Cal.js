import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import moment from 'moment-jalaali';

import {connect,useSelector , useDispatch} from "react-redux";
import {/*getCarSum,getCarTrip,getCarId,*/getFrom,getTo,getDate,changeFlag} from '../../redux/actions/index';


const Cal = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from:"",
    to:""
    // to: {day: 8, month: 10, year: 1398}
  });


  // const selectedDayRange={from:'',to:''};
  // const carid = useSelector(state => state.carId);
  const dispatch = useDispatch();
  const flag = useSelector(state => state.flag);

  let per
  const month = () =>{
    if(selectedDayRange.to){
      switch(selectedDayRange.to.month){
        case (1) : {
          return per='فروردین'
        }
        case (2) : {
          return per='اردیبهشت'
        }
        case (3) : {
          return per='خرداد'
        }
        case (4) : {
          return per='تیر'
        }
        case (5) : {
          return per='مرداد'
        }
        case (6) : {
          return per='شهریور'
        }
        case (7) : {
          return per='مهر'
        }
        case (8) : {
          return per='آبان'
        }
        case (9) : {
          return per='آذر'
        }
        case (10) : {
          return per='دی'
        }
        case (11) : {
          return per='بهمن'
        }
        case (12) : {
          return per='اسفند'
        }
      }
    }
  }
  month();
  // let per2=month(selectedDayRange.from.month);
  // const apace=''
  
  const renderCustomInput = ({ ref }) => (
    <input
    //   readOnly
      ref={ref} // necessary
      placeholder="انتخاب بازه زمانی"
      value={selectedDayRange.to ? ` ${selectedDayRange.to.day}  از   ${selectedDayRange.from.day} ${per} __ تا ` : ''}
      style={{
        textAlign: 'center',
        padding: '10px 70px',
        fontSize: '15px',
        border: '1px solid #9c88ff',
        borderRadius: '100px',
        // boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',
        color: 'black',
        outline: 'none',
        zIndex:'0'
      }}
      className="my-custom-input-class" // a styling class
    />
  )

    
  // }
  // console.log(selectedDayRange.from);
  // console.log(selectedDayRange.to);
  
  if(selectedDayRange.to && selectedDayRange.from){
    let yearF = selectedDayRange.from.year;
    let monthF = selectedDayRange.from.month;
    let dayF = selectedDayRange.from.day;
    let dateFF=yearF+'/'+monthF+'/'+dayF;
    
    let yearT = selectedDayRange.to.year;
    let monthT = selectedDayRange.to.month;
    let dayT = selectedDayRange.to.day;
    let dateTT=yearT+'/'+monthT+'/'+dayT;
    const dateT=moment(dateTT, 'jYYYY/jM/jD').format('YYYY-M-D');
    const dateF=moment(dateFF, 'jYYYY/jM/jD').format('YYYY-M-D');
    // console.log('aval inja********');
    
    // console.log(dateF,dateT);
    
    if(dateF !='Invalid date' && dateT !='Invalid date'){
      // const dat = dateF+' '+dateT
      dispatch(getFrom(dateF))
      dispatch(getTo(dateT))
      // dispatch(changeFlag(false))

      // console.log('dispactchch********');
      
    }
  }
  
  
    return (
      <DatePicker
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      renderInput={renderCustomInput}
      //   inputPlaceholder="Select a day range"
      shouldHighlightWeekends
      locale="fa"
      />
    );
    
};

export default Cal;