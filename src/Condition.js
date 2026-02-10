import React from "react";

const Condition = ()=>{
  let age = 10;
  let results ;
  // if(age>=18){

  //   return(
      
  //     <h1>you  can vote</h1>
    
  //   )
  // }else{
  //   return(
  //     <h1>you cannot vote</h1>
  //   )
  // }
  if(age>=18){
    results=<h1>you can vote</h1>
  }else{
    results=<h1>you cannot vote</h1>
  }
  return(
    <>
    <h1>


    {results}
    </h1>
    </>
  )
}

// export default Condition;

// const MyFun =()=>{
//     let age =10;
//     if(age>=18){
//         return(
//             <h1>you can vote</h1>
//         )
//     }else{
//         return(
//         <h1>you cannot vote </h1>
//         )
//     }


// }
// const Condition =()=>{
//   let age =20;
//   let results;
//   if(age>=18){
//     return(
//         <h1>you can vote</h1>
//     )
//   }else{
//     return(
//         <h1>you cannot vote</h1>
//     )
// }
// if(age>=18){
//     results=<h1>you can vote</h1>
// }else{
//     results=<h1>you cannot vote</h1>
// }
// return(
    <>
        {/* <MyFun/> */}
        {/* <div>{age>=18? <h1>you can vote</h1>:<h1>you cannot vote</h1>}</div> */}
    </>
/* //     <div> 
//         {results}
//     </div> */
// )

// }
// export default Condition;