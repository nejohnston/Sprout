import React from 'react';
import WaterAlerts from './WaterAlerts';

import alertPlants from './alerts.json';

const Alerts = () => {

  
  return (
  <div id="container">

    <div id="profile-header">
      <h1 id="profile-h1">Alerts</h1>
    </div>

    <hr/>

    <div id="alerts-container">
    <WaterAlerts plants={alertPlants}/>

  
    </div>

  </div>);
};

export default Alerts;
