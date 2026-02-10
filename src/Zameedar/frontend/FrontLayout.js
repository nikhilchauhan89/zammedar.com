import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Phone from './Phone'


const FrontLayout = () => {
  return (
    <div>
    <Header/>
    <Outlet>
    </Outlet>
    <Phone/>
  
    <Footer/>
    </div>
  )
}

export default FrontLayout