import React from 'react';
import './styles/ProfilePicture.css'
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePicture = ({profilePic}) => {
  return (
  <>
    <img id="user-profile-picture" class="shadow-sm" src={profilePic} alt="user image"/>
  </>);
};

export default ProfilePicture;