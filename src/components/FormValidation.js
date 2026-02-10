import React, { useState } from 'react'

const FormValidation = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // console.log(name);

  const handle = (evt) => {
    evt.preventDefault();
    if (email && name && password && confirmPassword) {
    
      if(password===confirmPassword){
            alert("fill succesfully")
      }else{
            alert("ERR:password or confirmPassword must be same") 
      }
    } else {
      alert("all details are required")
    }

  }

  return (
    <div>
      <form onSubmit={handle}>
        <p className='heading'>Sign Up</p>
        <div>

          <p className='fieldName'>Name</p>
          <input type='text' onChange={(evt) => setName(evt.target.value)} ></input>
          <p className={name ? "data" : "noData"}>{name ? "" : "Name is required"}</p>
        </div>
        <div>
          <p className='fieldName'>Email</p>
          <input type='email' onChange={(evt) => setEmail(evt.target.value)}></input>
          <p className={email ? "data" : "noData"}>{email ? "" : "Email is required"}</p>
        </div>
        <div>
          <p className='fieldName'>Password</p>
          <input type='password' onChange={(evt) => setPassword(evt.target.value)}></input>
          <p className={password ? "data" : "noData"}>{password ? "" : "password is required"}</p>
        </div>
        <div>
          <p className='fieldName'>Confirm Password</p>
          <input type='password' onChange={(evt) => setConfirmPassword(evt.target.value)} ></input>
          <p className={confirmPassword ? "data" : "noData"}>{confirmPassword ? "" : "confirm password is required"}</p>
        </div>
        <div>
          <button>SignUp</button>
        </div>



      </form>


    </div>


  )
}

// export default FormValidation