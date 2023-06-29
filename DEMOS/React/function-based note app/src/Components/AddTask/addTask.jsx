import React from "react";
import {  useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const AddTask = ({ saveTask }) => {
    const [task, SetTask] = useState({
        taskName: "",
        taskDescription: ""
    })
    
    const handleOnChage = (e) => {
        let ele = e.target.name;
        SetTask({...task, [ele]:e.target.value })
    }

    const handleClick = () => {
        // console.log(task);

        saveTask(task);
        SetTask({
            taskName: "",
            taskDescription: ""
        })

    }
    return (

        <Box component="span">
            <TextField name="taskName" id="standard-basic" onChange={handleOnChage} label="taskName" value={task.taskName} variant="standard" autoComplete="off" />
            <br></br>
            <TextField name="taskDescription" id="standard-basic" onChange={handleOnChage} label="taskDescription" value={task.taskDescription} variant="standard" autoComplete="off"/>
            <br></br>
            <Button onClick={handleClick}>Save</Button>
        </Box>

    )

}

export default AddTask