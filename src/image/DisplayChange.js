import React, { useState } from "react";

const DisplayChange =()=>{

    const[color,setColor] = useState("red");

    const change =()=>{
        setColor("green");
    }
    const change1 =()=>{
        setColor("red")
    }
    return(
        <>
        <div style={{backgroundColor:color}} className="box">        
            <button onClick={change} onDoubleClick={change1}>click me</button>
        </div>
        
        
        </>
    )
}

export default DisplayChange;