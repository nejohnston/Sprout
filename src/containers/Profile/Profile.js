import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SproutGallery from './SproutGallery'
import userdata from "./user.json"

const Profile = () => {
  let userjson = []
  userjson.push(...userdata);

  return (
  <>
    <SproutGallery sprouts={userjson[0]["sprouts"]}/>
  </>);
};

export default Profile;
