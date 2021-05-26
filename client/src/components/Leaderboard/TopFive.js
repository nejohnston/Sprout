// ====================================
//            IMPORTS
// ====================================

// React
import React from 'react';

// Styles
import './styles/TopFive.css';


// ====================================
//          REACT COMPONENT
// ====================================

/**
 * Iterate through topfive array and create components for each top five champion.
 * @param {Array} topfive -  
 * @returns 
 */
const TopFive = ({ topfive }) => {
    return topfive.map( player => (
        <div key={player["application_user_preferred_name"]}>
        <div className="champion-container">
            <img className="champion-img shadow-sm" src={player["application_user_image"]} alt={player["application_user_preferred_name"]}/>
            
            <p className="champion-username"><strong>{player["application_user_preferred_name"]}</strong></p>
            <p className="champion-points">{player["application_user_points"]}</p>

        </div>
        <hr/>
        </div>
    ));
};

export default TopFive;