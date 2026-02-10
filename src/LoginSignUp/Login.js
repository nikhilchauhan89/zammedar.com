import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
// import './index.css';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState();

  const navigate  = useNavigate();


  const handleInput = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    if ("email" == name) {
      setEmail(value)
    }
    if ("password" == name) {
      setPassword(value)
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (email == "" || password == "") {
      alert("please enter details")
    } else {
      let getDetails = JSON.parse(localStorage.getItem("user"))
      console.log(getDetails);
      getDetails.map((curValue) => {
        console.log(curValue.email)
        let storeEmail = curValue.email;
        let storePassword = curValue.password;

        if (storeEmail === email && storePassword == password) {
          alert("login successfully!")
          navigate("/home")
        } else {
          return setMsg("invalid email or password!")
        }
      })
    }


  }
  return (
    <div>
      <Navbar />
      <p className='errMsg'>{msg}</p>
      <div >
        <form onSubmit={handleSubmit} className='login-form'>
          <div className='heading'>
            <p>Login</p>
          </div>
          <div className='account'>
            <input type='email' name='email' placeholder='Enter your Email' onChange={handleInput}></input>
            <input type='password' name='password' placeholder='Enter your Password' onChange={handleInput}></input>
            <p>If you have  to create  account ?<a href=''>Login</a></p>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login