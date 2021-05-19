// =====================================
//               IMPORTS
// =====================================

// React
import { React, useState } from "react";
import { Link } from "react-router-dom";

// Assets
import DigUpButton from "./images/dig_up.svg";

// Bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Styles
import "./styles/PlantProfileSmallButtons.css";

/**
 * Return a component with modal popup which is triggered by the Dig Up button
 * 
 * @param {*} props - Bootstrap import
 * @returns Dig Up component
 */

const DigUp = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="plant-profile-small-button-container plant-profile-small-button-height-fix">
        <div id="dig-up-button">
          <img src={DigUpButton} id="dig-up-icon" alt="" onClick={handleShow} />
        </div>
        <strong>
          <p className="plant-profile-small-button-text">Dig Up</p>
        </strong>
      </div>

      <Modal show={show} onHide={handleClose} {...props} centered>
        <Modal.Header closeButton>
          <Modal.Title>Dig up your Sprout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="plant-profile-small-button-container">
            <div id="modal-dig-up-button">
              <img src={DigUpButton} id="modal-dig-up-icon" alt=""/>
            </div>
          </div>
          <p>
            Do you want to dig up your sprout? It will be removed from your
            garden.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/profile">
          <Button
            variant="primary"
            onClick={handleClose}
            className="custom-primary-button"
          >
            Confirm
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DigUp;
