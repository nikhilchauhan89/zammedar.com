import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../ReduxApp/slice'
import { fetchProducts } from '../ReduxApp/productSlice'



const Product = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const Selector = useSelector((state) => state.products.items)
    console.log(Selector)


    const selector = useSelector((state) => state.cart.items);
    console.log(selector);

    return (
        <div className='grid'>
            {
                Selector.map((item) => (
                    <div key={item.id} className='card9'>
                        <img src={item.thumbnail} />
                        <div className='content'>
                            <div className='title'>{item.title}</div>
                            <div className='brand'>{item.brand}</div>
                            <div className='price'>{item.price}</div>
                            <div className='rating'>{item.rating}</div>
                            {
                                selector.find(cartItem => cartItem.id === item.id) ?

                                    <button onClick={() => dispatch(removeItem(item))}
                                        className='btn remove-button'>Remove from cart</button>
                                    :
                                    <button onClick={() => dispatch(addItem(item))}
                                        className='btn'>Add to Cart</button>


                            }
                        </div>
                    </div>
                ))

            }


        </div>
    )
}

// export default Product



/* <div className='product-image'>
              <img src='https://via.placeholder.com/400' />
          </div>

          <div class="product-info">
              <h1>Wireless Headphones</h1>
              <p className="price">$129.99</p>
              <p className="description">
                  Experience high-quality sound with these wireless headphones.
                  Featuring noise cancellation,long-lasting battery life,
                  and a sleek modern design for everyday use.
              </p>
              <button onClick={() => dispatch(addItem(1))} className="btn">Add to Cart</button>
                 <button onClick={() => dispatch(removeItem())} className="btn">Remove from Cart</button>
          // </div>*/