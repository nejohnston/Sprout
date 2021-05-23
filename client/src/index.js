/*================== IMPORTS ===================== */

// React
import React from 'react';
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
import SearchPlantDetailContainer from './containers/SearchPlantDetail'

// Web Vitals and Styling
import reportWebVitals from './reportWebVitals';
import './index.css';
import EasterEgg from './components/Easter/EasterEgg';
// import reducer from './components/Layout/GlobalReducer';

/*================== APP PATHS AND RENDER ===================== */

/**
 * Associate the application's paths to specified components for rendering.
 * 
 * @returns - the routing for Sprout application
 */
const App = () => {
  return (
      <Router>
        <Switch>
          <Layout>
            {/* {user === userInitialValue ?
            <Route path='/*' component={LoginContainer} />
            :  */}
            <>
              <Route path='/about-us' component={AboutUsContainer} />
              <Route path='/alerts' component={AlertsContainer} />
              <Route path='/join-team' component={JoinTeamContainer} />
              <Route path='/leaderboards' component={LeaderboardContainer} />
              <Route exact path='/' component={LoginContainer} />
              <Route path='/profile' component={ProfileContainer} />
              <Route path='/search' component={SearchContainer} />
              <Route path='/search-details/:plantId' component={SearchPlantDetailContainer} />
              <Route path='/plant-profile/:sproutId' component={PlantProfileContainer} />
              <Route path='/asdfasdfasdfasdfsadfsafdasdf' component={EasterEgg} />
            </>
            {/* } */}
          </Layout>
        </Switch>
      </Router>
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
