import React from "react";
import Card from "./Card";
// import "./index.css"
import image1 from "./image/download (1).jpg"
import image2 from "./image/Instructorbanner.d3479a63a7462da254b9.png"



const MainPage=()=>{
    return(
        <>
        <div className="cardComp">
        <Card image={image2}/>
         <Card image={image1}/>
          <Card/>
           <Card/>
            <Card/>
             <Card/>
              <Card/>
               <Card/>
                <Card/>
                 <Card/>
                  <Card/>
                  <Card/>
                   <Card/>
                   </div>
        </>
    )
}

// function MainPage(){
//     return(
//         <div>
//       <h1 className="heading">Card Gallery</h1>
//      <div className="cardComp">
//          <Card/>
//        <Card/>
//         <Card/>
//          <Card/>
//           <Card/>
//            <Card/>
//             <Card/>
//              <Card/>
//               <Card/>
//                <Card/>
//                 <Card/>
//      </div>
//         </div>
//     )
// }
// export default MainPage;