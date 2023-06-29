
// 1. Design a Form
// 2. For Values (State-> useState())
// 2. Formik()useFormik


import * as valid from 'yup'
const { useFormik } = require("formik")

// Schema Creation

const loginSchema=valid.object({
    email:valid
    .string()
    .required()
    .email(),
    password:valid
    .string()
    .required()
   

})



const Login =()=>{
    const users= useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:loginSchema,
        onSubmit:(userDetails)=>{
            console.log(userDetails);
        }
    })
    
    return (

        <form onSubmit={users.handleSubmit}>
            <br></br>
            <br></br>
            <br></br>
            <input name="email" value={users.values.email} onChange={users.handleChange} type="text"  ></input>
            <br></br>
            <br></br>
            <br></br>
            <input name="password" value={users.values.password} onChange={users.handleChange} type="text" ></input>
            <br></br>
            <br></br>
            <br></br>
            <input type="submit" value="Save" ></input>

        </form>
    )
}


export default Login