// import { Button } from "bootstrap";
import React, { useState } from "react";

// const TodoList = ()=>{
//     const[activity,setActivity]=useState("");
//     const[listData,setListAData]=useState([]);
//     const addActivity=()=>{
//     //   setListAData([...listData,activity])
//     //   console.log(listData);
//       setListAData((listData)=>{
//         const updatedList = [...listData,activity]
//         console.log(updatedList);
//         setActivity("");
//         return updatedList;
//       })
//     }

//     const removeActivity = (i)=>{
//         // setListAData("");
//         const updatedListData = listData.filter((elem,id)=>{
//             return i!=id;
//         })
//         setListAData(updatedListData)
//     }
//     const removeAll=()=>{
//         setListAData([])
//     }
//     return(
//         <>
//      <div className="container">
//         <div className="header">TodoList</div>
//         <input type="text" placeholder="Add Activity" value={activity} onChange={(e)=>setActivity(e.target.value)}></input>
//        <button onClick={addActivity}>Add</button>
//        <p className="List-heading">Here is your List : {")"}</p>
//        {listData != [] && listData.map((data , i)=>{
//         return(
//             <>
//             <p key={i}>

//          <div className="listData">{data}</div>
//          <div className="btn-position">
//             <button onClick={()=>removeActivity(i)}>remove(-)</button>
//          </div>


//             </p>
            
//             </>
//         )
//        })}
//        {listData.length>=1 && 
//        <button onClick={removeAll}>Remove All</button>
// }

 
//      </div>
        
//         </>
//     )
// }

// export default TodoList;

const TodoList =()=>{
    const[activity,setActivity]=useState("");
    const [listData,setListAData]=useState([]);

    const addActivity=()=>{
        // setListAData([...listData,activity])
        // console.log(listData);
        setListAData((listData)=>{
            const updatedList = [...listData,activity]
            setActivity("")
            return updatedList
        })

    }

    const removeActivity = (i)=>{
    //   setListAData("")
      const updatedListData = listData.filter((elem,id)=>{
        return i!=id;
      })
      setListAData(updatedListData);

    }

    const removeAll = ()=>{
        setListAData([]) 
       }


    return(
        <>
        <div className="container">
            <div className="header">Todo List</div>
            <input type="text" placeholder="Add Activity" value={activity} onChange={(e)=>setActivity(e.target.value)}></input>
            <button onClick={addActivity}>Add</button>
            <p className="List-heading">Here is your List : {")"} </p>
            {listData != [] && listData.map((data,i)=>{

            return(
                <>
                <p key={i}>
            <div className="listData">{data}</div>
            <div className="btn-position">
                <button onClick={()=>removeActivity(i)}>remove{("-")}</button>
            </div>


                </p>
                
                </>

            )
            })}
            {listData.length>=1 &&
            <button onClick={removeAll}>Remove All</button>
            }


        </div>

        </>
    )
}

// export default TodoList;