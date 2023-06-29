import { Component } from "react";
import { Navbar } from "react-bootstrap";


class Footer extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Navbar bg="primary" fixed="bottom" variant="dark">
                <Navbar.Brand style={{textAlign:"center",width:"100%"}}>
                    copyrights@2022
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Footer