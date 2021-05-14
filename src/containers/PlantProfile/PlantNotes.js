import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PlantNotes.css'

const PlantNotes = ({plantNotes}) => {

    return (
        <>
        <div className="plant-profile-notes-card">
        <p id="plant-profile-subhead">Notes</p>
        <p>{plantNotes}</p>
        </div>
        </>
    )
}

export default PlantNotes;