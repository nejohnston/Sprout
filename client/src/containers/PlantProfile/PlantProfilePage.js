// ====================================
//            	IMPORT
// ====================================

// React
import React, { useContext, useState, useEffect } from "react";

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

// Sprout and User Context from Layout.js Provider
import { SproutContext } from "../../components/Layout/Layout";


// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the components of the Plant Profile Page.
 * @returns - the components of the Plant Profile Page.
 */
const PlantProfilePage = () => {

  // Get the user's sprouts
  let sprouts = useContext(SproutContext)[0];

  // Retreve the correct sprout information based on the request parameter
  let sproutParam = parseInt(useParams().sproutId);
  let currSprout = sprouts.filter(sprout => sprout.sproutId === sproutParam)[0];

  // Declare state of current sprout
  const [thisSprout, setThisSprout] = useState(currSprout);

  // Set last watered date
  const [lastWatered, setLastWatered] = useState(null);
  const [diffDays, setDiffDays] = useState();

  // Fetch data on mount of the components/page
  useEffect(() => {
    getLastWateredDate(currSprout.lastWatered);
  }, []);


  // Calculate the different in days from last watered to current date
  let getDiffDay = date => {
    if (!date) {
      return -1;
    } else {
      // Code snippet below adapted from Abhilash Kakumanu, Stack Abuse 
      //https://stackabuse.com/javascript-get-number-of-days-between-dates/
      
      let today = new Date();
      let lastWateredDate = new Date(date);

      // One day in milliseconds
      const oneDay = 1000 * 60 * 60 * 24;

      // Calculating the time difference between two dates
      const diffInTime = today.getTime() - lastWateredDate.getTime();

      // Calculating the no. of days between two dates
      const diffInDays = Math.round(diffInTime / oneDay);

      return diffInDays;
    }
  }

  // Get last watered and set the last watered date
  let getLastWateredDate = date => {

    let diffInDays = getDiffDay(date);
    setDiffDays(diffInDays);

    if (diffInDays === 1 || diffInDays === 0) {
      setLastWatered(`recently`)
    } else if (diffInDays === -1) {
      setLastWatered("N/A")
    } else {
      setLastWatered(`${diffInDays} days ago`)
    }
  }

  return (
    <div id="container">
      <div className="header_backarrow_container">
        <Link to="/profile">
          <img src={BackButton} className="back-button" alt="" />
        </Link>
        <h1 id="plant-profile-h1">{thisSprout["name"]}</h1>
        <EditPlant sprout={thisSprout} updateSproutPage={setThisSprout}/>
      </div>
      <hr />
      <PlantProfileTopOptions sprout={thisSprout} updateLastWatered={getLastWateredDate} waterDiffDays={diffDays}/>
      <PlantInfo plant={thisSprout} wateredDate={lastWatered}/>
      <PlantDateAdded dateAdded={thisSprout["dateAdded"].substring(0, 10)}/>
      <PlantNotes plantNotes={thisSprout["notes"]}/>

      <div id="plant-profile-nav-block"></div>

    </div>
  );
};

export default PlantProfilePage;