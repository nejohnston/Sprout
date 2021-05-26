// =====================================
//               IMPORT
// =====================================

// React
import { React, useState } from "react";
import Axios from "axios";

// Assets
import WaterButton from "../../config/assets/icons/water_icon.svg";

// Bootstrap
import Modal from "react-bootstrap/Modal";

// Styling
import "./styles/PlantProfileSmallButtons.css";



// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return a component with modal popup which is triggered by the Water button
 * 
 * @param {*} props - Bootstrap import
 * @returns Water component
 */

const WaterPlant = ({ props, sproutId }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const wateringPlant = async () => {
    await Axios.put(`/plant-profile/${sproutId}`, {
      userId: window.sessionStorage.getItem('userId')
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(handleShow());
  }

  return (
    <>
      <div className="plant-profile-small-button-container plant-profile-small-button-height-fix">
        <div id="dig-up-button">
          <img src={WaterButton} id="dig-up-icon" onClick={wateringPlant} alt=""/>
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