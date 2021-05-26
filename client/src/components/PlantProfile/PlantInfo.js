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
const PlantInfo = ({plant, wateredDate}) => {

    let getLastDate = date => {
        if (!date) {
            return "N/A";
        } else {
            // Code snippet below adapted from Abhilash Kakumanu, Stack Abuse 
            //https://stackabuse.com/javascript-get-number-of-days-between-dates/
            
            let today = new Date();
            let lastWateredDate = new Date(wateredDate);

            // One day in milliseconds
            const oneDay = 1000 * 60 * 60 * 24;

            // Calculating the time difference between two dates
            const diffInTime = today.getTime() - lastWateredDate.getTime();

            // Calculating the no. of days between two dates
            const diffInDays = Math.round(diffInTime / oneDay);

            return `${diffInDays} days ago`;
        }
    }

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
                    <p className="plant-profile-value2 plant-profile-value" id="plant-profile-last-watered">{getLastDate(wateredDate)}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default PlantInfo;