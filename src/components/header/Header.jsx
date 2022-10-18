import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png'

const Header = () => {
  return (
    <div>
    <Navbar bg="custom" variant="dark" className="nav">
        <Container>
          <Navbar.Brand href="#home"><img src={Logo} alt="logo" className='logo' /></Navbar.Brand>
          <Nav className="ms-auto menu">
            <Nav.Link href="#home" className="list">HOME</Nav.Link>
            <Nav.Link href="#about" className="list">ABOUT</Nav.Link>
            <Nav.Link href="#project" className="list">PROJECT</Nav.Link>
            <Nav.Link href="#contact" className="list">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header