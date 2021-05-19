// ====================================
//            	IMPORT
// ====================================

// React
import React from 'react';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PlantNotes.css'


// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the notes card component using the string passed.
 * @param {String} plantNotes - a strong of a plant's notes. 
 * @returns - a card component containing plantNotes.
 */
const PlantNotes = ({plantNotes}) => {

    return (

        <div className="plant-profile-notes-card">
            <p id="plant-profile-subhead">Notes</p>
            <p>{plantNotes}</p>
        </div>

    )
}

export default PlantNotes;