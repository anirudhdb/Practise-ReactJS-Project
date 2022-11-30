import logo from './logo.svg';
import './App.css'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function App() {

  const [selectedDate, setSelectedDate] = useState(null);
  const [fname,setFname] = useState([]);
  const[lname,setLname] = useState([]);
  const [name,setName] = useState("");

  const handleClick = () => {
    setFname([...fname,document.getElementById('firstname').value]);
    setLname([...lname,document.getElementById('lastname').value]);

};

   
  return (
    <div className='box'>

      <button className='btn' id='entryButoon' onClick={handleClick}>Save</button>
      <div className='fname' id='fname'>First Name
      <input type={String}   placeholder="First Name" id='firstname'  ></input>
      </div>
      <div className='lname' id='lastname'>Last Name
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
      <div>
        {fname.map((curElem,index) =>{
          return( 
          <h3>{curElem}</h3>
          )
        })}  
      </div>
        </div>
  
    
    
   
  );
}

export default App;
