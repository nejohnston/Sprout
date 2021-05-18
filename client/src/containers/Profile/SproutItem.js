/* React Imports */
import React from "react";
import { Link } from "react-router-dom";

/* Style Imports */
import './styles/SproutItem.css'
import "bootstrap/dist/css/bootstrap.min.css";


/**Return the plant gallery of the user's sprouts
 * 
 * @param {*} sprouts - an array of sprout objects belonging to a user
 * @returns - plant gallery component with each sprout rendered as it's own individual component
 */
const PlantGallery = ({sprouts}) => {
  return sprouts.map((sprout) => (


    <div className="plant-list-item" key={sprout.id}>
      <Link to="/plant-profile">
      <img src={sprout.image_url} className="plant-list-img" alt="plant"/>
      </Link>
      <div className="plant-list-name-div">
      <strong><p className="plant-list-name">{sprout.name}</p></strong>
      </div>
    </div>
    

  ));
};

export default PlantGallery;
