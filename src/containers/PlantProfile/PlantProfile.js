// =====================================
//               IMPORTS
// =====================================

// React
import React from "react";
import { Link } from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Styles
import "./styles/PlantProfile.css";

// Data (temp)
import plantprofiledata from "./plant_profile.json";

// Assets
import BackButton from "./images/back_button.svg";

// =====================================
//          REACT COMPONENT
// =====================================

import PlantInfo from './PlantInfo';
import PlantNotes from "./PlantNotes";
import PlantProfileTopOptions from "./PlantProfileTopOptions";
import PlantDateAdded from './PlantDateAdded';
import EditPlant from './EditPlant';

const PlantProfile = () => {

  // Push data to be used as prop
  
  let plantprofilejson = [];
  plantprofilejson.push(...plantprofiledata);

  return (
    <>

    <div id="container">
      <div className="header_backarrow_container">
        <Link to="/profile">
          <img src={BackButton} className="back-button" alt="" />
        </Link>
        <h1 id="plant-profile-h1">{plantprofilejson[0]["user_given_name"]}</h1>
        <EditPlant plant={plantprofilejson[0]}/>
      </div>
      <hr />
      <PlantProfileTopOptions image_url={plantprofilejson[0]["image_url"]} />
      <PlantInfo plant={plantprofilejson[0]}/>
      <PlantDateAdded dateAdded={plantprofilejson[0].date_added}/>
      <PlantNotes plantNotes={plantprofilejson[0].notes}/>

      <div id="plant-profile-nav-block"></div>

    </div>
    </>
  );
};

export default PlantProfile;
