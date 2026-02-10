import React, { useState } from 'react'
import '../Zameedar/index.css'
import image from "../image/Jameendar.png";
import { MenuItem, Select } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Home from './Home';


const Nav = () => {
    const [city,setCity]=useState("");

    const selectCity=(e)=>{
        setCity(e.target.value)
    }
  return (

    <nav className='nav'>
        <div>
        <img src={image}/>
        <LocationOnIcon style={{color:'green'}}/>
        <Select  className = "select" value={city} displayEmpty onChange={selectCity}>
            <MenuItem value="">zirakpur</MenuItem>
            <MenuItem value="1">chandigarh</MenuItem>
            <MenuItem value="2">Panchkula</MenuItem>
            <MenuItem value="3">Mohali</MenuItem>
            <MenuItem value="4">Derabassi</MenuItem>
            <MenuItem value="5">Lalru,Punjab</MenuItem>
        </Select>
        </div>
        <div>
    
            {/* <Home/> */}
            </div>

        
    </nav>
  )
}

// export default Nav