// ====================================
//            	IMPORT
// ====================================

// React
import React from 'react';

// Styles
import "./styles/Scorebar.css";
import "bootstrap/dist/css/bootstrap.min.css";


// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the scorebar component with user information.
 * @param {Integer} points- an integer representing the amount of points a user has.
 * @returns - the scorebar component with the user's points and total number of sprouts.
 */

const Scorebar = ({points, sprouts}) => {
  return (
  <div id="my-sprouts-score-bar" className="shadow-sm">
    <div className="my-sprouts-score-bar-item">
    <span className="my-score-bar-item-value">{points}</span>
    <span className="my-score-bar-item-title">Points</span>
    </div>

    <div className="my-sprouts-score-bar-item">
    <span className="my-score-bar-item-value">{sprouts.length}</span>
    <span className="my-score-bar-item-title">Sprouts</span>
    </div>
  </div>);
};

export default Scorebar;