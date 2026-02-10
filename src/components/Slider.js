import React, { useEffect, useRef, useState } from "react";
// import './index.css'
import  data from "./Data.json";

const Slider = ()=>{
    console.log(data)
   const [next , setNext] = useState(0);
   let ref = useRef(null);

   const Next = ()=>{
    setNext((previousValue)=>{
        if(previousValue == data.length-1){
            return 0 
        }
            return previousValue+1
        
    })
   }

   const pre = ()=>{
    if(next == 0){
        setNext(data.length-1)
    }else{
    setNext(next-1)
    }
   }
   useEffect(()=>{
     ref.current = setInterval(Next,1000)
     return(()=>{
        clearInterval(ref.current)
     })
   },[])

    return(
        <div className="conatiner" onMouseEnter={()=>clearInterval(ref.current)} onMouseLeave={()=>  ref.current = setInterval(Next,1000)}>
        <div className="left-btn">
            <button onClick={pre}>{"<"}</button>
        </div>
        <img src={data[next].download_url}/>
         <div className="right-btn">
            <button onClick={Next}>{">"}</button>
        </div>
        </div>
    )
}

export default Slider