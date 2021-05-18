import React from 'react';

import './styles/Leaderboard.css';
import TopFive from './TopFive';

import champions from './champions1.json';

const Leaderboard = () => {

  let championsJSON = [];
  championsJSON.push(...champions);

  return (
    <div id="container">
    <div id="leaderboard-accent-bg"></div>
    <div id="profile-header">
    <h1 id="profile-h1">Leaderboard</h1>
    </div>

    <hr/>

    <div id="top-five-container">
      <TopFive topfive={championsJSON}/>

      <div id="about-us-nav-block"></div>
    </div>


  </div>
  );
};

export default Leaderboard;
