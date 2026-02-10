// import  React, { createContext }  from 'react';

// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Login from './Login';
// import { Instagram, YouTube } from '@mui/icons-material';
// import Axios from "./Axios";
// import AxiosPost from "./AxiosPost";
// import { Axios } from "axios";
// import React, { useEffect, useState } from "react";
// import { Suspense } from "react";
// import { createContext } from "react";
import "./App.css"
import { Routes,Route, BrowserRouter} from 'react-router-dom';
import React from 'react';
// import './index.css'
// import AddTodo from './featureApp/componentsApp/AddTodo';
// import Todo from './featureApp/componentsApp/Todo';
// import ChildA from "./ChildA";
// import LazyLoading from "./LazyLoading";
// import AxiosPost from "./AxiosPost";
// import ChildC from './ChildC';
// import Header from './Header';
// import  Error  from './Error';
// import TodoList from './TodoList';
// import Head from "./Head";
// import Manage from "./ManageContact";
// import Contact from "./ContactList";
// import { useState ,useEffect} from "react";
// import uuid4 from "uuid4";
// import AddTask from "./components/addTask";
// import TaskList from "./components/TaskList";
// import FilterTask from "./components/FilterTask";
// import AddTodo from "./components/AddTodo";
// import Todo from "./components/Todo";
// import Slider from "./components/Slider";
// import Otp from './components/Otp';
// import SignUp from './LoginSignUp/SignUp';
// import Slider from "@mui/material/Slider";
// import { addTask } from "./features/taskSlice";
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { Formik } from 'formik';
// import SignUp from './LoginSignUp/SignUp';
// import Home from './LoginSignUp/Home';
// import Login from './LoginSignUp/Login';
// import Pagination from './components/Pagination';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment } from './counterSlice';
// import Slider from './Slider';
// import Zameedar from './Zameedar/Zameedar';
import Home from './Zameedar/Home';
import About from './Zameedar/About';
import Contact from './Zameedar/Contact';
import Calculator from './Zameedar/EMI Calculator';
import Properties from './Zameedar/All Properties';
import SeeAll from './Zameedar/SeeAll';
import FrontLayout from './Zameedar/frontend/FrontLayout';
import ViewDetails from './Zameedar/ViewDetails';
import Login from './Zameedar/Login';
import SignUp from './Zameedar/SignUp';

import Product from "./reduxCart/Product";
import { useDispatch } from "react-redux";
import { clearAllItem } from "./ReduxApp/slice";
import CartList from "./ReduxApp/CartList";
import { addToCart } from "./redux/actions";
import Header from "./reduxComponents/Header";
import Main from "./reduxComponents/Main";
import Cart from "./reduxComponents/Cart";
import AddProperty from "./Zameedar/AddProperty";
// import { ToastContainer } from 'react-toastify';
// import AutoPlay from './Zameedar/Zameedar';
// import CustomRange from './Zameedar/Zameedar';
// import RangeSlider from './Zameedar/Zameedar';
// import MultiRangeSlider from './Zameedar/Zameedar';
// import Zameedar from './Zameedar/Zameedar';





// const fname = createContext();
// const dataFirst = createContext();
// const dataSecond = createContext();
// import React from "react";
// const LazyLoading = React.lazy(()=>import("./LazyLoading"))
// const fname = createContext();
// const lname = createContext();

const App = ()=>{
  // const count = useSelector((state)=>state.counter.value);
  // const dispatch = useDispatch();
  // const [contact,setContact]=useState([]);
  // const localStorageKey = "contact"
// const localStorageKey = "contact"
//   const [contact,setContact]=useState(()=>{
//      return JSON.parse(localStorage.getItem(localStorageKey))
//   || []});

// useEffect(()=>{
//   localStorage.setItem(localStorageKey,JSON.stringify(contact))
//  },[contact])
//   const ManageContact = (data)=>{
//   //  console.log(data, "from app.js")9
//    setContact([...contact,{id:uuid4(),data}])
//   // setContact([...contact,{id:uuid4(),data}])
//   }

//   const deleteList = (id)=>{
//     const updatedList = contact.filter((val)=>{
//       return val.id !== id;
//     })
//     setContact(updatedList);

//   }

  // const deleteList = (id)=>{
  //   const updatedList = contact.filter((val)=>{
  //     return val.id !== id;
  //   })
  //   setContact(updatedList);
  // }

  // const dispatch=useDispatch();

  // const location = useLocation();
 


  return(
  
<>
{/* <div className="App">
  <Header/>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes> */}

{/* </div> */}
{/* <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Product/>}/>
    <Route path="/cart" element={<CartList/>}/>
  </Routes>
</BrowserRouter> */}

  {/* <h1>redux toolkit</h1>
  <button onClick={()=>dispatch(clearAllItem())} className="btn">Clear all</button> */}
  
  {/* <MultiRangeSlider/> */}
  {/* <CustomRange/> */}
  {/* <AutoPlay/> */}
 {/* <Slider/>
  */}
  {/* <Zameedar/> */}
  {/* <SeeAll/> */}
 
  
  <div>

  <Routes>
    <Route path='/' element={<FrontLayout/>}>
      <Route path='/' element={<Home/>}/>
          <Route path='/properties' element={<Properties/>}/>
       <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
           <Route path='/calculator' element={<Calculator/>}/>
            <Route path='/seeall' element={<SeeAll/>}/>
            <Route path='/details' element={<ViewDetails/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path="/property" element={<AddProperty/>}/>
            
    </Route>
    </Routes>
    </div>



{/* <h1>about redux</h1>
<AddTodo/>
<Todo/> */}
{/* <Formik/> */}
{/* <h1>Counter:{count}</h1>
<button onClick={()=>dispatch(increment())}>+</button>
<button onClick={()=>dispatch(decrement())}>-</button> */}
{/* <counterSlice/> */}
{/* <Pagination/> */}
{/* <AddTodo/>
<Todo/> */}
{/* <Slider/> */}
{/* <Slider/> */}
{/* <Otp/> */}
{/* <SignUp/> */}
{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<SignUp/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
</Routes>
</BrowserRouter> */}

  {/* // <div> */}

    {/* <h1>Task Manager</h1> */}
    {/* <AddTask/>
    <FilterTask/>
    <TaskList/> */}
   
  {/* // </div> */}
  </>
        )
}
export default App;
  {/* <fname.Provider value={"nikhil"}>
    <lname.Provider value={"chauhan"}>
     <ChildA/>
    </lname.Provider>
  </fname.Provider> */}

  {/* <h1>Lazy Loading</h1>
  <Suspense fallback="please wait page loading..">

  <LazyLoading/>
  </Suspense> */}
{/*  
  {/* <AxiosPost/> */}
   {/* <Head/>
      <Manage ManageContact={ManageContact}/>
      <Contact contact={contact} deleteList={deleteList}/> */}
     
  
  {/* <Contact/> */}
  
 
  
// export default App;
// export{fname,lname}
{/* <div className='app'>
    <TodoList/>
    </div> */}
 
    // <BrowserRouter>
    //   <Header/>
    // <Routes>
    //   <Route path='/' element={<Home/>}/>
    //   <Route path='/about' element={<About/>}/>
    //   <Route path='/contact' element = {<Contact/>}/>
    //   <Route path='/login' element= {<Login/>}/>
    //   <Route path = '*' element={<Error/>}/>

    //   </Routes>
    
    // </BrowserRouter>
    
 

    {/* <dataFirst.Provider value={"Nikhil Chauhan"}>
      <dataSecond.Provider value={"sahranpur"}>

       <ChildC/>

      </dataSecond.Provider>
      </dataFirst.Provider> */}
    {/* <fname.Provider value={"nikhil"}>
      <ChildC/>
      

    </fname.Provider> */}
    
      {/* <h1>props drilling</h1> */}

    
  


// export default App;
// export{dataFirst,dataSecond}
// function App (){
//   const [count,setCount] = useState(0);
//   const incre=()=>{
//     setCount(count+1)
//   }
//   return(
//     <div className='box'>
//       <h1>{count}</h1>
//       <button onClick={incre}>increment</button>

//     </div>
//   )
// }


 


//  function App (){
//  const [count,setCount]=useState();
//  const incre=()=>{
//   setCount(count+1)
//  }
//  return(
//   <div>
//     <h1>{count}</h1>
//     <button onClick={incre}>increment</button>
//   </div>
//  )
// }


// function Card(){
//   return(
//     <div className='cardItems'>card div</div>
//   )
// }
