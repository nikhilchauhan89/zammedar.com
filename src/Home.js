import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import App.css from "./App.css";

// import { Image } from './image/Instructorbanner.d3479a63a7462da254b9.png';
// import { NavLink } from "react-router-dom";
// import image from "./image/download (1).jpg";

const Home =()=>{
    return(
        <>

        <nav>
            <ul>
                <li>
                    <NavLink to="/" >Home</NavLink>
                     <NavLink to="/about" >About</NavLink>
                      <NavLink to="/contact" >Contact</NavLink>
                       <NavLink to="/login/Fname/Lname" >Login</NavLink>
                </li>

            </ul>
        </nav>
     
        <h1>HOME COMPONENT</h1>
           {/* <img src={image}/> */}
        </>
    )
}

export default Home;