// ====================================
//            	 IMPORT
// ====================================

// React
import React, {useState} from 'react';

// Components
import SproutGallery from '../../components/Profile/SproutGallery';
import ProfilePictureModal from '../../components/Profile/ProfilePictureModal';
import Scorebar from '../../components/Profile/Scorebar';
import AddPlantModal from '../../components/Modals/AddPlantModal'

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import './Profile.css'

// Data (temp)
import userdata from "./user.json";

// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the Profile Page components.
 * @returns - components of Profile Page.
 */
const ProfilePage = ({ userContext, userSprouts }) => {
  const [user, setUser] = userContext;
  const [sprouts, setSprouts] = userSprouts;
  console.log(sprouts)
  // Set up user data
  let userjson = []
  userjson.push(...userdata);

  return (
  <div id="container">
    <div id="profile-header">
      <h1 id="profile-h1">My Sprouts</h1>
      <AddPlantModal 
      user={user} 
      userSprouts={sprouts}
      setSprouts={setSprouts}
      />
    </div>

    <hr />
    
    <div id="my-sprouts-user-container">
      <ProfilePictureModal profilePic={user.profilePic}/>
      <h5 id="my-sprouts-user-name">{user.name}</h5>
    </div>

    <Scorebar user={user}/>

    <SproutGallery sprouts={sprouts}/>
    <div id="vector-bg"></div>
  </div>);
};

export default ProfilePage;
