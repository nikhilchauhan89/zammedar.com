import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartData } from '../redux/reducer'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/productAction'

const Header = () => {
    const result = useSelector((state)=>state.cartData)
    const dispatch=useDispatch();
    return (
        <div className='header'>
      <Link to="/"><h1 className='logo'>E-com</h1>
      </Link>
      <input onChange={(event)=>dispatch(searchProduct(event.target.value))} type='text' placeholder='search'></input>
          <Link to="/cart">
           <div className='cart-div'>
                <span>{result.length}</span>
                <img src='https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png' className="cart-icon" />

            </div>
          </Link>
        </div>
    )
}

export default Header