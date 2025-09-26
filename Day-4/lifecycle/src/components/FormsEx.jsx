import React, { useState } from "react";
import "../App.css";

export default function FormsEx() {
    const [name,setName] = useState('')
    const [phone , setPhone] = useState('')

    const handleSubmit = () => {
        console.log(`${name} : ${phone}`)
    }
    
  return (
    <div className="main-div">
      <div className="form-div">
        <div className="name-div">
          <label>Name  : </label>
          <input type="text" placeholder="Enter Your name" value={name} onChange={(e) => setName(e.target.value)} ></input>
        </div>
        <div className="name-div">
          <label>Phone : </label>
          <input type="text" placeholder="Enter Your Number" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
