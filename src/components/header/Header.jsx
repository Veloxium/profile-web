import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
    >
      <Navbar bg="custom" variant="dark" className="nav">
        <Container>
          <Link to="/profile-web">
            <Navbar.Brand>
              <img src={Logo} alt="logo" className="logo" />
            </Navbar.Brand>
          </Link>
          <Nav className="ms-auto menu">
            <Link to="/profile-web" className="list" active>
              HOME
            </Link>
            {/* <Nav.Link href="#about" className="list">ABOUT</Nav.Link>
            <Nav.Link href="#project" className="list">PROJECT</Nav.Link>
            <Nav.Link href="#contact" className="list">CONTACT</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
