import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/PlantProfile.css";
import plantprofiledata from "./plant_profile.json";
import BackButton from "./images/back_button.svg";
import EditButton from "./images/pen.svg";
import { Link } from "react-router-dom";
import DigUp from "./DigUp";
import WaterPlant from "./WaterPlant";
import PlantNotes from './PlantNotes';

const PlantProfile = () => {
  let plantprofilejson = [];
  plantprofilejson.push(...plantprofiledata);

  return (
    <div id="container">
      <div className="header_backarrow_container">
        <Link to="/profile">
          <img src={BackButton} className="back-button" />
        </Link>
        <h1 id="plant-profile-h1">{plantprofilejson[0]["user_given_name"]}</h1>
        <img src={EditButton} id="edit-button" />
      </div>
      <hr />
      <DigUp />
      <WaterPlant />
      <PlantNotes plantNotes={plantprofilejson[0].notes}/>
    </div>
  );
};

export default PlantProfile;
