import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Dom = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""

        },
        validationSchema: Yup.object({
            name: Yup.string().max(10, "name must be less than or equal to 10 characters")
                .required("this is required"),
             email: Yup.string()
                .email("please provide valid email")
                .required("this is required field"),
            password: Yup.string()
                .required("this is required")


        }),

        onSubmit: (values) => {
            console.log(values);
        }
    })
    console.log(formik.touched)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input type='text' name='name'
                    value={formik.values.name}
                    placeholder='type name'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}></input>
                {formik.touched.name && formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
                <br />

                <input type='email' name='email'
                    value={formik.values.email}
                    placeholder='type email'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}></input>
                {formik.touched.email && formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}

                <br />

                <input type='password' name='password'
                    placeholder='type password'
                    value={formik.values.password}
                    onChange={formik.handleChange}></input>
                { formik.touched.password && formik.errors.password && <p style={{ color: "red" }}>{formik.errors.password}</p>}
                <br />
                <button type='submit'>submit</button>
            </form>

        </div>
    )
}

export default Dom
// const Dom = () => {
//     const formik = useFormik({
//         initialValues: {
//             username: "",
//             name: "",
//             email: "",
//             status: "",
//             country: ""

//         },
//         validationSchema: Yup.object({
//             username: Yup.string()
//                 .max(10, "username must be less than or equal to 10 characters")
//                 .required("this is required field"),
//             name: Yup.string().max(8, "name must be equal or less than 8 char")
//                 .required("this is required field"),
//             email: Yup.string()
//                 .email("please provide valid email")
//                 .required("this is required field"),
//             status: Yup.string()
//                 .required("this is required field"),
//             country: Yup.string()
//                 .required("this is required field")

//         }),
//         onSubmit: (values) => {
//             console.log("form submit", values)
//         }
//     })
//     console.log(formik.touched)
//     // console.log(formik.values);
//     return (
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                 <input type='text' name='username'
//                     placeholder='type username'
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.username}
//                 ></input>
//     { formik.touched.username && formik.errors.username && <p style={{ color: "red" }}>{formik.errors.username}</p>}
//                 <br />

//                 <input type='text' name='name'
//                     placeholder='type name'
//                     onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                     value={formik.values.name}
//                 ></input>
//                  {formik.touched.name && formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
//                 <br />

//                 <input type='email' name='email'
//                     placeholder='type email'
//                     onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                     value={formik.values.email}
//                 ></input>
//                  {formik.touched.email && formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}
//                 <br />


//                 <span>Your Status:</span><br />
//                 <label>single</label>
//                 <input type='radio' name='status' value="single"
//                     onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                 ></input>
//                  {formik.touched.status && formik.errors.status && <p style={{ color: "red" }}>{formik.errors.status}</p>}
//                 <br />

//                 <label>commited</label>
//                 <input type='radio' name='status' value="commited"
//                     onChange={formik.handleChange}
//                 ></input><br />
//                 <label>coder</label>
//                 <input type='radio' name='status' value="coder"
//                     onChange={formik.handleChange}
//                 ></input><br />
//                 <select name='country'
//                   onBlur={formik.handleBlur}
//                  onChange={formik.handleChange}>
//                     <option value="">select country</option>
//                     <option value="india">INDIA</option>
//                     <option value="nepal">NEPAL</option>
//                     <option value="USA">USA</option>
//                 </select>
//                  {formik.touched.country && formik.errors.country && <p style={{ color: "red" }}>{formik.errors.country}</p>}
//                 <button type='submit'>submit</button>
//             </form>
//         </div>
//     )
// }

// export default Dom