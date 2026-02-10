import React, { useState } from 'react'
import view from '../image/viewdetails.jpg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data1 from './SecCardData';
import data2 from './Data2';

const ViewDetails = () => {

  const [openModal, setOpenModal] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      message: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      phone: Yup.string().required("phone is required"),
      email: Yup.string().required("email is required"),
      city: Yup.string().required("city is required"),
      message: Yup.string().required("please type something")
    }),
    onSubmit: (values, { resetForm }) => {
      toast.success(' Successfully submitted!',);
      resetForm();
    }
  })

  const handleX = (prev) => {
    setOpenModal(!prev)
  }

    const handleCopy = () => {
    const number = "8979862571";
    navigator.clipboard.writeText(number)
      if(number){
        toast.success("clipboard copy")
      }

    }

  return (
    <>

      {/* onClick={()=>{setOpenModal(prev=>!prev)}} */}
      {
        openModal && <div className='modalUi-frame'>
          <div className='modalUi-card'>
            <div className='modal-x' onClick={handleX} >
              X
            </div>
            <div className='modalUi-header'>
              <div className='modalUi-title'>
                <p>Contact Us</p>
              </div>


            </div>
            <div className='number'>
              <div className='modalUi-body'>
                8979862571

              </div>
              <div className='moda' onClick={handleCopy} >

                Copy
              </div>
            </div>
            <div className='call'>
              <p>Please quote property reference when calling us.</p>
            </div>

          </div>

        </div>
      }
      <h1>PLOTS IN AURA HOMES, ZIRAKPUR</h1>
      <p>Patiala road near Nabha Sahib, Zirakpur, Punjab, near Nabha Sahib,
        Zirakpur, Punjab, Chandigarh Patiala Highway, Zirakpur, India</p>
      <div className='view'>
        <div className='viewa'>
          <img src={view} />
        </div>
        <div className='viewb'>
          <div className='viewH'>
            <a>Whatsaap</a>
            <button onClick={() => { setOpenModal(prev => !prev) }}>Call</button>

          </div>
          <form onSubmit={formik.handleSubmit} className='formS'>
            <div className='formA'>
              <label htmlFor='name'> Name* </label>
              <input
                id='name'
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                name='name'
                value={formik.values.name}
                type='text'></input>
            </div>
            {formik.touched.name && formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
            <div className='formA'>
              <label htmlFor='phone'> Phone* </label>
              <input
                id='phone'
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                name='phone'
                value={formik.values.phone}
                type='number'></input>
            </div>
            {formik.errors.phone && formik.touched.phone && <p style={{ color: "red" }}>{formik.errors.phone}</p>}
            <div className='formA'>
              <label htmlFor='email'> Email* </label>
              <input
                id='email'
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                name='email'
                value={formik.values.email}
                type='email'></input>
            </div>
            {formik.errors.email && formik.touched.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}
            <div className='formA'>
              <label htmlFor='city'> City* </label>
              <input
                id='city'
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                name='city'
                value={formik.values.city}
                type='text'></input>
            </div>
            {formik.errors.city && formik.touched.city && <p style={{ color: "red" }}>{formik.errors.city}</p>}
            <div className='formM'>
              <label htmlFor='message'> Message* </label>
              <input
                id='message'
                name='message'
                onChange={formik.handleChange}
                value={formik.values.message}
                type='text' placeholder='type here...'></input>
            </div>
            {formik.touched.message && formik.errors.message && <p style={{ color: "red" }}>{formik.errors.message}</p>}
            <button
              type='submit'

            >Submit Enquiry</button>

          </form>

        </div>
      </div>
      <div className='table'>
        <div className='table1'>
          {data2.map((item)=>( 
          <ul className='overview_propertyDetail'>
            <li>
              <span className='left'>Type</span>
              <span className='right'>{item.title}</span>
            </li>
             <li>
              <span className='left'>Price</span>
              <span className='right'>{item.price}</span>
            </li>
             <li>
              <span className='left'>Total Size</span>
              <span className='right'>{item.size}</span>
            </li>
             <li>
              <span className='left'>Facing Direction</span>
              <span className='right'>{item.direction}</span>
            </li>
             <li>
              <span className='left'>Boundary Wall</span>
              <span className='right'>No</span>
            </li>
             <li>
              <span className='left'> Corner Plot </span>
              <span className='right'>No</span>
            </li>
             <li>
              <span className='left'> Status  </span>
              <span className='right'> Available </span>
            </li>
             <li>
              <span className='left'>Posted By </span>
              <span className='right'>Owner</span>
            </li>
            
          </ul>
       ))}
          

        </div>

      </div>

    </>
  )
}

export default ViewDetails