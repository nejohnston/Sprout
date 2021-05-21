// ====================================
//            	IMPORT
// ====================================

// React
import React from 'react';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PlantDateAdded.css';

// Assets
import seed from '../../config/assets/icons/seed.svg';


// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the date added card of a given date specified.
 * @param {String} dateAdded - string, the date that the plant was added to the Database. 
 * @returns - card component for date added.
 */
const PlantNotes = ({dateAdded}) => {

    return (

        <div id="plant-profile-dateAdded-card">
            <div className="plant-profile-info-card">
                <img src={seed} className="plant-profile-icon" alt="leaf-icon"></img>
                <div className="plant-dateAdded-section">
                    <p className="plant-profile-subhead1 plant-profile-subhead">Date Added</p>
                    <p className="plant-profile-value1 plant-profile-value">{dateAdded}</p>
                </div>
            </div>
        </div>

    )
}

export default PlantNotes;