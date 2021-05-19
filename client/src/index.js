/*================== IMPORTS ===================== */

// React
import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Layout from './components/Layout/Layout';
import AboutUsContainer from './containers/AboutUs';
import AlertsContainer from './containers/Alerts';
import LeaderboardContainer from './containers/Leaderboards';
import LoginContainer from './containers/Login';
import JoinTeamContainer from './containers/JoinTeam';
import ProfileContainer from './containers/Profile';
import PlantProfileContainer from './containers/PlantProfile';
import SearchContainer from './containers/Search';

// Web Vitals and Styling
import reportWebVitals from './reportWebVitals';
import './index.css';
import userEvent from '@testing-library/user-event';
import HomeContainer from './containers/HomeContainer/HomeContainer';

// UserContext
export const UserContext = createContext();
const userInitialValue = {
  userId: 0,
  teamId: 0,
  username: '',
  password: '',
  name: '',
  profilePicture:'',
  team: 0,
  points: 0,
  sprouts: []
}

/*================== APP PATHS AND RENDER ===================== */

/**
 * Associate the application's paths to specified components for rendering.
 * 
 * @returns - the routing for Sprout application
 */
const App = () => {
  const [user, setUser] = useState(userInitialValue)
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Layout>
            <Route path='/about-us' component={AboutUsContainer} />
            <Route path='/alerts' component={AlertsContainer} />
            <Route path='/join-team' component={JoinTeamContainer} />
            <Route path='/leaderboards' component={LeaderboardContainer} />
            <Route exact path='/' component={LoginContainer} />
            <Route path='/profile' component={ProfileContainer} />
            <Route path='/search' component={SearchContainer} />
            <Route path='/plant-profile' component={PlantProfileContainer} />
          </Layout>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

/**
 * Display specified path inside element at 'root'.
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
