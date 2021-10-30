import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" bg="light" expand="lg" className="shadow">
                <Container>
                    <Navbar.Brand href="#home">TravelBea</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">My Booking</Nav.Link>
                            <Nav.Link href="#link">Manage Booking</Nav.Link>

                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#link">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;