import { Update } from '@mui/icons-material';
import { Input } from '@mui/material';
import axios from 'axios';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
// import axios from 'axios';

const AxiosPost=()=>{
  const data = {
    fname:'',
    lname:''
  }
  const [inputData,setInputData]=useState(data);

  const handleData = (evt)=>{
    setInputData({...inputData,[evt.target.name]:evt.target.value})
  }
  console.log(inputData);

  const submit =(evt)=>{
   evt.preventDefault();
   axios.post("https://jsonplaceholder.typicode.com/users",inputData)
   .then((res)=>{
    console.log(res);
   })
  }
  // useEffect(()=>{
   
  // },[data])

  return(
    <>
    <label>First Name</label>
    <input type='text'  name='fname' onChange={handleData}></input>
    <label>Last Name</label>
    <input type='text' name='lname' onChange={handleData}></input>
    <button onClick={submit}>submit</button>
    </>
  )
}

export default AxiosPost;
// 
// const AxiosPost=()=>{
  
//   const data = {
//     fname:'',
//     lname:''
//   }
//   const[inputData,setInputData]= useState(data);

//   const handleInput = (evt)=>{
//     console.log(evt.target.value);
//     setInputData({...inputData,[evt.target.name]:evt.target.value})
//   }
//   console.log(inputData);
//   const handleForm = (evt)=>{
//     evt.preventDefault();
 
//     axios.post("https://jsonplaceholder.typicode.com/users",inputData)
//     .then((res)=>{
//       console.log(res);
//     })
//   }
// const handle =(evt)=>{
//     evt.preventDefault();

//     axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
//     .then((res)=>{
//       console.log(res);
//     })
//   }


//   return(
//     <>
//     <form onSubmit={handleForm}>
//       <input type='text' placeholder='Enter Name' name='fname' onChange={handleInput}></input>
//       <input type='text' placeholder='Enter Last Name ' name='lname' onChange={handleInput}></input>
//       <button>submit</button>
//       <button onClick={handle}>update</button>
//     </form>
    
//     </>

//   )
// }

// export default AxiosPost;

// const AxiosPost=()=>{
//   const data ={
//     fname:"",
//     lname:"",
//   }
//   // console.log(data);
//   const [inputData,setInputData]=useState(data);

//   const handleInput=(event)=>{
//       console.log(event.target.value);
//       setInputData({...inputData, [event.target.name]:event.target.value})

//   }
//   console.log(inputData);
//   const handleForm=(evt)=>{
//     evt.preventDefault();
//     axios.post("https://jsonplaceholder.typicode.com/users",inputData)
//     .then((res)=>{
//       console.log(res);
//     }).catch((err)=>{
//       console.log(err);
//     })
//   }
//   const Update=(evt)=>{
//     evt.preventDefault();
//     axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
//     .then((res)=>{
//       console.log(res);
//     }).catch((err)=>{
//       console.log(err);
//     })
  

//   }
//   const handleDelete=(evt)=>{
//      evt.preventDefault();
//     axios.delete("https://jsonplaceholder.typicode.com/users/1")
//     .then((res)=>{
//       console.log(res);
//     }).catch((err)=>{
//       console.log(err);
//     })

//   }

//     return(
//         <div>
//         <form onSubmit={handleForm}>
//         <label>First Name:</label>
//         <input type='text' name='fname' onChange={handleInput}></input>
//           <label>Last Name:</label>
//         <input type='text' name='lname' onChange={handleInput}></input>
//         <button>submit</button>
//         <button onClick={Update}>update</button>
//         <button onClick={handleDelete}> Delete</button>
//         </form>
        
        
//         </div>
//     )
// }

// export default AxiosPost;
