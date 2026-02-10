import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import image from "../image/Jameendar.png";
import { MenuItem, Select } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import img from "../image/banner1.jpg";

const Contact = () => {
// const [city, setCity] = useState("");
  
//     const selectCity = (e) => {
//       setCity(e.target.value)
//     }
  return (
    <>
          {/* <nav className='nav'>
             <img src={image} />
           <div className='logo'> 
           <LocationOnIcon style={{ color: 'green' }} /> 
           <Select className="select" value={city} displayEmpty onChange={selectCity}>
            <MenuItem value="">zirakpur</MenuItem>
            <MenuItem value="1">chandigarh</MenuItem>
            <MenuItem value="2">Panchkula</MenuItem>
            <MenuItem value="3">Mohali</MenuItem>
            <MenuItem value="4">Derabassi</MenuItem>
            <MenuItem value="5">Lalru,Punjab</MenuItem>
          </Select> 
           </div>
                 <ul>
                    <li><NavLink to='/'>Home</NavLink> </li>
                                   <li><NavLink to='/about'>About Us</NavLink></li>
                                   <li><NavLink to='/contact'>Contact Us</NavLink></li>
                                   <li><NavLink to='/properties'>All Properties</NavLink></li>
                                   <li><NavLink to='/calculator'>EMI Calculator</NavLink></li>
                                     <button className='prop'>+ Add Property</button>
                 </ul>
         
               </nav> */}
    
    < div className='about'>
     
      <img/>
      <h1>Contact Us</h1>
     
    </div>
     {/* nikhil */}
    </>
  )
}

export default Contact