import React from 'react';

import './styles/TopFive.css';


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