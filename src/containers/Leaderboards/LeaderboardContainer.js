import React, { useEffect } from 'react';
import Leaderboard from './Leaderboard'

const LeaderboardContainer = () => {
  useEffect(() => {
    getUsers();
    });

  return <Leaderboard />
}

export default LeaderboardContainer;