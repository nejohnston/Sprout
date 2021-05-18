import React from 'react';
import teamsData from './team.json'
import './styles/Leaderboard.css';
import LeaderboardTogglers from './LeaderboardTogglers'

const Leaderboard = () => {
  let teamsDataJson = [];
  teamsDataJson.push(...teamsData);
  teamsDataJson.sort((a, b) => parseInt(b["team_points"]) - parseInt(a["team_points"]));
  console.log(teamsDataJson);
  return (

    <div id="container">
    <div id="leaderboard-accent-bg"></div>
    <div id="profile-header">
    <h1 id="profile-h1">Leaderboard</h1>
  </div>

  <hr/>

    <LeaderboardTogglers teams={teamsDataJson}/>

  </div>
  );
};

export default Leaderboard;
