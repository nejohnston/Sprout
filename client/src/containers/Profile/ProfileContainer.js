import React, { useContext, useState } from 'react';
import { UserContext } from '../../components/Layout/Layout';
import ProfilePage from './ProfilePage'

const initialState = {
  user: {
  userId: 0,
  teamId: 0,
  username: '',
  password: '',
  name: '',
  profilePicture:'',
  team: 0,
  points: 0,
  sprouts: []
},
sprouts: []
}

const ProfileContainer = () => {

  // const [state, dispatch] = useReducer(reducer, initialState)
  const user = useContext(UserContext);
  const sproutState = useState(initialState.sprouts)
  
  return <ProfilePage userContext={user} userSprouts={sproutState} />
}

export default ProfileContainer;