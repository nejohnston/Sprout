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
import PlantInfo from './PlantInfo';
import PlantProfilePicture from './PlantProfilePicture';

const PlantProfile = () => {
  let plantprofilejson = [];
  plantprofilejson.push(...plantprofiledata);

  return (
    <div id="container">
      <div className="header_backarrow_container">
        <Link to="/profile">
          <img src={BackButton} className="back-button" alt=""/>
        </Link>
        <h1 id="plant-profile-h1">{plantprofilejson[0]["user_given_name"]}</h1>
        <img src={EditButton} id="edit-button" alt=""/>
      </div>
      <hr />
      <DigUp />
      <PlantProfilePicture image_url={plantprofilejson[0]["image_url"]}/>
      <WaterPlant />
      <PlantInfo plant={plantprofilejson[0]}/>
      <PlantNotes plantNotes={plantprofilejson[0].notes}/>
    </div>
  );
};

export default PlantProfile;
