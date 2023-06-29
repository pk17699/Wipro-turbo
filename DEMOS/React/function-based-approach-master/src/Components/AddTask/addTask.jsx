import React from 'react';
import { useState } from 'react';

const AddTask = () => {

    const [task, setTask] = useState({
        taskName: "",
        taskDescription: ""
    })

    const OnTextChange=(e)=>{

        let eleName= e.target.name;
        
        setTask({...task,[eleName]:e.target.value})

    }


    const SaveTask = (e) => {
        e.preventDefault();
        console.log(task);
        setTask({
            taskName:"",
            taskDescription:""
        });

    }
    return (
        <form onSubmit={SaveTask}>

            <input type="text" name='taskName' value={task.taskName} onChange={OnTextChange} placeholder="enter the task name"></input>
            <br></br>
            <br></br>
            <input type="text" name='taskDescription' value={task.taskDescription} onChange={OnTextChange} placeholder="descripe your task"></input>
            <br></br>
            <br></br>
            <input type="submit" value="save"></input>
        </form>
    )
}

export default AddTask