// =====================================
//               IMPORTS
// =====================================

// React
import React from "react";

// Styles
import "./styles/LeaderboardTogglers.css";

/**
 * Return the top component of the Leaderboard screen
 *
 * Based on which team has the most points, the images will be rendered with the appropriate team data
 * @param {Array} teams - a sorted array containing objects with team data (points in descending order), to be used as props
 * @returns the top component of the Leaderboard screen
 */

const LeaderboardTogglers = ({ teams }) => {
<<<<<<< HEAD
  console.log(teams)

=======
>>>>>>> 27fae5ab6574786a9ff21afdae8c289b5686b352
  // All the styles are inline because they have to accept a prop as a background image url, and there is no way to pass this directly into an external stylesheet. Furthermore, as they need the prop passed in, they also can't be defined at the top of the page above this rendering component. The only way to style was to do it inline.

  // Based on the team with the most points, the positions will change, which is why all 3 of the components accept props.

  return (
    <>
      <div id="leaderboard-togglers-container">
        <div className="team-toggler-container leaderboard-team-lower">
          <div className="leaderboard-white-bg">
            <div
              className=""
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${teams[1]["team_image_url"]})`,
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
                backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${teams[0]["team_image_url"]})`,
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

        <div className="team-toggler-container leaderboard-team-lower">
          <div className="leaderboard-white-bg">
            <div
              className=""
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${teams[2]["team_image_url"]})`,
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
