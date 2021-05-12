import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import userdata from "./user.json"

const Profile = () => {
  return (
  <div>
    <p>
      This is where components will reside
    </p>
    <p>{userdata["name"]}</p>
  </div>);
};

export default Profile;
