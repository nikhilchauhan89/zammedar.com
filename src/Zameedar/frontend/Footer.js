import React from 'react'
import image from '../../../src/image/Jameendar.png'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer1'>
                    <div className='image'>
                        <img src={image} />
                    </div>
                    <div className='para'>
                        <p>"ZAMEEDAR.COM — Your go-to platform for buying,
                            selling, and renting plots and lands!" Easily list your property,
                            connect with potential buyers, and explore a wide range of
                            agricultural and vacant lands — all in one place!"</p>
                    </div>
                    <div className='para1'>
                        <a>Follow us :</a>
                    </div>

                </div>
                <div className='footer2'>
                    <div className='image2'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                                09,5th Floor,
                                <br />
                                    Sushma Infinium,Zirakpur,India
                            </li>
                            <li>
                                <a>+918979862571</a>
                            </li>
                            <li>
                                <a>zameedar@gmail.com</a>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className='footer3'>
                    <div className='image3'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                               <a href='/'> Home</a> 
                                </li>
                            <li>
                                <a href='/properties'>All Properties</a>
                                </li>
                            <li>
                               <a href='/about'>About Us</a>
                                </li>
                            <li>
                               <a href='/calculator'> EMI Calculator</a>
                            </li>
                            <li>
                                <a href='/contact'> Contact Us</a>
                                </li>

                        </ul>

                    </div>

                </div>

            </div>
                <div className='footer4'>
                    <div className='image4'>
                        <div className='a'>
                            <p>@2025, All Rights Reserved</p>
                        </div>
                        <div className='b'>
                            <ul>
                                <li>
                                    <a>Privacy&Policy</a>
                                </li>
                                <li>
                                    <a>Term&Condition</a>
                                </li>
                                <li>
                                    <a>Help&Support</a>
                                </li>
                            </ul>

                        </div>


                    </div>

                </div>
        </>
    )
}

export default Footer