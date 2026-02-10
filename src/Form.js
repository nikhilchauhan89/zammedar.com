import React,{useState} from "react";


const Form = ()=>{
    const[val,setVal]=useState("");
    const [show,setShow]=useState("");
    const getName=(evt)=>{
      setVal(evt.target.value)
    //   console.log(evt.target.value);
    }
    const submit =(event)=>{
     event.preventDefault();
     setShow(val)

    }
    console.log(show);
    return(
        <>
        <h1>{show}</h1>
        <form onSubmit={submit}>
            <label>First Name</label>
            <input type="text"  onChange={getName} value={val}></input>
            <button type="submit">submit</button>
        </form>
        
        </>
    )
}

// const Form =()=>{
//     const[fname,setFname]= useState("");
//     const [show,setShow] = useState("");
//     const[lname,setLname] = useState("");
//     const getName =(event)=>{
//         if(event.target.name == "firstName"){
//             setFname(event.target.value);
//         }if(event.target.name == "lastName"){
//             setLname(event.target.value);
//         }
//     //  console.log(event.target.value);
//     }

//     const submitBtn = (event)=>{
//         event.preventDefault();
//         setShow(fname+lname);
//     }
//     console.log(show);
//     return(
//         <>
//         <form onSubmit={submitBtn}>
//             <h1>{show}</h1>
//             <label>Enter first Name </label>
//             <input type="text" name='firstName' onChange={getName}  value={fname}></input>
//             <label>Last Name</label>
//             <input type="text" name='lastName' onChange={getName} value={lname}></input>
//             <button type="submit">submit</button>
//         </form>
        
//         </>
//     )
// }

// export default Form;