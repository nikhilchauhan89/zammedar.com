import React from "react";
// import { NavLink } from "react-router-dom";
// import image from "./image/download (1).jpg";
import { NavLink, useNavigate } from "react-router-dom";

function About (){
    const navigate= useNavigate();

    const go = ()=>{
        navigate("/contact");
    }
    return(
        <>
            <nav>
            <ul>
                <li>
                     <NavLink to="/" >Home</NavLink>
                     <NavLink to="/about" >About</NavLink>
                      <NavLink to="/contact" >Contact</NavLink>
                       <NavLink to="/login" >Login</NavLink>
                </li>

            </ul>
        </nav>
            <h1>ABOUT US </h1>
            <button onClick={go}>Go to contact</button>
            {/* <img src={image}/> */}
        </>
    
    
    )
}

export default About;