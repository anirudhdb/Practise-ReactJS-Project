import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [fname, setFname] = useState([]);
  const [lname, setLname] = useState([]);
  const [email, setEmail] = useState([]);
  const [name, setName] = useState("");

  const handleClick = () => {
    setFname([fname, document.getElementById("firstname").value]);
    setLname([lname, document.getElementById("lastname").value]);
    setEmail([email, document.getElementById("emailid").value]);
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("emailid").value = "";
  };

  return (
    <div className="box">
      <button className="btn" id="entryButoon" onClick={handleClick}>
        Save
      </button>
      <div className="fname" id="fname">
        First Name
        <input type={String} placeholder="First Name" id="firstname"></input>
      </div>
      <div className="lname">
        Last Name
        <input type={String} placeholder="Last Name" id="lastname"></input>
      </div>
      <div className="emailid" id="email">
        Email-id
        <input
          type={String}
          placeholder="Email"
          id="emailid"
          className="email"
        ></input>
      </div>
      <div className="dob" id="dateOfBirth">
        Date of Birth
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
          />
        </div>
      </div>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email-id</th>
        </tr>
        <tr>
          {fname.map((curElem, index) => {
            return <td>{curElem}</td>;
          })}
          {lname.map((curElem, index) => {
            return <td>{curElem}</td>;
          })}
          {email.map((curElem, index) => {
            return <td>{curElem}</td>;
          })}
          <br></br>
        </tr>
      </table>
    </div>
  );
}

export default App;
