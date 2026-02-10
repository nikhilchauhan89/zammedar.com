import React from "react";
// import { NavLink } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

const Contact = ()=>{
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
            {/* <nav>
            <ul>
         <li>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">login</NavLink>

         </li>

            </ul>



        </nav> */}
        <h1>CONTACT US</h1>
        <div>
            <NavLink to="youtube">YouTube</NavLink>

        </div>
        <Outlet/>   
        
        
        </>
    )
}

export default Contact;