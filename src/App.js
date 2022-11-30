import logo from './logo.svg';
import './App.css'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function App() {

  const [selectedDate, setSelectedDate] = useState(null);

   
  return (
    <div className='box'>

      <button className='btn' id='entryButoon'>Save</button>
      <div className='fname' id='fname'>First Name
      <input type={String}   placeholder="First Name" ></input>
      </div>
      <div className='lname' id='lname'>Last Name
      <input type={String} placeholder="Last Name"></input>
      </div>
      <div className='emailid' id='email'>Email-id
        <input type={String} placeholder="Email" className='email'></input>
      </div>
      <div className='dob' id='dateOfBirth'>Date of Birth
      <div>
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}
        dateFormat = 'dd/MM/yyyy'
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
         />
      </div>
      </div>
        </div>
    
    
   
  );
}

export default App;
