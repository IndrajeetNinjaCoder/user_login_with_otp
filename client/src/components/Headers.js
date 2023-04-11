import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Headers = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
    <Container>
      <Navbar.Brand href="#home">Ninja-Coder</Navbar.Brand>
        <Nav className="">
          <Nav.Link href="/register">Register</Nav.Link>
          
        </Nav>
    </Container>
  </Navbar>
  )
}

export default Headers