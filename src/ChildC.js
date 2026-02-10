import React, { useContext } from 'react';
// import { dataFirst, dataSecond } from './App';
import { fname,lname } from './App';


const ChildC =()=>{
    const name = useContext(fname)
    const info = useContext(lname)
    return (
        <>
        <h1>my name is : {name} and last name : {info}</h1>
        {/* <fname.Consumer>
       {
        (fname)=>{

            return(
                <>

         <h1>my name is:{fname} and last name :6{lname}</h1>
                </>
            )

        }

       }


        </fname.Consumer> */}
        {/* <h1>I am from:{info}</h1> */}
        {/* <fname.Consumer>
            {
                (fname)=>{
        return(
    <h1>my name is :{fname}</h1>

        )
                }
            }

        </fname.Consumer> */}
        
        {/* <h1>hey i am:</h1> */}
        
        </>
    )
}

export default ChildC;