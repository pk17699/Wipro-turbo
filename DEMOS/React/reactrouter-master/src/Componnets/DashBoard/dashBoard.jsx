import { Link, Outlet } from "react-router-dom"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const DashBoard = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <h2>DashBoard</h2>

            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                {/* <LinkTab label="All Task" href="/allTask" ></LinkTab>
                <LinkTab label="Add Task" href="/addTask" /> */}
                <Link to='allTask'>AllTask</Link>
                <Link to='addTask'>AddTask</Link>

            </Tabs>
            <Outlet></Outlet>
        </>
    )
}


export default DashBoard