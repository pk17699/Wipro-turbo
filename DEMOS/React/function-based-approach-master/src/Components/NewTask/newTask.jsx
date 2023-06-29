import React from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Button } from '@mui/material';
import { useState } from 'react';
import * as yup from 'yup'



import { useFormik } from "formik"

const taskSchema = yup.object({
    taskName: yup
        .string("Enter the Task name")
        .required()
        .email("Email id is Required"),
    taskDescription: yup
        .string("Eneter Task Description")
        .required("required")
        .min(10, "min 10 char is required")
})

const NewTask = () => {

    const taskFormik = useFormik({
        initialValues: {
            taskName: "",
            taskDescription: ""
        },
        validationSchema: taskSchema,
        onSubmit: (task) => {
            console.log(task);
         
        }
    })

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        // onSubmit={SaveTask}
        >
            <br></br>
            <br></br>
            <br></br>

            <div>
                <TextField
                    id="outlined-required"
                    label="Task Name"
                    placeholder="enter task name"
                    name='taskName'
                    value={taskFormik.values.taskName}
                    onChange={taskFormik.handleChange}
                    error={taskFormik.touched.taskName && Boolean(taskFormik.errors.taskName)}
                    helperText={taskFormik.touched.taskName&& taskFormik.errors.taskName}

                />
                <br></br>
                <br></br>
                <br></br>
                <TextField
                    required
                    id="outlined-disabled"
                    label="Task describtion"
                    placeholder="enter task describtion"
                    name='taskDescription'
                    value={taskFormik.values.taskDescription}
                    onChange={taskFormik.handleChange}
                    error={taskFormik.touched.taskDescription && Boolean(taskFormik.errors.taskDescription)}
                    helperText={taskFormik.touched.taskDescription&& taskFormik.errors.taskDescription}

                />
                <br></br>
                <br></br>
                <br></br>


            </div>
            <Button variant="contained" onClick={taskFormik.handleSubmit}>Save</Button>
        </Box>
    )

}

export default NewTask