// import { Button } from "bootstrap";
import { Component } from "react";
import { Container, Form , Button} from "react-bootstrap";

import taskService from '../../Services/taskService'

class AddTask extends Component {
    constructor() {
        super()
        //define a state to store task details
        this.state = {
            "taskName": "",
            "taskDescription": ""
        }
        this.saveTask = this.saveTask.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }
    onTextChange(e) {
        e.preventDefault();
        if (e.target.name === "taskName") {
            this.setState({
                taskName: e.target.value
            })
        }
        else {
            this.setState({
                taskDescription: e.target.value
            })
        }

        // let eName= e.target.name;
        // console.log(eName);
        // this.setState({
        //     [eName]:e.target.value
        // })

    }

    saveTask(e) {
        e.preventDefault();
        // console.log(this.state);
        taskService.addTask(this.state)
        this.setState({
            taskName:"",
            taskDescription:""
            
        })
    }

    render() {
        return (
            <Container>
                <h1>Add a task</h1>
                <Form onSubmit={this.saveTask}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task name</Form.Label>
                        <Form.Control name="taskName" type="text" value={this.state.taskName} placeholder="Enter task name" onChange={this.onTextChange} autoComplete="off"/>
                        <Form.Text className="text-muted">
                            add a new task details
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control name="taskDescription" value={this.state.taskDescription} onChange={this.onTextChange} type="text" placeholder="describe your task" autoComplete="off"/>
                        <Form.Text className="text-muted">
                            Task Description for your task
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
            // <form onSubmit={this.saveTask}>
            //     <input type="text" name="taskName" onChange={this.onTextChange} placeholder=" Add a task name" ></input>
            //     <br></br>
            //     <br></br>
            //     <input type="text" name="taskDescription" onChange={this.onTextChange} placeholder=" descripe your desk" ></input>
            //     <br></br>
            //     <br></br>
            //     <input type="submit" value="Save"></input>
            // </form>
        )
    }
}

export default AddTask