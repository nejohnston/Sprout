 // =====================================
//               IMPORT
// =====================================

// React
import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";

// Assets
import DigUpButton from "../../config/assets/icons/dig_up.svg";

// Bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Styles
import "./styles/PlantProfileSmallButtons.css";

// Other Imports
import { SproutContext, UserContext } from "../Layout/Layout";

/**
 * Return a component with modal popup which is triggered by the Dig Up button
 * 
 * This button deletes a sprout from the database and removes it from the sprout context as well.
 * 
 * @param {*} props - Bootstrap import
 * @param {object} sprout - an object containing the sprout's data.
 * @returns Dig Up component
 */

// ====================================
//          REACT COMPONENT
// ====================================

const DigUp = ( {sprout}, props) => {

  // Bootstrap modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [sprouts, setSprouts] = useContext(SproutContext);
  const user = useContext(UserContext)[0];

  // Remove the sprout from sprout context
  const removeSproutFromContext = (sproutId) => {
    for (let index = 0; index < sprouts.length; index++) {
      if (sproutId === sprouts[index].sproutId) {
        sprouts.splice(index, 1);
      }
    }
    setSprouts(sprouts);
  }

  // Fetch request to server to delete sprout from database
  const handleSubmit = () => {
    fetch(`/api/sprouts/${user.userId}/${sprout.sproutId}`, {
      method: "DELETE"
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
    removeSproutFromContext(sprout.sproutId)
  }

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
            onClick={handleSubmit}
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
