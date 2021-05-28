// ====================================
//             IMPORT
// ====================================

// React
import React, { useState } from "react";

// Axios
import Axios from "axios";

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// Styling
import "./JoinTeam.css";

// Assets
import soil from "../../config/assets/images/soil.jpg";
import water from "../../config/assets/images/water.jpg";
import sunshine from "../../config/assets/images/sunshine.jpg";


// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Returns the Join Team page, which is itself a component
 *
 * @returns the Join Team page component
 */

const JoinTeam = () => {

  // Form States
  const [chosenPreferredName, setChosenPreferredName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  
  // Post User's chosen name and team number if the fields are filled in
  const submitUserInfo = () => {

    if (selectedTeam === "" && chosenPreferredName === ""){
      alert("Hold on... you didn't fill this in at all! You thought we wouldn't notice? Please try again.")
    } else if (selectedTeam === "") {
      alert("You didn't choose a team! Please choose a team. :)")
    } else if (chosenPreferredName === "") {
      alert("You don't have a name! Please submit a valid preferred name.")
    } else {
      Axios.post('/join-team', {
        preferredName: chosenPreferredName,
        team: selectedTeam
      })
      .then(res => {
        window.location = '/';
      })
    }
  }

  return (
    <div id="container">
      <h1>Almost There!</h1>
      <hr />
      <Form>
        <Form.Group>
          <strong>
            <p id="name-text" className="center-p">Tell us your Preferred Name</p>
          </strong>
          <Form.Control type="text" placeholder="Enter your name..." required 
          defaultValue={chosenPreferredName} onChange={e => setChosenPreferredName(e.target.value)}/>
        </Form.Group>
        <hr />
        <p className="center-p">
          <strong>Join a Sprout team!</strong>
          <br/><span id="team-note">(Choose wisely, this cannot be modified)</span>
        </p>

        <Form.Group controlId="teamSelect" className="teams-form-group">
          <div id="select-teams">
          <input type="radio" id="team-1" name="team" required/>
          <label htmlFor="team-1" onClick={() => setSelectedTeam(1)}>
            <div className="team-pic-bg">
              <img src={soil} alt="" className="team-pic"></img>
            </div>
          </label>
          <strong>
            <p>Soil</p>
          </strong>
          
          <input type="radio" id="team-2" name="team" />
          <label htmlFor="team-2" onClick={() => setSelectedTeam(2)}>
            <div className="team-pic-bg">
              <img src={water} alt="" className="team-pic"></img>
            </div>
          </label>
          <strong>
            <p>Water</p>
          </strong>

          <input type="radio" id="team-3" name="team" />
          <label htmlFor="team-3" onClick={() => setSelectedTeam(3)}>
            <div className="team-pic-bg">
              <img src={sunshine} alt="" className="team-pic"></img>
            </div>
          </label>
          <strong>
            <p>Sun</p>
          </strong>
          </div>

        </Form.Group>

        <div id="teams">


        </div>
      <div id="submitUser-btn">
        <Button

          variant="primary"
          type="button"
          className="custom-primary-button"
          onClick={submitUserInfo}
        >
          Confirm
        </Button>
        </div>

      </Form> 
      <div id="vector-bg"></div>
    </div>
  );
};

export default JoinTeam;
