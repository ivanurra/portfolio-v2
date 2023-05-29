"use client";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="fixed-top color-nav shadow-navbar"
    >
      <Navbar.Brand href="/" className="ml-auto mt-2">
        ivanurra<span className="color-number">.dev</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mt-2 ">
          <Nav.Link href="#home">
            <span className="color-number">01.</span>About
          </Nav.Link>
          <Nav.Link href="#home">
            <span className="color-number">01.</span>Portfolio
          </Nav.Link>
          <Nav.Link href="#features">
            <span className="color-number">02.</span>Contact
          </Nav.Link>
          <Nav.Link href="#features">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
