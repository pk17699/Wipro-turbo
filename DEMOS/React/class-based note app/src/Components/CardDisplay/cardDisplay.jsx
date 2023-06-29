import { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import {deleteTask} from '../../Services/taskService'

class CardDispaly extends Component{
    constructor()
    {
        super();
        //console.log("hello");
    }

    render(){
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.task.taskName}</Card.Title>
                    <Card.Text>
                        {this.props.task.taskDescription}
                    </Card.Text>
                    <Button variant="danger" onClick={(e) => deleteTask(this.props.task.id, e)}>delete</Button>
                </Card.Body>
            </Card>
        )
    }
}


export default CardDispaly