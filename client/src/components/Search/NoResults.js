// =====================================
//               IMPORTS
// =====================================

// React
import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Styling
import './styles/NoResults.css';


// ====================================
//           REACT COMPONENT
// ====================================

const NoResults = () => {
    return (
        <div id="found-none-div" className="text-muted">

            <h5>No Matching Plants Found</h5>

            <h6>Suggest a New Plant</h6> 
            <p>Add your plant from My Sprouts and submit a request by finding us in our About Us page if you'd like to see a plant added to our database</p>
        </div>
    )
}

export default NoResults;