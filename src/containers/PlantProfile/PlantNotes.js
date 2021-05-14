import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PlantNotes.css'

const PlantNotes = ({plantNotes}) => {

    return (
        <>
        <div id="plant-profile-card" className="shadow">
        <p id="plant-profile-subhead">Notes</p>
        <p>{plantNotes}</p>
        </div>
        </>
    )
}

export default PlantNotes;