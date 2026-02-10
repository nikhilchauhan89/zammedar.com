import React from "react";
 import "./index.css"
 import DeleteIcon from '@mui/icons-material/Delete';

 const Contact =(props)=>{
   const{contact,deleteList}=props
  //  const deleteFn=()=>{

  //  }
  // console.log(contact,"from contactList")
  const Contact = contact.map((val)=>{
    return(
      <div className="last">
        <div>{val.data.name}</div>
        <div>{val.data.email}</div>
        <span onClick={()=>deleteList(val.id)}><DeleteIcon/></span>
      </div>
    )
  })
  // const Contact =contact.map((val)=>{
  //   return(
    
  //     <div className="last">
  //       <div>{val.data.name}</div>
  //       <div>{val.data.email}</div>
  //     </div>
      
    
  //   )
  // })
  return(
    <>
    <div>contact List</div>
    <div>{Contact}</div>
    </>
  )
 }

// const Contact = (props)=>{
//   // console.log(contact,"from contactList")
//   const {contact,deleteList} = props
//   const Contact = contact.map((val)=>{
//     return(
      
//       <div className="last">
//       <div >{val.data.name}</div>
//       <div>{val.data.email}</div>
//       <span onClick={()=>deleteList(val.id)}><DeleteIcon/></span>
//       </div>
    
//     )
//   })
//     return(
//     <>
    
//     <div>Contact List</div>
//     <div>{Contact}</div>
    
//     </>
//     )
//   }

export default Contact; 