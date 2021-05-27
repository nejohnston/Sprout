import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import './styles/Welcome.css';

const Welcome = () => {
    return (
        <div id="found-none-div" className="text-muted">
            <h5>Looks like you don't have any Sprouts!</h5>

            <h6>Sprout Starter:</h6> 
            <p>Tap the <strong>+</strong> button to add a new Sprout or go to Search to find plant information.</p>
            <p>Tap your profile image to refresh your profile.</p>
        </div>
    )
}

export default Welcome;