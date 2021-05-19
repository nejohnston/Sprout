// ====================================
//            IMPORTS
// ====================================

// React
import React from 'react';

// Assets
import waterIcon from '../images/water-icon-circle.svg';

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/WaterAlerts.css';


// ====================================
//          REACT COMPONENT
// ====================================


/**
 * Return each plant in array plants as a WaterPlant alert.
 * @param {Array} plants - an array of plant objects that must be watered.
 * @returns - a complete set of WaterPlant components, one for each plant object in plant.
 */
const WaterAlert = ({plants}) => {

    const waterPlant = (plant_id) => {

        console.log('clear!')
        // search db with plant id
        // update the last water date as today
    }

    return plants.map( plant => (

        <div className="alert-water" key={plant["plant_id"]}>
            <img className="alert-water-plant-img" src={plant["PLANT_IMG_URL"]} alt="plant-img"/>
            <p><strong>{plant["plant_name"]}</strong> needs to be watered!</p>

            <img className="alert-water-btn shadow-sm" src={waterIcon} alt="water-icon" onClick={waterPlant}/>
        </div>

    ));
}

export default WaterAlert;