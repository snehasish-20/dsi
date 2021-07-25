import React from 'react'
import logo from'../images/logo.svg'
import icon1 from '../images/icons/icon1.svg'
import icon2 from '../images/icons/icon2.svg'
import icon3 from '../images/icons/icon3.svg'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import '../styles/Navigationbar.css'

function Navigationbar() {
    return (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="id fixed-top">
  <Container>
  <Navbar.Brand href="#header"><img src={logo} alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#products" className="navLink">Services</Nav.Link>
      <Nav.Link href="#products" className="navLink">Products</Nav.Link>
      <Nav.Link href="#" className="navLink">Technology</Nav.Link>
      <NavDropdown title="About us" id="collasible-nav-dropdown" className="navLink">
        <NavDropdown.Item href="#about">About us</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Client" id="collasible-nav-dropdown" className="navLink">
        <NavDropdown.Item href="#footer">Our Clients</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#footer" className="navLink">Partners</Nav.Link>
    </Nav>
    <Nav className="mx-auto">
      <Nav.Link href="#"><img src={icon1} alt="icon" /></Nav.Link>
      <Nav.Link href="#"><img src={icon2} alt="icon" /></Nav.Link>
      <Nav.Link href="#"><img src={icon3} alt="icon" /></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigationbar
