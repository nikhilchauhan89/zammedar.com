import React, { useState } from "react";
import './App.css'
// import { Toast } from "bootstrap/dist/js/bootstrap.bundle";
import { toast } from "react-toastify";

const FormNikhil = ()=>{
    const data = {
        name:"",
        email:"",
        password:""
    }
    const [inputData,setInputData]= useState(data);
    const [msg ,setMsg] = useState(false);

    const handleInput = (evt)=>{
     setInputData({...inputData , [evt.target.name]:evt.target.value})

    }

    const submit = (evt)=>{
     evt.preventDefault();
     if(!inputData.name || !inputData.email || !inputData.password){
        toast.error("all details are mandatory")
     }else{
       setMsg(true);
       setTimeout(()=>{
        setMsg(false)
       },4000);

     }
   
    }
    return(

        <form  onSubmit={submit} className="form">
            <div className="div">
                <h3>{msg ? inputData.name +":successfully filled" : ""}</h3>
            <h1>Sign Up</h1>
                <input type="text" name="name" value={inputData.name} placeholder="Name" onChange={handleInput}></input>
                   <input type="text" name="email" value={inputData.email} placeholder="Email" onChange={handleInput}></input>
                      <input type="text"name="password" value={inputData.password} placeholder="Password" onChange={handleInput}></input>
                      <button onClick={submit}>sign up</button>
            </div>
        </form>
    )
}

export default FormNikhil; 