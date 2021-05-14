import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PlantDateAdded.css';
import seed from './images/seed.svg';

const PlantNotes = ({dateAdded}) => {

    return (
        <>
        <div id="plant-profile-card" className="shadow">
            <div className="plant-profile-info-card">
                <img src={seed} className="plant-profile-icon" alt="leaf-icon"></img>
                <div className="plant-dateAdded-section">
                    <p className="plant-profile-subhead1 plant-profile-subhead">Date Added</p>
                    <p className="plant-profile-value1 plant-profile-value">{dateAdded}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default PlantNotes;