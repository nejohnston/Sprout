import React from 'react';

const LeaderboardTogglers = ({teams}) => {
  return (
  <div>
      <p>{teams[0]["team_name"]}</p>
      <p>{teams[1]["team_name"]}</p>
      <p>{teams[2]["team_name"]}</p>
  </div>);
};

export default LeaderboardTogglers;
