import React from "react";
import "./styles/LeaderboardTogglers.css";

const LeaderboardTogglers = ({ teams }) => {
  return (
    <>
      <div id="leaderboard-togglers-container">
        <div className="team-toggler-container" className="leaderboard-team-lower">
          <div className="leaderboard-white-bg">
            <div
              className=""
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${teams[1]["img_url"]})`,
                backgroundRepeat: "no-repeat",
                height: "6rem",
                width: "6rem",
                borderRadius: "100rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="leaderboard-points">
                <p>{teams[1]["team_points"]}</p>
                <p>pts</p>
              </div>
            </div>
          </div>
          <p className="leaderboard-names">{teams[1]["team_name"]}</p>
        </div>

        <div className="team-toggler-container">
          <div className="leaderboard-white-bg" id="leaderboard-white-bg-first">
            <div
              className=""
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${teams[0]["img_url"]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "8rem",
                width: "8rem",
                borderRadius: "100rem",
                display: "flex",
                justifyContent: "center",

              }}
            >
              <div className="leaderboard-points">
                <p>{teams[0]["team_points"]}</p>
                <p>pts</p>
              </div>
            </div>
          </div>
          <p className="leaderboard-names">{teams[0]["team_name"]}</p>
        </div>

        <div className="team-toggler-container" className="leaderboard-team-lower">
          <div className="leaderboard-white-bg">
            <div
              className=""
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${teams[2]["img_url"]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "6rem",
                width: "6rem",
                borderRadius: "100rem",
                display: "flex",
                justifyContent: "center",

              }}
            >
              <div className="leaderboard-points">
                <p>{teams[2]["team_points"]}</p>
                <p>pts</p>
              </div>
            </div>
          </div>
          <p className="leaderboard-names">{teams[2]["team_name"]}</p>
        </div>

      </div>
    </>
  );
};

export default LeaderboardTogglers;
