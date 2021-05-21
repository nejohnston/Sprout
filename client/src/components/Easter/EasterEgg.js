import React from 'react';
import corgiStill from '../../config/assets/images/Corgiswimflipflip.jpg'
import corgi from '../../config/assets/images/bork_bork_nom_nom.gif'
import './Easter.css';

const EasterEgg = () => {
  return (
    <div id='guichonRiver'>
      <div class="corgiFly">
        <img src={corgi} alt={corgiStill} />
      </div>
    </div>
  )
};

export default EasterEgg;