// ====================================
//            IMPORTS
// ====================================

// React
import React from 'react';
import Axios from "axios";

// Assets
import waterIcon from '../../config/assets/icons/water-icon-circle.svg';

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/WaterAlerts.css';


// ====================================
//          REACT COMPONENT
// ====================================


/**
 * Return each plant in array plants as a WaterPlant alert.
 * @param {Array} plants - an array of plant objects that must be watered.
 * @returns - a complete set of WaterPlant components, one for each plant object in plant.
 */
const WaterAlert = ({plants, setAlerts}) => {
    console.log(plants);

    const waterPlant = async (plant_id) => {
        Axios.put('/alerts', {
            userId: window.sessionStorage.getItem('userId'),
            user_sprouts_id: plant_id
        }).then(res => setAlerts(res.data));
        // search db with plant id
        // update the last water date as today
    }

    return plants.map( plant => (

        <div className="alert-water" key={plant["user_sprouts_id"]}>
            <img className="alert-water-plant-img" src={plant["user_sprouts_image"]} alt="plant-img"/>
            <p><strong>{plant["alerts_message"].split(" needs to be watered")[0]}</strong> needs to be watered!</p>

            <img className="alert-water-btn shadow-sm" src={waterIcon} alt="water-icon" onClick={() => waterPlant(plant["user_sprouts_id"])} />
        </div>

    ));
}

export default WaterAlert;