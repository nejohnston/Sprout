import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PlantInfo.css';
import leaf from './images/big-leaf.svg';
import watercan from './images/water-can-slim.svg';

const PlantInfo = ({plant}) => {

    return (
        <>
        <div id="plant-profile-card">
            <div className="plant-profile-info-card">
                <img src={leaf} className="plant-profile-icon" alt="leaf-icon"></img>
                <div className="plant-profile-info-section">
                    <p className="plant-profile-subhead1 plant-profile-subhead">Family</p>
                    <p className="plant-profile-value1 plant-profile-value">{plant.family}</p>

                    <p className="plant-profile-subhead2 plant-profile-subhead">Type</p>
                    <p className="plant-profile-value2 plant-profile-value">{plant.type}</p>
                </div>
            </div>
        </div>

        <div id="plant-profile-card">
            <div className="plant-profile-info-card">
                <img src={watercan} className="plant-profile-icon" alt="leaf-icon"></img>
                <div className="plant-profile-info-section">
                    <p className="plant-profile-subhead1 plant-profile-subhead">Water Interval</p>
                    <p className="plant-profile-value1 plant-profile-value">{plant.watering_interval} days</p>

                    <p className="plant-profile-subhead2 plant-profile-subhead">Last Watered</p>
                    <p className="plant-profile-value2 plant-profile-value">{plant.last_watered}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default PlantInfo;