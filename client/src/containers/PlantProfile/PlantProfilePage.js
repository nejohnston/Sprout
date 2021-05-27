// ====================================
//            	IMPORT
// ====================================

// React
import React, { useContext, useState, useEffect } from "react";
import Axios from 'axios';

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
  const [display, setDisplay] = useState(true);

  // Get the user's sprouts
  const [sprouts, setSprouts] = useContext(SproutContext);

  // Retreve the correct sprout information based on the request parameter
  const sproutParam = parseInt(useParams().sproutId);

  const currSprout = () => {
    return sprouts.filter(sprout => sprout.sproutId === sproutParam)[0];
  }

  // Declare state of current sprout
  const [thisSprout, setThisSprout] = useState();

  // Set last watered date
  const [lastWatered, setLastWatered] = useState(null);
  const [diffDays, setDiffDays] = useState();

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

    if (diffInDays === 1) {
      setLastWatered(`yesterday`)
    } else if (diffInDays === 0) {
      setLastWatered(`today`)
    } else if (diffInDays === -1) {
      setLastWatered("N/A")
    } else {
      setLastWatered(`${diffInDays} days ago`)
    }
  }

  useEffect(() => {
    let isMounted = true;
    getSprouts();
    isMounted = false;
    return isMounted;
  }, []);

  useEffect(() => {
    let isMounted = true;
    plantProfile();
    isMounted = false;
    return isMounted;
  }, []);

  useEffect(() => {
    setTimeout(() => setDisplay(false), 1000);
    // setTimeout(() => currSprout(), 500);
    setTimeout(() => getLastWateredDate(thisSprout.lastWatered), 510);
  }, []);

  // Fetch data on mount of the components/page
  // useEffect(() => {
  //   getLastWateredDate(currSprout.lastWatered);
  // }, []);

  const getSprouts = async () => {
    await Axios.post('/get-sprouts', {
      userId: window.sessionStorage.getItem('userId')
    })
    .then(res => {
      console.log(res.data);
      setSprouts(res.data);
    })
  }

  const plantProfile = async () => {
    await Axios.post('/plant-profile-get-this-sprouts', {
      sproutId: sproutParam
    })
  .then(res => {
    console.log(res.data);
    setThisSprout(res.data);
    console.log(thisSprout);
  });
  }

  return (
    <>
    {display === false ? (
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
    ) : null}
    </>
  );
};

export default PlantProfilePage;
