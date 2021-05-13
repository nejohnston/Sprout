import React from 'react';

const PlantNotes = ({plantNotes}) => {

    return (
        <>
        <div id="plant-profile-notes" className="plant-profile-card">
        <h3 className="plant-profile-subhead">Notes</h3>
        <p>{plantNotes}</p>
        </div>

        </>
    )
}

export default PlantNotes;