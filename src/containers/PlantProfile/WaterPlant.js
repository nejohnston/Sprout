import { React, useState } from "react";
import WaterButton from "./images/water_icon.svg";
import Modal from "react-bootstrap/Modal";
import "./styles/PlantProfileSmallButtons.css";

const WaterPlant = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="plant-profile-small-button-container plant-profile-small-button-height-fix">
        <div id="dig-up-button">
          <img src={WaterButton} id="dig-up-icon" onClick={handleShow} alt=""/>
        </div>
        <strong>
          <p className="plant-profile-small-button-text">Water</p>
        </strong>
      </div>

      <Modal show={show} onHide={handleClose} {...props} centered>
        <Modal.Header closeButton>
          <Modal.Title>Water your Sprout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="plant-profile-small-button-container">
            <div id="modal-dig-up-button">
              <img src={WaterButton} id="modal-dig-up-icon" alt=""/>
            </div>
          </div>
          <p>
            You have watered your sprout and earned 10 points. Hurray!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WaterPlant;