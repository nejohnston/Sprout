import React, {useContext} from 'react';
import { withRouter } from 'react-router';
import { UserContext } from '../..';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

const HomeContainer = (props) => {
  const user = useContext(UserContext)[0]
  console.log(user)
  return ((user.userId !== 0) ? <Profile/> : <Login />)
}

export default withRouter(HomeContainer);