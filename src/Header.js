import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';

const Header =()=>{
    return(
        <>

                    <nav>
                    <ul>
                 <li>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/login">login</NavLink>
        
                 </li>
        
                    </ul>
        
        
        
                </nav>
        
        
        </>
    )
}

export default Header;