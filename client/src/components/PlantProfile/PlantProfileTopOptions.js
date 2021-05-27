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
 * Return the parent container object for the Plant Profile's top components
 * 
 * Pass the image url prop down into the child Plant Profile Picture component
 * 
 * @param {String} imageUrl - the url where the image of the plant is stored
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
