import React, { useMemo, useState } from "react";
import "./index.css";

const Memo = ()=>{
    const [add,setAdd]=useState(0);
    const [minus, setMinus]=useState(100);

    const addition = ()=>{
        setAdd(add+1);
    }

    const change = ()=>{
      setMinus(minus-1);
    }

     const multiplication=useMemo (function multiply(){
        console.log("nikhil",add)
     },[add])

   
    return(
        <>
        <h1>{add}</h1>
        {multiplication}
        <button onClick={addition}>addition</button>
        <h1>{minus}</h1>
        <button onClick={change}>subtraction</button>
        </>
    )
}

export default Memo;


// const Memo=()=>{
//     const [add,setAdd] = useState(0);
//     const [minus,setMinus] = useState(100);
//     const addition =()=>{
//         setAdd(add+1);
//     }
//     const multiplication = useMemo (function mutiply(){
//         console.log("nikhilchauhan");
//         return add*10;
        
//     },[add])
//     const subtraction = ()=>{
//      setMinus(minus-1)
//     }

//     return(
//         <>
//         <h1>{add}</h1>
//         <button onClick={addition}>Addition</button>
//         <h1>{multiplication}<br></br></h1>
//         <h1>{minus}</h1>
//         <button onClick={subtraction}>subtraction</button>
        
        
//         </>
//     )
// }
// export default Memo;