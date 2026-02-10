import React, { useState } from "react";

const DigitalClock = ()=>{
    const currTime = new Date().toLocaleTimeString();
    const [time,setTime]= useState(currTime);

    const update=()=>{
          const currTime = new Date().toLocaleTimeString();
        setTime(currTime)
    }
    setInterval(() => {
       update(); 
    }, 1000);

    return(
       <>
       <div>
        <h1>Digital Clock</h1>
        <h1>{time}</h1>
       </div>
       </>
    )
}

// export default DigitalClock;