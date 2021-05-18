import React from 'react';

import SproutTip from './components/SproutTip';
import WaterAlerts from './components/WaterAlerts';

import sproutTips from './sprout-tips.json';
import alertPlants from './alerts.json';

import './styles/Alerts.css';

const Alerts = () => {

  
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

export default Alerts;
