import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Error from "./Error";
import "./index.css"
import YouTube from "./Youtube";

const Rout =()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact/" element={<Contact />} >
        <Route path="youtube" element={<YouTube/>}/>
        </Route>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<Error/>}/>
         <Route path="/Login/:fname/:lname" element={<Login/>}/>

        </Routes>
        
        
        </BrowserRouter>
        
        </>
    )
}

export default Rout;