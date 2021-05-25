// ====================================
//            IMPORTS
// ====================================

// React
import React from 'react';
import Axios from "axios";

// Components
import SproutTip from '../../components/Alerts/SproutTip';
import WaterAlerts from '../../components/Alerts/WaterAlerts';

// Data (temp)
import sproutTips from '../../config/data/sprout-tips.json';
import alertPlants from './alerts.json';

// Styles
import './AlertsPage.css';



// ====================================
//          REACT COMPONENT
// ====================================

/**
 * Return the components of the Alerts Page.
 * @returns - the components of Alerts Page.
 */
const AlertsPage = () => {

  Axios.post('/alerts', {
    userId: window.sessionStorage.getItem('userId')
  })
  .then(res => {
    console.log(res.data);
  })

  return (
  <div id="container">

    <div id="profile-header">
      <h1 id="profile-h1">Alerts</h1>
    </div>

    <hr/>

    <div id="alerts-container">

    <SproutTip tips={sproutTips}/>

    <WaterAlerts plants={alertPlants}/>
  
    </div>

    <div id="nav-blocker"></div>

  </div>);
};

export default AlertsPage;
