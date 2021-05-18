// Importing React
import React from "react";

// Importing stylesheet
import "./styles/LeaderboardTogglers.css";

const LeaderboardTogglers = ({ teams }) => {
  // All the styles are inline because they have to accept a prop as a background image url, and there is no way to pass this directly into an external stylesheet. Furthermore, as they need the prop passed in, they also can't be defined at the top of the page above this rendering component. The only way to style was to do it inline.

  //Based on the team with the most points, the positions will change, which is why all 3 of the components accept props.

  return (
    <>
      <div id="leaderboard-togglers-container">
        <div
          className="team-toggler-container"
          className="leaderboard-team-lower"
        >
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
                <p style={{ fontSize: "1.25rem" }}>{teams[0]["team_points"]}</p>
                <p>pts</p>
              </div>
            </div>
          </div>
          <p className="leaderboard-names">{teams[0]["team_name"]}</p>
        </div>

        <div
          className="team-toggler-container"
          className="leaderboard-team-lower"
        >
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
