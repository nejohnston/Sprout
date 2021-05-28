// =====================================
//               IMPORT
// =====================================

// React
import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Styling
import "./styles/PlantProfileTopOptions.css";

// Components
import DigUp from "./DigUp";
import WaterPlant from "./WaterPlant";
import PlantProfilePicture from "./PlantProfilePicture";



// =====================================
//          REACT COMPONENT
// =====================================

/**
 * Return the parent container object for the Plant Profile's top components: dig up, plant profile picture, and water plant.
 * 
 * @param {object} sprout: an object representing the plant's data
 * @param {state} updateLastWatered: a state passed from the parent object, Profile Picture
 * @param {state} waterDiffDays: a state passed from the parent object, Profile Picture
 * @returns the parent container object for the Plant Profile's top components
 */

 const PlantProfileTopOptions = ({ sprout, updateLastWatered, waterDiffDays }) => {

  return (
    <>
      <div id="plant-profile-top-container">
        <DigUp sprout={sprout}/>
        <PlantProfilePicture imageUrl={sprout.imageUrl} />
        <WaterPlant sprout={sprout} updateLastWatered={updateLastWatered} waterDiffDays={waterDiffDays}/>
      </div>
    </>
  );
};

export default PlantProfileTopOptions;