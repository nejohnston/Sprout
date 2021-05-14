import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import SproutsIcon from "./images/my-sprouts_icon.svg";
import SearchIcon from "./images/search_icon.svg";
import AlertsIcon from "./images/alerts_icon.svg";
import LeaderboardsIcon from "./images/leaderboard_icon.svg";
import "./styles.css";

const NavBar = () => {
  return (
    <Navbar activeKey="/profile" fixed="bottom" id="bottom-nav">
      <Nav.Item>
        <Link to="/profile" className="bottom-nav-link">
          <img src={SproutsIcon} className="bottom-nav-icon" alt=""/>
          <p>My Sprouts</p>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/search" className="bottom-nav-link">
          <img src={SearchIcon} className="bottom-nav-icon" alt=""/>
          <p>Search</p>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/alerts" className="bottom-nav-link">
          <img src={AlertsIcon} className="bottom-nav-icon" alt=""/>
          <p>Alerts</p>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/leaderboards" className="bottom-nav-link">
          <img src={LeaderboardsIcon} className="bottom-nav-icon" alt=""/>
          <p>Leaderboards</p>
        </Link>
      </Nav.Item>
    </Navbar>
  );
};

export default NavBar;
