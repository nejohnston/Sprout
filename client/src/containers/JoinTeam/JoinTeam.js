// ====================================
//            REACT IMPORTS
// ====================================
import React from "react";
import { Link } from "react-router-dom";

// ====================================
//          BOOTSTRAP IMPORTS
// ====================================
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

// ====================================
//         STYLESHEET IMPORTS
// ====================================
import "./JoinTeam.css";

// ====================================
//          ASSET IMPORTS
// ====================================
import team1 from "../../config/assets/icons/team1.svg";
import team2 from "../../config/assets/icons/team2.svg";
import team3 from "../../config/assets/icons/team3.svg";

/**
 * Returns the Join Team page, which is itself a component
 *
 * @returns the Join Team page component
 */

const JoinTeam = () => {
  return (
    <div id="container">
      <h1>Choose Your Team!</h1>
      <hr />
      <Form.Group>
        <strong>
          <p id="name-text">Your Preferred Name</p>
        </strong>
        <Form.Control type="text" placeholder="Enter your name..." />
      </Form.Group>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div id="teams">
        <div className="team-info">
          <div className="team-block">
            <div className="team-pic-bg">
              <Link to="/profile">
                <img src={team1} alt="" className="team-pic"></img>
              </Link>
            </div>
            <strong>
              <p>Team 1</p>
            </strong>
          </div>
          <div className="team-block">
            <div className="team-pic-bg">
              <Link to="/profile">
                <img src={team2} alt="" className="team-pic"></img>
              </Link>
            </div>
            <strong>
              <p>Team 2</p>
            </strong>
          </div>
          <div className="team-block">
            <div className="team-pic-bg">
              <Link to="/profile">
                <img src={team3} alt="" className="team-pic"></img>
              </Link>
            </div>
            <strong>
              <p>Team 3</p>
            </strong>
          </div>
        </div>
      </div>
      <div id="vector-bg"></div>
    </div>
  );
};

export default JoinTeam;
