// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import image from '../../../src/image/Jameendar.png';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import Select from 'react-select';
// import axios from 'axios';

// const opt = [
//   { value: 'zirakpur', label: 'zirakpur' },
//   { value: 'chandigarh', label: 'chandigarh' },
//   { value: 'Panchkula', label: 'Panchkula' },
//   { value: 'Mohali', label: 'Mohali' },
//   { value: 'Derabassi', label: 'Derabassi' },
//   { value: 'Lalru,Punjab', label: 'Lalru,Punjab' },
// ];

// const Header = () => {
//   const [selectedO, setSelectedO] = useState(null);
//   const [profileImage, setProfileImage] = useState(null); // store profile pic URL
//   const navigate = useNavigate();

//   // Fetch logged-in user info
//   useEffect(() => {
//     const email = localStorage.getItem('email'); // stored at login/signup
//     if (email) {
//       axios
//         .get(`http://localhost:3200/getUser?email=${email}`)
//         .then((res) => {
//           if (res.data.success && res.data.user.filePath) {
//             setProfileImage(`http://localhost:3200/${res.data.user.filePath}`);
//           }
//         })
//         .catch((err) => console.log(err));
//     }
//   }, []);

//   // Handle city selection
//   const handle = (selectedO) => {
//     setSelectedO(selectedO);
//     navigate('/', { state: { selectedO } });
//   };

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem('email');
//     setProfileImage(null);
//     navigate('/login');
//   };

//   return (
//     <nav className="nav">
//       <img src={image} alt="Logo" />
//       <div className="logo">
//         <LocationOnIcon style={{ color: 'green' }} />
//         <Select
//           placeholder="zirakpur"
//           options={opt}
//           value={selectedO}
//           onChange={handle}
//           className="sale"
//           styles={{
//             placeholder: (defaultStyles) => ({ ...defaultStyles, fontSize: '14px' }),
//           }}
//         />
//       </div>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/properties">All Properties</NavLink></li>
//         <li><NavLink to="/about">About Us</NavLink></li>
//         <li><NavLink to="/contact">Contact Us</NavLink></li>
//         <li><NavLink to="/calculator">EMI Calculator</NavLink></li>
//         <button className="prop">+ Add Property</button>

//         {/* ✅ Replace login icon with profile pic if logged in */}
//         {profileImage ? (
//           <img
//             src={profileImage}
//             alt="Profile"
//             style={{
//               width: '35px',
//               height: '35px',
//               borderRadius: '50%',
//               cursor: 'pointer',
//               objectFit: 'cover',
//               marginLeft: '10px',
//             }}
//             onClick={handleLogout} // click to logout
//             title="Click to logout"
//           />
//         ) : (
//           <a href="/login">
//             <PersonOutlineIcon style={{ cursor: 'pointer', marginLeft: '10px' }} />
//           </a>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Header;





















import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import image from '../../../src/image/Jameendar.png'
// import { MenuItem, Select } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Select from 'react-select';
// import data1 from '../SecCardData';
// import img from "../image/banner1.jpg";

const opt = [
  { value: "zirakpur", label: "zirakpur" },
  { value: "chandigarh", label: "chandigarh" },
  { value: "Panchkula", label: "Panchkula" },
  { value: "Mohali", label: "Mohali" },
  { value: "Derabassi", label: "Derabassi" },
  { value: "Lalru,Punjab", label: "Lalru,Punjab" }
]

const Header = () => {
    const [selectedO, setSelectedO] = useState(null);
    const navigate = useNavigate();


    const handle = (selectedO) => {
    setSelectedO(selectedO)
     navigate("/", {
            state: {
                selectedO,
            }
        })
  }

  const handleClick=()=>{
    navigate("/property")
  }


    return (
        <>
            <nav className='nav'>
                <img src={image} />
                <div className='logo'>
                    <LocationOnIcon style={{ color: 'green' }} />
                    <Select
                        placeholder="zirakpur"
                        options={opt}
                        value={selectedO}
                        onChange={handle}
                        className='sale'
                        styles={{
                            placeholder: (defaultStyles) => ({
                                ...defaultStyles,
                                fontSize: "14px"
                            })
                        }}
                    />
                </div>
                <ul>
                    <li><NavLink to='/'>Home</NavLink> </li>
                    <li><NavLink to='/properties'>All Properties</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    <li><NavLink to='/calculator'>EMI Calculator</NavLink></li>
                    <button onClick={handleClick} className='prop'>+ Add Property</button>
                    <a href='/login'><PersonOutlineIcon style={{ cursor: "pointer" }} /></a>
                </ul>

            </nav>

        </>
    )
}


export default Header