
import {useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import img from "../image/banner1.jpg";
import {  useState } from "react";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState({
  email: "",
  password: ""
});

    const navigate=useNavigate()


        const handleInput=(e)=>{
        const {name,value}=e.target;
        setUserData({...userData,[name]:value})
    
        }


        const handleClick = async () => {

          try{ 
    let result = await axios.post("http://localhost:3200/login", userData,{
      headers: { "Content-Type": "application/json" },

       withCredentials: true
    });

    if (result.data.success) {
      document.cookie = "token=" + result.data.token;
       localStorage.setItem("login",userData.email)
  
       toast.success(' Successfully submitted!', );    
      navigate("/");
   
    }else if(userData.email=="" && userData.password==""){
          
            toast.error("pls Enter email or password")

    }else{
        toast.error("Invalid email or password!");
    }
    
  }catch(error){
    
      toast.error("Invalid email or password!");
    
  };
}
    
 
  return (
    <>
      <div className='log'>
       <img src={img} />  

      <h1>Log In</h1> 
        </div>
      <div className='form'>
        <div className='form1'>
    <div className='insideform'>
     

      <label className="form-label" htmlFor="">
        Email
      </label>
      <input
        onChange={handleInput}
        className="form-input"
        type="email"
        name="email"
        placeholder="enter email"
      ></input>

      <label className="form-label" htmlFor="">
        Password
      </label>
      <input
        onChange={handleInput}
        className="form-input"
        type="password"
        name="password"
        placeholder="enter password"
      ></input>
      <button
              onClick={handleClick} className="form-button">
        submit
      </button>
      <br/>
      <br/>
      <a className="createAccount" href='/signup'>Create Account</a>
    </div>
    </div>
      </div>
      </>
  );
};

export default Login























// import React, { useState } from 'react'
// import img from "../image/banner1.jpg";
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {

//   const navigate = useNavigate();

//   const [email,setEmail]=useState("");
//   const[password,setPassword]=useState("");

//   const handleInput=(e)=>{
//   const name=e.target.name;
//   const value=e.target.value;
//   if("email"==name){
//     setEmail(value)
//   }
//   if("password"==name){
//     setPassword(value)
//   }
//   }
//   const handleSubmit=(e)=>{
//    e.preventDefault();
//        if(email=="" && password==""){
//       alert("please fill the details")
//       return;
//     }

  

//   const getData = JSON.parse(localStorage.getItem("user")) || [];
//     const getDetails = getData.find(
//       (item) => item.email === email && item.password === password
//     );
//       if(getDetails){
//             toast.success(' Successfully submitted!', );
//             navigate("/");
//       }
//       else{
//         toast.error("Invalid email or password")
//       }
//     };
     
    

    



//   return (
//     <>
//       <div className='log'>
//         <img src={img} />
//         <h1>Log In</h1>
//       </div>
//       <div className='form'>
//         <form onSubmit={handleSubmit} className='form1'>
//           <div className='insideform'>
//           <label>Email</label><br/>
//           <input type='email' name='email' placeholder='example@domain.com' onChange={handleInput} /><br/>


//           <label>Password</label><br/>
//           <input type='password' name='password' placeholder='*******' onChange={handleInput} />
//           <button
//           type='submit'
//           style={{
//             width:"350px",
//             height:"8vh",
//             backgroundColor:"#077845ff",
//             color:"white",
//             border:"none",
//             borderRadius:"25px",
//             marginLeft:"4.5rem",
//             fontSize:"18px",
//             marginTop:"2rem"

//           }}>Submit</button>
//           <br/>
//           <br/>

//           <a style={{marginLeft:"12.5rem",marginTop:"1rem"}} href='/signup'>Create Account</a>
//           </div>
        
//         </form>
//       </div>

//     </>
//   )
// }

// export default Login
