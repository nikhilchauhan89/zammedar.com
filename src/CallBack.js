import React, { useCallback, useState } from "react";
import Memos from './Memos';

const CallBack = ()=>{
    const [add,setAdd]=useState(0)
    const [count,setCount]=useState(0)

    const addition = ()=>{
        setAdd(add+1)
    }
  
    

    const learning = useCallback(()=>{

    },[count])
      const change =()=>{
        setCount(count+2)
    }
    
    return(
        <>
        <Memos learning={learning} count={count}/>
        <h1>{add}</h1>
        <button onClick={addition}>Addition</button>
        <h1>{count}</h1>
        <button onClick={change}>count</button>
        </>
    )
}

// function CallBack (){
//     const[add,setAdd] = useState(0);
//     const [count,setCount] = useState(0);

//      const multiply =useCallback(()=>{

//      },[count])
//     return(
//         <>
//         <Memos multiply= {multiply} count = {cou}/>
//         <h1>{add}</h1>
//         <button onClick={()=>setAdd(add+1)}>Addition</button>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+2)}>count</button>
        
//         </>
//     )
// }
// export default CallBack;