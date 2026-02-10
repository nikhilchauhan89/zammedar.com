import { useSelector } from "react-redux"
import { data, Link } from "react-router-dom"
 


const Cart =()=>{
    const cartData=useSelector((state)=>state.cartData)
    let amount = cartData.length && cartData.map(item=>item.price).reduce((prev,next)=>prev+next)
  return(
    <div style={{textAlign:"center",margin:"1rem"}} >
        <Link to="/"> Go Back</Link>
        <h1>Cart Page</h1>
        <div className="cart-page-container">
            <table>
                <tr>
                    <td>Name</td>
                    <td>color</td>
                    <td>Brand</td>
                    <td>Price</td>
                    <td>Category</td>

                </tr>
                {
                    cartData.map((item)=>
                         <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.colo}</td>
                    <td>{item.brand}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>

                </tr>
                    )
                }
            </table>
            <div className="price-details">
                <div className="adjust-price">
                    <span>Amount</span>
                    <span>{amount}</span>
                </div>
                <div className="adjust-price">
                    <span>Discount</span>
                    <span>{amount/10}</span>
                </div>
                 
                <div className="adjust-price">
                    <span>Total</span>
                    <span>0000</span>
                </div>
                <div className="adjust-price">
                    <span>Tax</span>
                    <span>{amount-(amount/10)}</span>
                </div>
            </div>

        </div>
    </div>
  )
}
export default Cart