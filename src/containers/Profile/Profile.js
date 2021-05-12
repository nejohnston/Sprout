import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SproutGallery from './SproutGallery';
import ProfilePicture from './ProfilePicture';
import ProfileModal from './ProfileModal'
import ScoreBar from './ScoreBar.js';
import userdata from "./user.json";
import './styles/Profile.css'

const Profile = () => {
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
    <ProfilePicture profilePic={userjson[0]["profile_pic"]}/>
    <h5 id="my-sprouts-user-name">{userjson[0]["name"]}</h5>
    </div>

    <ScoreBar user={userjson[0]}/>

    <SproutGallery sprouts={userjson[0]["sprouts"]}/>
    <div id="vector-bg"></div>
  </div>);
};

export default Profile;
