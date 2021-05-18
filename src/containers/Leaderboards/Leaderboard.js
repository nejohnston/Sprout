import React from 'react';
import teamsData from './team.json'
import champions from './champions1.json';
import './styles/Leaderboard.css';
import './styles/Leaderboard.css';
import TopFive from './TopFive';
import LeaderboardTogglers from './LeaderboardTogglers'

const Leaderboard = () => {
  let teamsDataJson = [];
  teamsDataJson.push(...teamsData);
  teamsDataJson.sort((a, b) => parseInt(b["team_points"]) - parseInt(a["team_points"]));
  let championsJSON = [];
  championsJSON.push(...champions);

  return (

    <div id="container">
    <div id="leaderboard-accent-bg"></div>
    <div id="profile-header">
    <h1 id="profile-h1">Leaderboard</h1>
    </div>

    <hr/>
   <LeaderboardTogglers teams={teamsDataJson}/>
    <div id="top-five-container">
      <TopFive topfive={championsJSON}/>

      <div id="about-us-nav-block"></div>
    </div>


  </div>
  );
};

export default Leaderboard;
