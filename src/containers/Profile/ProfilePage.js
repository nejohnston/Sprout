// ====================================
//            	 IMPORT
// ====================================

// React
import React from 'react';

// Components
import SproutGallery from './SproutGallery';
import ProfilePictureModal from './ProfilePictureModal';
import ProfileModal from './ProfileModal'
import Scorebar from './Scorebar';

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/Profile.css'

// Data (temp)
import userdata from "./user.json";

// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the Profile Page components.
 * @returns - components of Profile Page.
 */
const ProfilePage = () => {

  // Set up user data
  let userjson = []
  userjson.push(...userdata);

  return (
  <div id="container">
    <div id="profile-header">
      <h1 id="profile-h1">My Sprouts</h1>
      <ProfileModal />
    </div>

    <hr />
    
    <div id="my-sprouts-user-container">
      <ProfilePictureModal profilePic={userjson[0]["profile_pic"]}/>
      <h5 id="my-sprouts-user-name">{userjson[0]["name"]}</h5>
    </div>

    <Scorebar user={userjson[0]}/>

    <SproutGallery sprouts={userjson[0]["sprouts"]}/>
    <div id="vector-bg"></div>
  </div>);
};

export default ProfilePage;
