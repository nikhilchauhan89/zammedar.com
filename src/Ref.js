import React, { useRef, useState } from "react";

const Ref = ()=>{
    const [val,setVal]=useState("")

    const refElem = useRef(0)
    console.log(refElem.current);
    const change=(evt)=>{
        setVal(evt.target.value);
        refElem.current = refElem.current+1;

    }
    const submit=()=>{
    // refElem.current.style.color="red"
    // refElem.current.style.backgroundColor="green"
    setVal("");
    // refElem.current.focus();
    }
    return(
        <>
        <h1>useRef Hook:</h1><br></br>
        <input type="text"  ref={refElem} value={val} onChange={change}></input>
        {/* <button onClick={submit}>submit</button> */}
        <h1>count:{refElem.current}</h1>
        
        </>
    )
}

// const Ref =()=>{
//     const [val,setVal] = useState("");

//     const refElem = useRef(0);
//     console.log(refElem.current);

//     const change = (event)=>{
//         setVal(event.target.value);   
//         refElem.current = refElem.current+1;
//     }

//     return(
//         <>
//         <div className="container">
//             <h1>USEREF Hook:</h1>
//             <input type="text" ref={refElem} value={val} onChange={change}></input>
//             <h1>count:{refElem.current}</h1>

//         </div>
        
        
//         </>
//     )
// }

// export default Ref;

// const Ref =()=>{
//     const[val,setVal] = useState("");

//     const refElem =useRef("0");


//     const change=(event)=>{
//      setVal(event.target.value);
//      refElem.current=refElem.current+1;

//     }
//     return(
//         <>
//           <div className="container">
//             <h1>useRef Hook</h1>
//             <input type="text" value={val} onChange={change}> </input>
//             <h1>count:{refElem.current}</h1>

//         </div>
//         </>
        
        
    
//     )
// }

//    export default Ref;