import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SproutGallery from './SproutGallery';
import ProfilePictureModal from './ProfilePictureModal';
import ProfileModal from './ProfileModal'
import Scorebar from './Scorebar';
import './styles/Profile.css'

const Profile = ({ userContext, userSprouts }) => {
  const user = userContext[0];
  const [sprouts, setSprouts] = useState(user.sprouts)
  return (
  <div id="container">
    <div id="profile-header">
      <h1 id="profile-h1">My Sprouts</h1>
      <ProfileModal 
      user={user} 
      userSprouts={sprouts}
      setSprouts={setSprouts}
      />
    </div>

    <hr />
    
    <div id="my-sprouts-user-container">
    <ProfilePictureModal 
    profilePic={user.profilePic}
    />
    <h5 id="my-sprouts-user-name">{user.name}</h5>
    </div>

    <Scorebar 
    user={user}
    />

    <SproutGallery 
    sprouts={userSprouts}
    />
    <div id="vector-bg"></div>
  </div>);
};

export default Profile;
