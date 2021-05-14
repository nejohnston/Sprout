import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/PlantProfileTopOptions.css";
import DigUp from "./DigUp";
import WaterPlant from "./WaterPlant";
import PlantProfilePicture from "./PlantProfilePicture";

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
