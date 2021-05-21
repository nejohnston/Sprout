import React from 'react';
import GifPlayer from 'react-gif-player'
import corgiStill from '../../config/assets/images/Corgiswimflipflip.jpg'
import corgi from '../../config/assets/images/corgiswim.gif'
import './Easter.css';

const EasterEgg = () => {
  return (
    <div id='guichonRiver'>
      <div class="flier">
        <img src={corgi} alt={corgiStill} />
      </div>
    </div>
  )
};

export default EasterEgg;