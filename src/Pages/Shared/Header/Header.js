import { Badge, Button } from 'react-bootstrap';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <Navbar fixed="top" bg="light" expand="lg" className="shadow">
                <Container>
                    <Navbar.Brand href="#home">TravelBea</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/mybookings">My Bookings</Nav.Link>
                            <Nav.Link as={NavLink} to="/managebookings">Manage Bookings</Nav.Link>
                            <Nav.Link as={NavLink} to="/addservice">Add Service</Nav.Link>

                        </Nav>
                        <Nav className="ms-auto">
                            {
                                user.email ? <div className="d-flex flex-column justify-content-center align-items-center">
                                    <Badge className="mb-1" bg="success">{user.displayName}</Badge>
                                    <Button size="sm" onClick={logOut} variant="danger">Log Out</Button>
                                </div>
                                    : <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;