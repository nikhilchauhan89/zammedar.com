import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllItem, removeItem } from './slice';
import { useNavigate } from 'react-router-dom';

const CartList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartSelecter = useSelector((state) => state.cart.items)
    const [cartItems, setCartItems] = useState(cartSelecter)
    useEffect(() => {
        setCartItems(cartSelecter)
    }, [cartSelecter])
 
    const manageQuantity = (id, q) => {
        let quantity = parseInt(q) > 1 ? parseInt(q) : 1
        const cartTempItems = cartSelecter.map((item) => {
            return item.id == id ?
                { ...item, quantity } : item
        })

        setCartItems(cartTempItems)
    }

    const handlePlaceOrder = () => {
        localStorage.clear();
        dispatch(clearAllItem())
        alert("order placed")
        navigate("/")
    }
    return (
        <div className='cart-container'>
            <div className='cart-header'>
                <h2>Youe Cart Item</h2>
                <span>{cartItems.length} items</span>
            </div>
            {
                cartItems.map((item) => (
                    <div key={item.id} className='cart-item'>
                        <img src={item.thumbnail} />
                        <h4>{item.title}</h4>
                        <div className='item-info'>
                            <div className='item-details'>
                                <p>{item.brand}</p>
                            </div>
                        </div>
                        <div className='item-actions'>
                            <div style={{ display: "flex" }}>
                                <input onChange={(e) => manageQuantity(item.id, e.target.value)}
                                    value={item.quantity ? item.quantity : 1} style={{ margin: "15px" }}
                                    type='number' placeholder='Enter Quantity'></input>
                                <div>
                                    <span className='price'>
                                        ${(item.quantity ? item.price * item.quantity : item.price).toFixed(2)}

                                    </span>
                                    <button onClick={() => dispatch(removeItem(item))} className='btn'>Remove</button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
            <div className='cart-footer'>
                Total: ${
                    (cartItems.reduce((sum, item) =>
                        item.quantity ? sum + item.price * item.quantity : sum + item.price, 0
                    )).toFixed(2)}
            </div>
            <button onClick={handlePlaceOrder} className='btn'>Place order</button>
        </div>
    )
}

// export default CartList