import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar
    activeKey='/profile'
    fixed='bottom'
  >
    <Nav.Item>
      <Link to="/profile">Profile</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="/search">Search</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/alerts'>Alerts</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/leaderboards'>
        Leaderboards
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/login'>
        Login
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/about-us'>
        About Us
      </Link>
    </Nav.Item>
  </Navbar>
  )
}

export default NavBar;