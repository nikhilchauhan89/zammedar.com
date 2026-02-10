import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "react-router-dom";


const Axios = ()=>{
    const [store,setStore]=useState([]);
    const getData = ()=>{

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res);
            setStore(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getData();
    },[store])
    return(
        <>
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>address</th>

            </tr>
            </thead>
            <tbody>
                {store && (store).map((dataDetails,index)=>{
               return(
                
                    <tr key={index}>
                <td>{dataDetails.id}</td>
                <td>{dataDetails.name}</td>
                <td>{dataDetails.email}</td>
                <td>{dataDetails.address.city}{dataDetails.address.street}</td>
            </tr>
                
                
               )
                })
                }
        
            </tbody>
        </table>
        
        </>
    )
}

export default Axios;
// const Axios=()=>{
//     const[data,setData]=useState([]);
//    useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>{
//         console.log(res);
//         setData(res.data);
//     })

//    },[])

// const[store,setStore]= useState()

// const getData =()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>{
//         console.log(res.data);
//         setStore(res.data)
//     }).catch((err)=>{
//         console.log(err)
//     })

// }

// const getData = async()=>{
//     try{
//          const response = await axios.get("https://jsonplaceholder.typicode.com/user")
// console.log(response);

//     }catch(err){
//       console.log(err);  
//     }
// const response = await axios.get("https://jsonplaceholder.typicode.com/users")
// console.log(response);
// }
// useEffect(()=>{
//     getData()
// },[])

// return(
//     <>
//     <h1>hdsjajsfsj</h1>
//     <table style={{width:'800px', margin:'50px auto',border:'1px solid #ccc'}}>
//        <thead>
//          <tr>
//             <th>id</th>
//             <th>name</th>
//             <th>email</th>
//         </tr>
//        </thead>
//        <tbody>
//          {data &&
//         (data).map((dataDetails,index)=>{
//             return(
//                 <tr key={index}>
//                     <td>{dataDetails.id}</td>
//                     <td>{dataDetails.name}</td>
//                     <td>{dataDetails.email}</td>
//                 </tr>
//             )
//         })
//         }
//        </tbody>
//     </table>
{/* {data.map((data)=>{
            return(
                <div>{data.name}</div>
            )
        // })} */}
// </>
//     )
// }

// export default Axios;

// const getData = async()=>{
//     const response = await fetch("")
//     const jsonData = await response.json();
//     console.log(jsonData)
// }

// const Axios = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/users")
//             .then((res) => {
//                 console.log(res);
//                 setData(res.data)

//             })

//     }, [data])
//     return (
//         <>
//             <h1>User list</h1>
//             <table style={{
//                 width: '800px', margin: '50px auto', border: '2px solid grey'
//             }}>
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <th>name</th>
//                         <th>email</th>
//                         <th>address</th>
//                         {/* <th>addresscity</th>
//                         <th>addressstreet</th>
//                          <th>addresszipcode</th> */}
                        


//                     </tr>
//                 </thead>
//                 <tbody>{data && (data).map((dataDetails, index) => {
//                         return (
                            
//                             <tr key={index}>
//                                 <td>{dataDetails.id}</td>
//                                 <td>{dataDetails.name}</td>
//                                 <td>{dataDetails.email}</td>
//                                  <td>{dataDetails.address.city}{' '}{dataDetails.address.street},{dataDetails.address.suite},{dataDetails.address.zipcode}</td>

//                             </tr>
//                         )

//                     })
//                 }
//                 </tbody>
//             </table>
//         </>
//     )
// }

// export default Axios;