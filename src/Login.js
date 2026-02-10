import React from "react";
// import { NavLink } from "react-router-dom";
// import Header from './Header';
// import {  useParams } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const Login =()=>{
    const navigate = useNavigate();
    const {fname,lname} = useParams();
    const location = useLocation();
    console.log(location);
    const back = ()=>{
        navigate(-1)
    }

    const locat = ()=>{
        alert("nikhil chauhan")
    }

    return(
        <>
            <nav>
            <ul>
                <li>
                    <NavLink to="/" >Home</NavLink>
                     <NavLink to="/about" >About</NavLink>
                      <NavLink to="/contact" >Contact</NavLink>
                       <NavLink to="/login/Fname /Lname" >Login</NavLink>
                </li>

            </ul>
        </nav>
        <h1>LOG IN</h1>
        <button onClick={back}>Go to back</button>
        <h1>hello to {fname} and last {lname}</h1>
        <h1>Cureent location:{location.pathname}</h1>
        <p>{location.pathname=="/login/nikhil/chauhan"?<button onClick={locat}>get url</button>:null}</p>
       

       {/* <button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button> */}
        
        </>
    )
}
export default Login;