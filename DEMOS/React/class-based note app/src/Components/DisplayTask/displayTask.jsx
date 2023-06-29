import React from 'react';
import CardDispaly from '../CardDisplay/cardDisplay';
import taskService from '../../Services/taskService';
import {Container} from 'react-bootstrap';


class DisplayTask extends React.Component {
    constructor() {
        super();
        this.state = {
            taskDetails: []
        }

    }
    componentDidMount() {
        taskService.getTask()
            .then((data) => {
                this.setState({
                    taskDetails: data.data
                })

            })
            .catch(err => console.log(err))
    }
    componentDidUpdate() {
        taskService.getTask()
            .then((data) => {
                this.setState({
                    taskDetails: data.data
                })

            })
            .catch(err => console.log(err))

    }
   

    render() {
        //console.log(this.state.taskDetails);
        let cardsList = this.state.taskDetails.map(ele => { return <CardDispaly key={ele.taskName} task={ele} /> })

        return (

            // <CardGroup>
            //     {cardsList}
            // </CardGroup>
            <Container fluid>
                {cardsList}
            </Container>
        )
    }
}


export default DisplayTask