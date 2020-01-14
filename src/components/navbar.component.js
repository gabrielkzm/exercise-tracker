import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class AppNavBar extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Exercise Tracker</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Exercises</Nav.Link>
                        <Nav.Link href="/create">Add Exercise</Nav.Link>
                        <Nav.Link href="/user">Add User</Nav.Link>
                    </Nav>
            </Navbar>
        );
    }
}