// =====================================
//               IMPORTS
// =====================================

// React
import React from "react";
import { Link } from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Styles
import './styles/SproutItem.css'

/**Return the plant gallery of the user's sprouts
 * 
 * @param {object} sprout - an object representing the plant's data
 * @returns - plant gallery component with each sprout rendered as its own individual component
 */

// ====================================
//          REACT COMPONENT
// ====================================

const SproutItem = ({sprout}) => {
  return (
    <div className="plant-list-item" key={sprout["sproutId"]}>
      <Link to={`/plant-profile/${sprout["sproutId"]}`}>
      <img src={sprout["imageUrl"]} className="plant-list-img" alt="plant"/>
      </Link>
      <div className="plant-list-name-div">
      <strong><p className="plant-list-name">{sprout.name}</p></strong>
      </div>
    </div>
    )
};

export default SproutItem;
