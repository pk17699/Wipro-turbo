// create a new Task
//import axios from 'axios'
let url = "http://localhost:4000/task";

const { default: axios } = require("axios");

const addTask = (newTask) => {

   

    // return fetch(url, {
    //     method: "Post",
    //     headers: {
    //         'Content-type': "application/json"
    //     },
    //     body: JSON.stringify(newTask)

    // })
    return axios.post(url,newTask);



}

// get a all Task

const getTask=()=>{
    return axios.get(url);
}

const deleteTask = (id, e) =>{
    //let x = url.filter(item => item.id == id);
    axios.delete(`http://localhost:4000/task/${id}`)
    .catch((err)=>{
        console.log(err);
    })
}


module.exports={
    addTask,
    getTask,
    deleteTask
}