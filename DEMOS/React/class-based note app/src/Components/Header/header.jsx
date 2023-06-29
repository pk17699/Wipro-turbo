import { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import './header.css'

class Header extends Component {
    constructor() {
        super()
        
    }

    render() {
        return (

            <Navbar bg="primary"  variant="dark">                
                <Container>
                    <Navbar.Brand>
                        Task Manager
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default Header