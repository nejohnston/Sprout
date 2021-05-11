import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import AlertsContainer from './containers/Alerts/';
import LeaderboardContainer from './containers/Leaderboards/';
import ProfileContainer from './containers/Profile/';
import SearchContainer from './containers/Search';
import reportWebVitals from './reportWebVitals';
import './index.css';

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path='/alerts' component={AlertsContainer} />
          <Route path='/leaderboards' component={LeaderboardContainer}/>
          <Route path='/profile' component={ProfileContainer} />
          <Route path='/search' component={SearchContainer} />
        </Switch>
      </Router>
    </Layout>
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
