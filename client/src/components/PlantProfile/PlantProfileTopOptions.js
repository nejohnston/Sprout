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
 * @param {String} image_url - the url where the image of the plant is stored
 * @returns the parent container object for the Plant Profile's top components
 */

const PlantProfileTopOptions = ({ image_url }) => {
  return (
    <>
      <div id="plant-profile-top-container">
        <DigUp />
        <PlantProfilePicture image_url={image_url} />
        <WaterPlant />
      </div>
    </>
  );
};

export default PlantProfileTopOptions;