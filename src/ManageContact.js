import { useState } from "react";
// import React,{useState} from "react";
import "./index.css"

const Manage = ({ ManageContact})=>{
    const [contactData,setContactData]=useState({name:"",email:""});

    const access = (evt)=>{
        setContactData({...contactData,[evt.target.name]:evt.target.value})
    }
    //    if(evt.target.name === "name"){
    //         setContactData({...contactData, name: evt.target.value})

    //         }
    //         else{
    //         setContactData({...contactData,email: evt.target.value})
    //         }
     
    // }
    // console.log(contactData);

    const handleAdd = ()=>{
        if(contactData.name === ""||contactData.email===""){
            alert("please fill all details");
        }
        ManageContact(contactData);
        setContactData({name:"",email:""})
    }
    return(
        <>
        <div className="manage">
            <div className="manage1">Add Contact</div>
            <form>
                <label>Name:</label><br/>
                <input type="text" placeholder="Enter your name" value={contactData.name} name="name" onChange={access}></input><br/>
                <label>Email:</label><br/>
                <input type="email" placeholder="Enter your email" value={contactData.email} name="email" onChange={access}></input>
            </form>
            <button onClick={handleAdd}>Add Contact</button>



        </div>
        
        </>
    )
}

// const Manage =({ManageContact})=>{
//     const [ContactData,setContactData]=useState({name:'',email:''});

//     const access = (evt)=>{
//         if(evt.target.name === "name"){
//             setContactData({...ContactData, name: evt.target.value})

//             }
//             else{
//             setContactData({...ContactData,email: evt.target.value})
//             }
     

//     }

//     const handleAdd=()=>{
//         if(ContactData.name === ""||ContactData.name === ""){
//             alert("please fill the details")

//         }
//         ManageContact(ContactData);
//         setContactData({name:"",email:""})
//     }
//     return(
//         <>
//         <div className="manage">
//             <div className="manage1">Add Contact</div>
//             <form>
//                 <label>Name:</label><br/>
//                 <input type="text" placeholder="Enter Name" name="name" value={ContactData.name} onChange={access}></input><br/>
//                 <label>Email:</label><br/>
//                 <input type="email" placeholder="Enter email" name="email"  value={ContactData.email}onChange={access}></input>
//             </form>
//             <button onClick={handleAdd} >Add Contact</button>
//         </div>
        
//         </>
//     )
// }

export default Manage;