import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';

const AddToCart = () => {

    const selector = useSelector((state) => state.cart.items);
    console.log(selector.length);
    console.log(selector)

    return (
        <div className='cart'>
            <NavLink to='/cart'>
                <img src='https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png' className="cart-icon" />
                <span className='cart-count'>{selector.length ? selector.length : 0}</span>
            </NavLink>

        </div>
    )
}

// export default AddToCart