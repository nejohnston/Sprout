import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PlantNotes.css'

const PlantNotes = ({plantNotes}) => {

    return (
        <>
        <div id="plant-profile-card" className="shadow">
        <h5 id="plant-profile-subhead">Notes</h5>
        <p>{plantNotes}</p>
        </div>
        </>
    )
}

export default PlantNotes;