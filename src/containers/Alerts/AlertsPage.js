// ====================================
//            IMPORTS
// ====================================

// React
import React from 'react';

// Components
import SproutTip from './components/SproutTip';
import WaterAlerts from './components/WaterAlerts';

// Data (temp)
import sproutTips from './sprout-tips.json';
import alertPlants from './alerts.json';

// Styles
import './styles/AlertsPage.css';



// ====================================
//          REACT COMPONENT
// ====================================

/**
 * Return the components of the Alerts Page.
 * @returns - the components of Alerts Page.
 */
const AlertsPage = () => {

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
