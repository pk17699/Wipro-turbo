import axios from "axios"

const url="http://localhost:4000/task"

export const addTask=(newTask)=>{
    // console.log(newTask)
    return axios.post(`${url}`,newTask)
}

export const getTask=()=>{
    return axios.get(url)
}

export const deleteTask=(id, e)=>{
    // console.log(url);
    // console.log(id);
    return axios.delete(`http://localhost:4000/task/${id}`) // or `${url}/${id}`
}