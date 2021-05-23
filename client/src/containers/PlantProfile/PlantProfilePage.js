// ====================================
//            	IMPORT
// ====================================

// React
import React, { useContext }from "react";

// Components
import { Link, useParams } from "react-router-dom";
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

// Sprout and User Context from Layout.js Provider
import { SproutContext, UserContext } from "../../components/Layout/Layout";


// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the components of the Plant Profile Page.
 * @returns - the components of the Plant Profile Page.
 */
const PlantProfilePage = () => {

  // Get the user's sprouts
  const [sprouts, setSprouts] = useContext(SproutContext);

  // Prepare plant data
  let plantprofilejson = [];
  plantprofilejson.push(...plantprofiledata);

  // Retreve the correct sprout information based on the request parameter
  let sproutParam = parseInt(useParams().sproutId);
  let thisSprout = sprouts.filter(sprout => sprout.sproutId === sproutParam)[0];

  return (
    <div id="container">
      <div className="header_backarrow_container">
        <Link to="/profile">
          <img src={BackButton} className="back-button" alt="" />
        </Link>
        <h1 id="plant-profile-h1">{thisSprout["name"]}</h1>
        <EditPlant plant={thisSprout}/>
      </div>
      <hr />
      <PlantProfileTopOptions image_url={thisSprout["image_url"]} />
      <PlantInfo plant={thisSprout}/>
      <PlantDateAdded dateAdded={thisSprout["dateAdded"]}/>
      <PlantNotes plantNotes={thisSprout["notes"]}/>

      <div id="plant-profile-nav-block"></div>

    </div>
  );
};

export default PlantProfilePage;
