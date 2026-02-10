import React, { useState } from "react";
import "./index.css";

const Events=()=>{
    const[color,setColor]=useState("red");
    const [text,setText]=useState("click me");

    const change = ()=>{
        setColor("green");
        setText("changed");
        // setColor("red");
     
    }
    const change1=()=>{
        setColor("red"); 
        setText("click here");
    }
    
    return(
        <>
        <div style={{backgroundColor:color}}className="box">
    
    <button onClick={change} onDoubleClick={change1}>{text}</button>
            </div>
        
        
        </>
    )
}

// const Event =()=>{
//     const [bg,setBg] = useState("red");
//     const[text,setText]= useState("click here");

//     const changeColor=()=>{
//         setBg("green");
//         setText("changed");
//     }
//     const back = ()=>{
//         setBg("red");
//         setText("click here");
//     }


//     return(
//         <>
//     <div style= {{backgroundColor:bg}} className="box">
//             <button onClick={changeColor} onDoubleClick={back}>{text}</button>

//             </div>
        
//         </>
//     )
// }

// export default Events;