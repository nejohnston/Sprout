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
 * This component makes a PUT request to the server, which then overwrite's the plant's isWatered data. This is essential for Alerts to be generated correctly.
 *
 * @param {*} props - Bootstrap import
 * @param {object} sprout: an object representing the plant's data
 * @param {state} updateLastWatered: a state passed from the parent object, PlantProfileTopOptions
 * @param {state} waterDiffDays: a state passed from the parent object, PlantProfileTopOptions
 * @returns the water plant component
 */

const WaterPlant = ({ props, sprout, updateLastWatered, waterDiffDays }) => {
  // Context States
  let user = useContext(UserContext)[0];
  let [sprouts, setSprouts] = useContext(SproutContext);

  // Bootstrap modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Predicate function to determine if it is time to water the plant
  const isWaterTime = () => {
    if (waterDiffDays >= sprout.wateringInterval) {
      return true;
    } else {
      return false;
    }
  };

  // Function to handle plant watering
  const wateringPlant = async () => {
    if (!isWaterTime()) {
      // Alert pops up if it's not time to water your plant
      alert("It's not time to water your plant yet!");
    } else {
      // Use Axios to perform PUT request, use session storage to get the approporiate user ID
      await Axios.put(`/plant-profile/${sprout.sproutId}`, {
        userId: window.sessionStorage.getItem("userId"),
      })
        .then((res) => {
          // Reset watering date after watering
          let newLastWateredDate = res.data.user_sprouts_last_watered;

          let newSproutWithLastWatered = {
            ...sprout,
            lastWatered: newLastWateredDate,
          };

          // Find the current sprout in SproutContext and update the sprout Object
          let sproutIndex = sprouts.findIndex(
            ({ sproutId }) => sproutId === sprout.sproutId
          );
          let updatedSprouts = [...sprouts];
          updatedSprouts[sproutIndex] = newSproutWithLastWatered;

          updateLastWatered(newLastWateredDate);
          setSprouts(updatedSprouts);

          // Increment user points from user context on the front end
          user.points = user.points + 10;
        })
        .catch((err) => console.log(err))
        .finally(handleShow());
    }
  };

  return (
    <>
      <div className="plant-profile-small-button-container plant-profile-small-button-height-fix">
        <div id="dig-up-button">
          <img
            src={WaterButton}
            id="dig-up-icon"
            onClick={wateringPlant}
            className="water-button"
            alt=""
          />
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
              <img src={WaterButton} id="modal-dig-up-icon" alt="" />
            </div>
          </div>
          <p>You have watered your sprout and earned 10 points. Hurray!</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WaterPlant;
