// =====================================
//               IMPORTS
// =====================================

// React
import React from 'react';

// Data (temp)
import teamsData from './team.json'
import champions from './champions1.json';

// Components
import TopFive from './TopFive';
import LeaderboardTogglers from './LeaderboardTogglers'

// Styles
import './styles/Leaderboard.css';

// =====================================
//          REACT COMPONENT
// =====================================

/**
 * Return the components of the Leaderboard Page.
 * @returns - the components of the Leaderboard Page.
 */
const LeaderboardPage = () => {

  // Temp teams data
  let teamsDataJson = [];
  teamsDataJson.push(...teamsData);
  // Sort for highest teams
  teamsDataJson.sort((a, b) => parseInt(b["team_points"]) - parseInt(a["team_points"]));
  
  // Temp champions data, should be queried using useState/useEffect
  let championsJSON = [];
  championsJSON.push(...champions);

  return (
    <>
    <div id="leaderboard-top-container">
    <div id="leaderboard-accent-bg"></div>
    <div id="profile-header">
    <h1 id="leaderboard-h1">Leaderboard</h1>
    </div>

    <hr/>
   <LeaderboardTogglers teams={teamsDataJson}/>

   </div>

    <div id="top-five-container">
      <p id="top-five-header">Leading Sprout Gardeners</p>
      <TopFive topfive={championsJSON}/>

      <div id="leaderboard-nav-block"></div>

    </div>

    </>
  );
};

export default LeaderboardPage;
