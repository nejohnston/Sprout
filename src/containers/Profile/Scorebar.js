import React from 'react';
import "./styles/Scorebar.css";
import "bootstrap/dist/css/bootstrap.min.css";

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