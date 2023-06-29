import React from "react";
import CardTask from "../CardTask/cardtask"

const DisplayTask=({tasklist})=>{
    const taskdispla= tasklist.map((ele=>{return <CardTask task={ele} />}))
    return(
        <>{taskdispla}</>
    )

}

export default DisplayTask