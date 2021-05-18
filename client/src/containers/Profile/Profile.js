import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SproutGallery from './SproutGallery';
import ProfilePictureModal from './ProfilePictureModal';
import ProfileModal from './ProfileModal'
import Scorebar from './Scorebar';
import userdata from "./user.json";
import './styles/Profile.css'

const Profile = ({userData}) => {
  let userjson = []
  userjson.push(...userdata);
  const user = userData[0];
  return (
  <div id="container">
    <div id="profile-header">
      <h1 id="profile-h1">My Sprouts</h1>
      <ProfileModal />
    </div>

    <hr />
    
    <div id="my-sprouts-user-container">
    <ProfilePictureModal profilePic={user.profilePic}/>
    <h5 id="my-sprouts-user-name">{user.name}</h5>
    </div>

    <Scorebar user={user}/>

    <SproutGallery sprouts={user.sprouts}/>
    <div id="vector-bg"></div>
  </div>);
};

export default Profile;
