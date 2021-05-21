// ====================================
//            	 IMPORT
// ====================================

// React
import React, { useState, useContext, useEffect } from "react";

// Components
import SproutGallery from "../../components/Profile/SproutGallery";
import ProfilePictureModal from "../../components/Profile/ProfilePictureModal";
import Scorebar from "../../components/Profile/Scorebar";
import AddPlantModal from "../../components/Modals/AddPlantModal";

// Sprout Context from Layout.js Provider
import { SproutContext, UserContext } from "../../components/Layout/Layout";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";

// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the Profile Page components.
 * @returns - components of Profile Page.
 */
const ProfilePage = ({ userContext }) => {
  
  const [user, setUser] = useContext(UserContext);
  const [sprouts, setSprouts] = useContext(SproutContext);
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setTimeout(() => setDisplay(false), 1000); //after 2 seconds the state will be switched to false
  }, []);
  

  return (
    <>
    {display === false ?(
    <div id="container">
      <div id="profile-header">
        <h1 id="profile-h1">My Sprouts</h1>
        <AddPlantModal />
      </div>

      <hr />

      <div id="my-sprouts-user-container">
        <ProfilePictureModal profilePic={user.profilePicture} />
        <h5 id="my-sprouts-user-name">{user.name}</h5>
      </div>

      <Scorebar user={user} />

      <SproutGallery sprouts={sprouts} />
      <div id="vector-bg"></div>
    </div>): (
        null
      )}
    </>
  );
};

export default ProfilePage;
