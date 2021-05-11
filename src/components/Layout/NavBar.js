import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar
    activeKey="/profile"
    fixed='bottom'
  >
    <Nav.Item>
      <Nav.Link href="/profile">Profile</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/search">Search</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='/alerts'>Alerts</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='/leaderboards'>
        Leaderboards
      </Nav.Link>
    </Nav.Item>
  </Navbar>
  )
}

export default NavBar;