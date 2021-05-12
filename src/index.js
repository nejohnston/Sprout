import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Profile from './containers/Profile'
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import AboutUsContainer from './containers/AboutUs';
import AlertsContainer from './containers/Alerts/';
import LeaderboardContainer from './containers/Leaderboards/';
import LoginContainer from './containers/Login';
import JoinTeamContainer from './containers/JoinTeam'
import ProfileContainer from './containers/Profile';
import SearchContainer from './containers/Search';
import reportWebVitals from './reportWebVitals';

>>>>>>> 2004ad4a4acf08ff3361224ca6e39af438cb088f
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
<<<<<<< HEAD
       <>
        <Profile />
       </>
=======
    <Router>
      <Switch>
        <Layout>
          <Route path='/about-us' component={AboutUsContainer} />
          <Route path='/alerts' component={AlertsContainer} />
          <Route path='/join-team' component={JoinTeamContainer} />
          <Route path='/leaderboards' component={LeaderboardContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route path='/profile' component={ProfileContainer} />
          <Route path='/search' component={SearchContainer} />
        </Layout>
      </Switch>
    </Router>
>>>>>>> 2004ad4a4acf08ff3361224ca6e39af438cb088f
  );
}

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
