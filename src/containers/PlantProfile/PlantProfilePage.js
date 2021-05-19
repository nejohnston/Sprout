// ====================================
//            	IMPORT
// ====================================

// React
import React from "react";

// Components
import { Link } from "react-router-dom";
import PlantInfo from '../../components/PlantProfile/PlantInfo';
import PlantNotes from "../../components/PlantProfile/PlantNotes";
import PlantProfileTopOptions from "../../components/PlantProfile/PlantProfileTopOptions";
import PlantDateAdded from '../../components/PlantProfile/PlantDateAdded';
import EditPlant from '../../components/PlantProfile/EditPlant';

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlantProfile.css";

// Assets
import BackButton from "../../config/assets/icons/back_button.svg";

// Data (temp)
import plantprofiledata from "./plant_profile.json";


// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the components of the Plant Profile Page.
 * @returns - the components of the Plant Profile Page.
 */
const PlantProfilePage = () => {

  // Prepare plant data
  let plantprofilejson = [];
  plantprofilejson.push(...plantprofiledata);

  return (
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
  );
};

export default PlantProfilePage;
