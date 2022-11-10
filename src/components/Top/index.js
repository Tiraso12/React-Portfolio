import React from "react";
import { Container, Nav, Navbar,} from 'react-bootstrap';

export default function Top() {
    return(
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Gonzalo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">About me</Nav.Link>
                <Nav.Link href="#contact-me">Contact Me</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#Resume">Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
    )
};