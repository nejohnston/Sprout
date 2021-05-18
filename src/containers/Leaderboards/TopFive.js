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
        <>
        <div key={player.user_id} className="champion-container">
            <img className="champion-img shadow-sm" src={player.user_img} alt={player.username}/>
            
            <p className="champion-username"><strong>{player.username}</strong></p>
            <p className="champion-points">{player.points}</p>


        </div>
        <hr/>
        </>
    ));
};

export default TopFive;