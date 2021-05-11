import React from 'react';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import './JoinTeam.css'
import team1 from './images/team1.svg';
import team2 from './images/team2.svg';
import team3 from './images/team3.svg';

const JoinTeam = () => {
  return (
  <div id="container">
    <h1>Choose Your Team!</h1>
    <hr />
    <Form.Group>
      <strong><p id="name-text">Your Name</p></strong>
      <Form.Control type="text" placeholder="Enter your name..." />
    </Form.Group>
    <hr />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div id="teams">
      <div className="team-info">
        <div className="team-block">
          <div className="team-pic-bg">
            <img src={team1} alt="" className="team-pic"></img>
          </div>
          <strong><p>Team 1</p></strong>
        </div>
        <div className="team-block">
          <div className="team-pic-bg">
            <img src={team2} alt="" className="team-pic"></img>
          </div>
          <strong><p>Team 2</p></strong>
        </div>
        <div className="team-block">
          <div className="team-pic-bg">
            <img src={team3} alt="" className="team-pic"></img>
          </div>
          <strong><p>Team 3</p></strong>
        </div>
      </div>

    </div>
    <div id="vector-bg"></div>
  </div>);
};

export default JoinTeam;
