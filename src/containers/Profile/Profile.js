import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SproutGallery from './SproutGallery';
import ProfilePicture from './ProfilePicture';
import userdata from "./user.json";
import addButton from './images/addbutton.svg'
import './styles/Profile.css'

const Profile = () => {
  let userjson = []
  userjson.push(...userdata);

  return (
  <div id="container">
    <div id="profile-header">
      <h1 id="profile-h1">My Sprouts</h1>
      <img src={addButton} id="profile-add-button"/>
    </div>
    <hr />
    <div id="my-sprouts-user-container">
    <ProfilePicture profilePic={userjson[0]["profile_pic"]}/>
    <h5 id="my-sprouts-user-name">{userjson[0]["name"]}</h5>
    </div>
    <SproutGallery sprouts={userjson[0]["sprouts"]}/>
    <div id="vector-bg"></div>
  </div>);
};

export default Profile;
