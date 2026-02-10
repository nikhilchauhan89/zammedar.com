import React, { useState } from 'react'
import main from "../image/form.jpeg"
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const userDetails = {
        name: "",
        email: "",
        password: ""
    }

    const [data, setData] = useState(userDetails)

    const navigate = useNavigate();

    const handleInput = (evt) => {
        // console.log(evt.target.value);
        setData({ ...data, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (data.name == "" || data.email == "" || data.password == "") {
            alert("plaese enter details")
        } else {

            const getData = JSON.parse(localStorage.getItem("user") || "[]");
            let arr = [];
            arr = [...getData];
            arr.push(data)
            localStorage.setItem("user", JSON.stringify(arr))
            alert("sign up successfully")
            navigate("/login")
        }



    }

    return (
        <div>
            <Navbar />
            <div className='main-page'>
                <form onSubmit={handleSubmit}>
                    <div className='heading'>
                        <p>Sign Up</p>
                    </div>
                    <div className='account'>
                        <input type='text' name='name' placeholder='Enter your Name' onChange={handleInput}></input>
                        <input type='email' name='email' placeholder='Enter your Email' onChange={handleInput}></input>
                        <input type='password' name='password' placeholder='Enter your Password' onChange={handleInput}></input>
                        <p>Already have an account ?<a href='/login'>Login</a></p>
                    </div>
                    <button>SignUp</button>
                </form>
                <div>
                    <img src={main} />
                </div>
            </div>
        </div>
    )
}

export default SignUp