// import React, { useState } from 'react'
import img from "../image/banner1.jpg";
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import Select from 'react-select';
// import Contact from './Contact';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

  const navigate = useNavigate();
  

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      number: "",
      city: "",
      file: null


    },

    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      email: Yup.string().required("email is required"),
      password: Yup.string().required("password is required"),
      confirmpassword: Yup.string().required("confirmpassword is required"),
      number: Yup.string().required("contact number is required"),
      // file: Yup.string().required("profile is required")
    }),

    onSubmit: async (values, { resetForm }) => {
      //   console.log(values)
      //  if(values.name=="" || values.email == "" ||
      // values.password==""||values.confirmpassword==""||values.number==""||values.city==""){
      //    toast.error('please enter details!', );
      //  }else{
      //    if(values.password!=values.confirmpassword){
      //       alert("pass and confirmpass are not same")
      //    }else{

      //      const getData = JSON.parse(localStorage.getItem("user")||"[]");
      //      let arr=[];
      //      arr=[...getData];
      //      arr.push(values)
      //      localStorage.setItem("user",JSON.stringify(arr))
      //      toast.success('SignUp Successfully !', );
      //      navigate("/login"); 
      //    }
      //   }
      //    resetForm();
      if (values.password !== values.confirmpassword) {
        alert("Password and Confirm Password do not match");
        return;
      }
      // const formData = new FormData();
      // formData.append("name", values.name);
      // formData.append("email", values.email);
      // formData.append("password", values.password);
      // formData.append("number", values.number);
      // formData.append("city", values.city);
      // formData.append("file", values.file);


      const result = await axios.post("http://localhost:3200/signup", values,{
        headers: { "Content-Type": "application/json" },

         withCredentials: true
      }
     
   );


      if (result.data.success) {

        document.cookie = "token=" + result.data.token;
        localStorage.setItem("login", values.email)
        navigate("/login");
      } else {
        alert("after some time")
      }


      resetForm();
    }

  })

  // console.log(formik.errors)
  return (
    <>
      <div className='log'>
        <img src={img} />
        <h1>Sign Up</h1>
      </div>
      <div className='sign'>
        <div className='sign1'>
          <div className='signhead'>
            <p>Sign Up</p>

          </div>
          <div className='signfooter'>
            <form className='signform' onSubmit={formik.handleSubmit}>
              <div className='allcoll'>
                <div className='col1'>
                  <label>Full Name</label>

                  <input type='text' name='name'
                    value={formik.values.name}
                    placeholder='Enter Full Name...'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}></input>
                  {formik.touched.name && formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
                </div>

                <div className='col1'> <label>Contact Number</label>

                  <input type='number' name='number'
                    value={formik.values.number}
                    placeholder='Enter a Valid Contact Number...'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  ></input>
                  {formik.touched.number && formik.errors.number && <p style={{ color: "red" }}>{formik.errors.number}</p>}
                </div>


                <div className='col1'><label>Email</label>

                  <input type='email' name='email'
                    value={formik.values.email}
                    placeholder='Enter a Valid email...'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}

                  ></input>
                  {formik.touched.email && formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}
                </div>

                <div className='col1'><label>Password</label>

                  <input type='password' name='password'
                    value={formik.values.password}
                    placeholder='*****'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  ></input>
                  {formik.touched.password && formik.errors.password && <p style={{ color: "red" }}>{formik.errors.password}</p>}
                </div>

                <div className='col1'><label>ConfirmPassword</label>

                  <input type='password' name='confirmpassword'
                    value={formik.values.confirmpassword}
                    placeholder='*****'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}

                  ></input>
                  {formik.touched.confirmpassword && formik.errors.confirmpassword && <p style={{ color: "red" }}>{formik.errors.confirmpassword}</p>}
                </div>
                <div className='colfile'><label>Profile Image</label>

                  <input style={{ alignContent: "center", width: "308px" }} type='file' name='file'
                    // value={formik.values.file}
                    placeholder='Upload file'
                    onBlur={formik.handleBlur}
                    onChange={(event) => {
                      formik.setFieldValue("file", event.currentTarget.files[0]);
                    }}


                  ></input>
                  {formik.touched.file && formik.errors.file && <p style={{ color: "red" }}>{formik.errors.file}</p>}
                </div>

                <div className='col1'>
                  <label>City</label>
                  <br />
                  <select name='city' onChange={formik.handleChange} className='col1s'>
                    <option value="">Select city</option>
                    <option value="zirakpur">zirakpur</option>
                    <option value="chandigarh">chandigarh</option>
                    <option value="Panchkula">Panchkula</option>
                    <option value="Mohali">Mohali</option>
                    <option value="Derabassi">Derabassi</option>
                    <option value="Lalru,Punjab">Lalru,Punjab</option>
                  </select>

                </div>
              </div>
              <div className='btnB'>

                <button
                  type='submit'
                  className='mainBtn'>Submit</button>
                <br />
                <br />
                <p>Already have an account?<a style={{ textDecorationLine: "none", color: "blue", fontSize: "14.5px" }} href='/login'> LogIn </a></p>
              </div>
            </form>

          </div>

        </div>

      </div>
    </>
  )
}

export default SignUp