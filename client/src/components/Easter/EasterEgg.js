import React from 'react';
import corgiStill from '../../config/assets/images/Corgiswimflipflip.jpg'
import corgi from '../../config/assets/images/bork_bork_nom_nom.gif'
import './Easter.css';
import { Link } from 'react-router-dom';

const EasterEgg = () => {
  return (
    <Link to="/about-us">
    <div id='guichonRiver'>
      <div className="corgiFly">
        <img src={corgi} alt={corgiStill} />
      </div>
    </div>
    </Link>
  )
};

export default EasterEgg;