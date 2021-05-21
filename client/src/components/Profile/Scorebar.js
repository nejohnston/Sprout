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
 * @param {Object} user - an object containing user information.
 * @returns - the scorebar component with the user's points and total number of sprouts.
 */

const Scorebar = ({user}) => {
  return (
  <div id="my-sprouts-score-bar" className="shadow-sm">
    <div className="my-sprouts-score-bar-item">
    <span className="my-score-bar-item-value">{user.points}</span>
    <span className="my-score-bar-item-title">Points</span>
    </div>

    <div className="my-sprouts-score-bar-item">
    <span className="my-score-bar-item-value">{user.sprouts.length}</span>
    <span className="my-score-bar-item-title">Sprouts</span>
    </div>
  </div>);
};

export default Scorebar;