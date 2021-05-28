// ====================================
//            IMPORTS
// ====================================

// React
import React, { useState, useEffect } from 'react';
import Axios from "axios";

// Components
import SproutTip from '../../components/Alerts/SproutTip';
import WaterAlerts from '../../components/Alerts/WaterAlerts';

// Data
import sproutTips from '../../config/data/sprout-tips.json';

// Styles
import './AlertsPage.css';

// Assets
import plantyDance from '../../config/assets/gifs/planty-dance.gif';



// ====================================
//          REACT COMPONENT
// ====================================

/**
 * Return the components of the Alerts Page.
 * @returns - the components of Alerts Page.
 */
const AlertsPage = () => {

  const [alertPlants, setAlertPlants] = useState([]);
  
  // Load Alerts
  useEffect(() => {
    let isMounted = true;
    getAlerts()
    return () => {isMounted = false};
  }, []);
  const getAlerts = async () => {
    await Axios.post('/api/alerts', {
      userId: window.sessionStorage.getItem('userId')
    })
    .then(res => {
      setAlertPlants(res.data);
    })
  }

  return (
  <div id="container">

    <div id="profile-header">
      <h1 id="profile-h1">Alerts</h1>
    </div>

    <hr/>

    <div id="alerts-container">

    <SproutTip tips={sproutTips}/>

    {alertPlants.length === 0 && (
      <div id="empty-alerts">
      <img src={plantyDance} alt="planty-dance" id="planty-dance"/>
      <strong>
        Pat yourself on the back, <br/> all your plants are watered!
      </strong>
      </div>
    )}

    <WaterAlerts plants={alertPlants} setAlerts={setAlertPlants}/>
  
    </div>

    <div id="nav-blocker"></div>

  </div>);
};

export default AlertsPage;
