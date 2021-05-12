import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SproutGallery from './SproutGallery';
import ProfilePicture from './ProfilePicture';
import userdata from "./user.json";

const Profile = () => {
  let userjson = []
  userjson.push(...userdata);

  return (
  <>
    <ProfilePicture profilePic={userjson[0]["profile_pic"]}/>
    <SproutGallery sprouts={userjson[0]["sprouts"]}/>
  </>);
};

export default Profile;
