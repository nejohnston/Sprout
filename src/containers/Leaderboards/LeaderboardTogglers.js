import React from "react";
import "./styles/LeaderboardTogglers.css";

const LeaderboardTogglers = ({ teams }) => {
  return (
    <>
      <div id="leaderboard-togglers-container">
        <div
          className="team-toggler-container"
          className="leaderboard-team-lower"
        >
          <div className="leaderboard-team-bg">
            <img src={teams[1]["img_url"]} className="leaderboard-team-image" />
          </div>
          <div className="leaderboard-togglers-points">
            <p>{teams[1]["team_points"]}</p>
            <p>pts</p>
          </div>
          <p className="leaderboard-names">{teams[1]["team_name"]}</p>
        </div>
        <div className="team-toggler-container">
          <div className="leaderboard-team-bg" id="leaderboard-first">
            <img src={teams[0]["img_url"]} className="leaderboard-team-image" />
          </div>
          <div className="leaderboard-togglers-points-first">
            <p>{teams[0]["team_points"]}</p>
            <p>pts</p>
          </div>
          <p className="leaderboard-names">{teams[0]["team_name"]}</p>
        </div>
        <div
          className="team-toggler-container"
          className="leaderboard-team-lower"
        >
          <div className="leaderboard-team-bg">
            <img src={teams[2]["img_url"]} className="leaderboard-team-image" />
          </div>
          <div className="leaderboard-togglers-points">
            <p>{teams[2]["team_points"]}</p>
            <p>pts</p>
          </div>
          <p className="leaderboard-names">{teams[2]["team_name"]}</p>
        </div>
      </div>
    </>
  );
};

export default LeaderboardTogglers;
