import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import './styles/NoResults.css';

import notFound from '../../config/assets/icons/404-sprout.svg'

const NoResults = () => {
    return (
        <div id="welcome-div" className="text-muted">

            <img src={notFound} alt="" id="no-results-img"/>
            <h5>No Matching Plants Found</h5>

            <h6>Suggest a New Plant</h6> 
            <p>Add your plant from My Sprouts and <a href="/about-us/#contact" className="link">submit a request</a> if you'd like to see a plant added to our database</p>
        </div>
    )
}

export default NoResults;