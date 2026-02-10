import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import React,{ useEffect, useState} from "react";


const Incre = ()=>{
   const [add,setAdd]=useState(0);
   const [data,setData]=useState("code");
   const increment=()=>{
    setAdd(add+1)
    }

   const decrement =()=>{
    if(add<=0){
    alert("you cannt decrease more");
    }else{

        setAdd(add-1);
    }
   }
   const change=()=>{
    setData("nikhil chauhan");
   }

   useEffect(()=>{

    alert("running useEffect");
   },[data])
    return(
    <>
    <h1>{data}</h1>
    <h1>{add}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={change}>change</button>
    
    </>
    )

}

// export default Incre;
// const Incre = ()=>{
//     const[count,setCount] = useState(0);
//     const [data,setData]  = useState("code");
    

//     const change = ()=>{
//         setCount(count+1);
//         // setCount(count-1);
//     }
//     const change1 = ()=>{
//         setCount(count-1);
//         // setCount(count-1);
//         if(count<=0){
//            alert("you cannot decrease more"); 
//            setCount(0);
           
//         }  
      
//     }
//     const change2=()=>{
//     setData("my name is Nikhil Chauhan");
//     }

//     useEffect(()=>{
//         alert("running useEffect");
//     },[data])


//     return(
//         <>
//         <h1>{data}</h1>
//         <div className="box2">
//             <div className="box1">
//             <h1>{count}</h1>
//             </div>
//         <div className="box">
//         <button onClick={change}>increment</button>
//         <button onClick={change1}>decrement</button>
//         <button onClick={change2}>change</button>
//         </div>
//         </div>
        
//         </>
//     )
// }

// export default Incre;