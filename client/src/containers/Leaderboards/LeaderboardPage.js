// =====================================
//               IMPORT
// =====================================

// React
import React, { useState, useEffect } from "react";
import Axios from "axios";

// Data for placeholders
import teamsData from "./team.json";

// Components
import TopFive from "../../components/Leaderboard/TopFive";
import LeaderboardTogglers from "../../components/Leaderboard/LeaderboardTogglers";

// Styles
import "./Leaderboard.css";

// =====================================
//          REACT COMPONENT
// =====================================

/**
 * Return the components of the Leaderboard Page.
 * @returns - the components of the Leaderboard Page.
 */
const LeaderboardPage = () => {

  // States for the page
  const [topFiveUsers, setTopFiveUsers] = useState([]);
  const [teamPoints, setTeamPoints] = useState(teamsData); // requires placeholder teamsData to prevent undefined errors

  // Fetch data on mount of the components/page
  useEffect(() => {
    getTeamPoints();
    getTopFiveUsers();
  }, []);

  // Fetch top five users
  const getTopFiveUsers = async () => {
    await Axios.get("/leaderboards-topFive")
    .then((res) => {
      setTopFiveUsers(res.data)
    });
  };

  // Fetch team points
  const getTeamPoints = async () => {
    await Axios.get("/leaderboards-team-points")
    .then((res) => {
      setTeamPoints(res.data)
    });
  }

  // Sort for highest teams among team points in order
  teamPoints.sort(
    (a, b) => parseInt(b["team_points"]) - parseInt(a["team_points"])
  );
  
  return (
    <>
      <div id="leaderboard-top-container">
        <div id="leaderboard-accent-bg"></div>
        <div id="profile-header">
          <h1 id="leaderboard-h1">Leaderboard</h1>
        </div>

        <hr />
        <LeaderboardTogglers teams={teamPoints} />
      </div>

      <div id="top-five-container">
        <p id="top-five-header">Leading Sprout Gardeners</p>
        <TopFive topfive={topFiveUsers} />

        <div id="leaderboard-nav-block"></div>
      </div>
    </>
  );
};

export default LeaderboardPage;
