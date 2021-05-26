// ====================================
//               IMPORT
// ====================================

// React
import React from 'react';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PlantInfo.css';

// Assets
import leaf from '../../config/assets/icons/big-leaf.svg';
import watercan from '../../config/assets/icons/water-can-slim.svg';


// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return plant information (Family and Watering) for the passed plant object.
 * @param {Object} plant - is the plant object for the current page. 
 * @returns - the Family and Watering information for the passed plant.
 */
const PlantInfo = ({plant}) => {

    return (
        <>
        <div id="plant-profile-card">
            <div className="plant-profile-info-card">
                <img src={leaf} className="plant-profile-icon" alt="leaf-icon"></img>
                <div className="plant-profile-info-section">
                    <p className="plant-profile-subhead1 plant-profile-subhead">Family</p>
                    <p className="plant-profile-value1 plant-profile-value" id="plant-profile-family">{plant["family"]}</p>

                    <p className="plant-profile-subhead2 plant-profile-subhead">Type</p>
                    <p className="plant-profile-value2 plant-profile-value" id="plant-profile-type">{plant["type"]}</p>
                </div>
            </div>
        </div>

        <div id="plant-profile-card">
            <div className="plant-profile-info-card">
                <img src={watercan} className="plant-profile-icon" alt="leaf-icon"></img>
                <div className="plant-profile-info-section">
                    <p className="plant-profile-subhead1 plant-profile-subhead">Water Interval</p>
                    <p className="plant-profile-value1 plant-profile-value">{plant["wateringInterval"]} days</p>

                    <p className="plant-profile-subhead2 plant-profile-subhead">Last Watered</p>
                    <p className="plant-profile-value2 plant-profile-value" id="plant-profile-last-watered">{plant["lastWatered"]}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default PlantInfo;