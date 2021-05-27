// ====================================
//            IMPORTS
// ====================================

// React
import React, { useContext } from 'react';
import Axios from "axios";

// Assets
import waterIcon from '../../config/assets/icons/water-icon-circle.svg';

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/WaterAlerts.css';

// Sprout and User Context from Layout.js Provider
import { SproutContext, UserContext } from "../../components/Layout/Layout";


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

  // Context States
  let user = useContext(UserContext)[0];
  let [sprouts, setSprouts] = useContext(SproutContext);
    
    const waterPlant = async (plant_id) => {

        Axios.put('/alerts', {
            userId: window.sessionStorage.getItem('userId'),
            user_sprouts_id: plant_id
        }).then(res => {

            console.log(res);
            
            let currSprout = sprouts.filter(sprout => sprout.sproutId === plant_id)[0];

            let wateredSprout = {...currSprout,
                lastWatered: res.data.updatedSprout.user_sprouts_last_watered
            };

            let sproutIndex = sprouts.findIndex(
                ({ sproutId }) => sproutId === plant_id
              );
            let updatedSprouts = [...sprouts];
            updatedSprouts[sproutIndex] = wateredSprout;
            console.log(updatedSprouts);

            setSprouts(updatedSprouts);
            setAlerts(res.data.alerts);
            user.points = user.points + 10;
        });

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