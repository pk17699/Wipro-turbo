import React from "react";
import { useState, useEffect } from 'react'
import AddTask from '../AddTask/addTask'
import DisplayTask from '../DisplayTask/displayTask'
import { addTask, getTask } from '../../Services/taskService'

const DashBoard = () => {
    const [taskList, SetTaskList] = useState([])

    useEffect(() => {
        getTask().then((data)=>{
           // console.log(data.data);
            SetTaskList(data.data)
        })
        .catch((err)=>console.log(err))
    },[taskList])
    const SaveTask = (newTask) => {
        let taskNew= newTask;
        taskNew.taskId=taskList.length+1;
        addTask(newTask).then((data)=>{
            console.log("sucess");
        })
        .catch("error")
    }
    return (
        <>
            <AddTask saveTask={SaveTask} />
            <DisplayTask tasklist={taskList} />
        </>
    )

}

export default DashBoard