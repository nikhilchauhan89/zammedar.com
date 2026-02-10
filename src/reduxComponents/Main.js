import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { addToCart, EmptyCart, removeFromCart } from '../redux/actions';
import { productListing } from '../redux/productAction';
import productSaga from '../redux/productSaga';



const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data in main component from saga", data)


  useEffect(() => {
    dispatch(productListing())
  }, [])
  return (
    <div>
      <div>
        <button className='btn' onClick={() => dispatch(EmptyCart())}> Empty cart </button>
      </div>

      <div className='product-container' >
        {
          data.map((item) =>
            <div key={item.id} className='product-item'>
              <img style={{ width: "250px", height: "250px" }} src={item.photo} />
              <div>Name: {item.name}</div>
              <div>Color: {item.colo}</div>
              <div>Brand: {item.brand}</div>
              <div>Price: {item.price}</div>
              <div>Category: {item.category}</div>
              <div>
                <button onClick={() => dispatch(addToCart(item))} className='btn'>Add To Cart</button>
                <button onClick={() => dispatch(removeFromCart(item.id))} className='btn'>Remove To Cart</button>
              </div>
            </div>

          )
        }

      </div>
    </div>
  )
}

export default Main