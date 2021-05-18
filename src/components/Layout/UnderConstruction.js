/* React imports */
import React from 'react';

/* Bootstrap imports */
import "bootstrap/dist/css/bootstrap.min.css";

/* Component imports */
import sproutLogo from './images/sprout_logo_textless.png';

const UnderConstruction = () => {

  return (
    <>
  <div id="under-const-container">
    <img id="under-const-logo" src={sproutLogo} alt="logo"/>
    <h4>Things are growing!</h4>
    <p>Page under construction. <br/> Come back soon.</p>
  </div>
  </>
  );
};

export default UnderConstruction;
