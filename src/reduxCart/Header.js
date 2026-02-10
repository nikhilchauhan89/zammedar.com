import React from 'react'
// import AddToCart from './AddToCart'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className='logo'>MyShop</div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href='#'>Products</a></li>
                </ul>
            </nav>
            {/* <AddToCart /> */}
        </header>
    )
}

// export default Header