import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, } from 'react-bootstrap';

export default function Top() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Gonzalo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">About me</Link></Nav.Link>
            <Nav.Link ><Link to="/project">Projects</Link></Nav.Link>
            <Nav.Link ><Link to="/contact">Contact Me</Link></Nav.Link>
            <Nav.Link ><Link to="/Resume">Resume</Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
};