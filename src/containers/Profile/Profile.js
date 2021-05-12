import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SproutItem from './SproutItem'
import userdata from "./user.json"

const Profile = () => {
  let myarr = []
  myarr.push(...userdata);

  return (
  <div>
    <p>
      This is where components will reside
    </p>
    <SproutItem sprouts={myarr[0]["sprouts"]}/>
  </div>);
};

export default Profile;
