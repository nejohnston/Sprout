// =====================================
//               IMPORT
// =====================================

// React
import { React, useState, useContext } from "react";
import Axios from "axios";

// Assets
import WaterButton from "../../config/assets/icons/water_icon.svg";

// Bootstrap
import Modal from "react-bootstrap/Modal";

// Styling
import "./styles/PlantProfileSmallButtons.css";

// Sprout and User Context from Layout.js Provider
import { SproutContext, UserContext } from "../../components/Layout/Layout";

// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return a component with modal popup which is triggered by the Water button
 * 
 * @param {*} props - Bootstrap import
 * @returns Water component
 */

const WaterPlant = ({ props, sprout, updateLastWatered, waterDiffDays }) => {

  // Context States
  let user = useContext(UserContext)[0];
  let [sprouts, setSprouts] = useContext(SproutContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isWaterTime = () => {
    if (waterDiffDays === -1 || waterDiffDays >= sprout.wateringInterval) {
      return true;
    } else {
      return false;
    }
  }

  console.log(isWaterTime())
  
  const wateringPlant = async () => {

    if (!isWaterTime()) {
      alert("It's not time to water your plant yet!")
    } else {
      await Axios.put(`/plant-profile/${sprout.sproutId}`, {
        userId: window.sessionStorage.getItem('userId')
      })
      .then(res => {

        let newLastWateredDate = res.data.user_sprouts_last_watered;
  
        let newSproutWithLastWatered = {...sprout,
          lastWatered: newLastWateredDate
        };
  
        // Find the current sprout in SproutContext and update the sprout Object
        let sproutIndex = sprouts.findIndex(
          ({ sproutId }) => sproutId === sprout.sproutId
        );
        let updatedSprouts = [...sprouts];
        updatedSprouts[sproutIndex] = newSproutWithLastWatered;
  
        updateLastWatered(newLastWateredDate);
        setSprouts(updatedSprouts);
        user.points = user.points + 10;
      })
      .catch(err => console.log(err))
      .finally(handleShow());
    }
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