import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../..';
import Profile from './Profile'

const ProfileContainer = () => {
  const user = useContext(UserContext);
  const [sprouts, setSprouts] = useState(user[0].sprouts)
  console.log(user)
  useEffect(() => {
    const querySprouts = async (user) => {
      console.log(user[0]);
      await fetch(`http://localhost:3001/sprouts/${user[0].userId}/`)
      .then(response => response.json())
      .then(data => {
        // console.log("before" + sprouts)
        // &&
        setSprouts([...sprouts, data])
        // &&
        // console.log("after" + sprouts)
      })
      .catch(err => console.log(err));
    }
    querySprouts(user)
  }, [])
  return <Profile userContext={user} userSprouts={sprouts} />
}

export default ProfileContainer;