import { Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";




import { useFormik } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

// const handlSubmit=()=>{

// }
const loginSchema = yup.object({
    email: yup
        .string('enter email')
        .required('email required')
        .email(),
    password: yup
        .string("enetr password")
        .required("password must specify")
        .min(5, "min 10 Char")

})

const Login = () => {
    // const [task,setTask]=useState({
    //     taskName:"",
    //     taskDescription:"",
    //     taskRemainder:""
    // })
    let navigate = useNavigate();

    const loginFormik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {

            if(values.email=="admin@adim.in" && values.password=="admin@admin123")
            {
                navigate('/dashboard')
            }
            else
            {
                navigate('/register')
            }          
            

        }
    })
    return (
        <div className="addTask">
            <Typography>Login</Typography>
            <form onSubmit={loginFormik.handleSubmit}>

                <TextField
                    id="txtEmail"
                    name="email"
                    value={loginFormik.values.email}
                    onChange={loginFormik.handleChange}
                    error={loginFormik.touched.email && Boolean(loginFormik.errors.email)}
                    helperText={loginFormik.touched.email && loginFormik.errors.email}
                    placeholder="enter Task name"></TextField>
                <br></br>

                <TextField
                    id="txtPassword"
                    name="password"
                    value={loginFormik.values.taskDescription}
                    onChange={loginFormik.handleChange}
                    error={loginFormik.touched.password && Boolean(loginFormik.errors.password)}
                    helperText={loginFormik.touched.password && loginFormik.errors.password}
                    placeholder="Task Description"></TextField>
                <br></br>
                
                <Button type="submit">submit</Button>
            </form>
        </div>

    )

}

export default Login