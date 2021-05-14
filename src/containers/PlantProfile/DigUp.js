import { React, useState } from "react";
import DigUpButton from "./images/dig_up.svg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./styles/PlantProfileSmallButtons.css";

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
          <Button
            variant="primary"
            onClick={handleClose}
            className="custom-primary-button"
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DigUp;
