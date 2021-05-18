import React, { useContext } from 'react';
import { UserContext } from '../..';
import Profile from './Profile'

const ProfileContainer = () => {
  const user = useContext(UserContext)
  return <Profile userData={user}/>
}

export default ProfileContainer;