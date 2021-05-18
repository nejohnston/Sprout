import React from 'react';

import './styles/TopFive.css';


const TopFive = ({ topfive }) => {
    return topfive.map( player => (
        <>
        <div key={player.user_id} className="champion-container">
            <img className="champion-img shadow-sm" src={player.user_img} alt={player.username}/>
            
            <div className="champion-info">
            <p><strong>{player.username}</strong></p>
            <p>{player.points}</p>
            </div>

        </div>
        <hr/>
        </>
    ));
};

export default TopFive;