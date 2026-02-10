import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import MainPage from './MainPage';  
// import Condition from './Condition'; 

// import './index.css';
import App from './App';
// import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import reportWebVitals from './reportWebVitals'
// import BookReducer from './reduxContainer/BookReducer';
// import { Provider } from 'react-redux';
// import { storeee } from './app/Storeee';
// import FormNikhil from './FormNikhil';
// import { ToastContainer } from 'react-toastify';
// import { Formik } from 'formik';
// import Dom from './Dom';
// import LoaderWeb from './LoaderWeb';
import Web from './WebSite/Web';
// import Game from './slice/TicTac/Game';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { ToastContainer } from 'react-toastify';

// import Dumi from './Dumi';
// import { Formik } from 'Formik';
// import { Formik } from 'formik';
// import { store } from './app/store';
// import storeee from './app/Storeee';

// import FormC from './FormC.JS';
// import DigitalClock from './DigitalClock';
// import Add from './useState';
// import AxiosPost from './AxiosPost';
// import RegistrationForm from './RegistrationForm';
// import FormValidation from './components/FormValidation';

// import Clock from './Clock';
// import Dumi from './Dumi';
// import Home from './Home';
// import About from './About';
// import Events from './Events';
// import Form from './Form';
// import Incre from './Incre';
// import Ref from './Ref';
// import DisplayChange from './DisplayChange';
// import Memo from './Memo';
// import CallBack from './CallBack';
// import Axios from './Axios';
//  import useState from './useState';
// import Rout from './Router';

// import Head from './Head';
// import Manage from './ManageContact';
// import Contact from './ContactList';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(store)
root.render(

  // <Provider store={store}>
  //   <BrowserRouter>
  //   <App />
  //   </BrowserRouter>
  // </Provider>

  <StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick={false}
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light" 
  />

  </BrowserRouter> 



  </StrictMode>






);
reportWebVitals();
{/* <StrictMode> */ }
{/* <Dom/> */ }
{/* <LoaderWeb/> */ }
{/* <Web/> */ }
//  <Game/>

// </StrictMode>
// reportWebVitals();
// <React.StrictMode> 
{/* <MainPage/> */ }
{/* <Condition/> */ }
{/* <Home/> */ }
{/* <About name="nikhil"/>
     <About name="aayush"/>
     <About name="aryan"/>
     <About name="tushar"/> */}
{/* <Dumi/> */ }
{/* <Clock/> */ }
{/* <Provider> */ }

{/* </Provider> */ }
{/* <Events/> */ }
{/* <Form/> */ }
{/* <Incre/> */ }
{/* <Ref/> */ }
{/* <DisplayChange/> */ }
{/* <Memo/> */ }
{/* <CallBack/> */ }
{/* <Axios/> */ }
{/* <Axo/> */ }
{/* <AxiosPost/> */ }
{/* <useState/> */ }
{/* <Add/> */ }
{/* <DigitalClock/> */ }
{/* <FormC/> */ }
{/* <Rout/> */ }
{/* <RegistrationForm/> */ }
{/* <Head/>
    <Manage/>
    <Contact/> */}
{/* <BookReducer/>  */ }
{/* </React.StrictMode> */ }


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


