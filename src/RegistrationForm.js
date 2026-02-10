import React, { useEffect, useState } from "react";
import './index.css';
import { Password } from "@mui/icons-material";

const RegistrationForm = ()=>{
  const data={
    name:'',
    email:'',
    password:'',
  }
  const [inputData,setInputData]=useState(data)
  const[flag,setFlag]=useState(false);

  useEffect(()=>{

  },[flag])
  const handleData = (evt)=>{
  setInputData({...inputData, [evt.target.name]:evt.target.value})
  }
  console.log(inputData);

  const submit = (evt)=>{
   evt.preventDefault();
   if(!inputData.name || !inputData.email ||!inputData.password){
    alert("all form instruction are mandatory");
   }else{
    setFlag(true);
   }
  }
    
    return(
        <>
        <pre>{(flag)?<h3>hello {inputData.name},you are sucessfully Registered</h3>:""}</pre>
        <div className="box">
          {/* <pre>{(flag)?<h1>hello{inputData.name}you are sucessfully fill the form</h1>:""}</pre> */}
        <div className="box1">
            <div className="nav">
        <h3>Registration Form</h3>
        </div>
        <div className="form1">

        <form className="form" onSubmit={submit}>
            <input type="text" placeholder="Enter your name" name="name" value={inputData.name} onChange={handleData}></input>
             <input type="text" placeholder="Enter your email" name="email" value={inputData.email} onChange={handleData}></input>
              <input type="text" placeholder="Enter your Password" name="password" value={inputData.password} onChange={handleData}></input>
              <button className="but" type="submit">submit</button>
        </form>
        </div>
        </div>
        </div>
        
        </>
    )
}

export default RegistrationForm;