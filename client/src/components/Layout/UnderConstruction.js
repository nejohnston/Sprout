// ====================================
//            IMPORTS
// ====================================

// React
import React from 'react';

// Assets
import sproutLogo from './images/sprout_logo_textless.png';

/**
 * Return the Under Construction page to be used for pages that are not yet implemented, as a placeholder.
 * @returns the Under Construction page.
 */

// ====================================
//          REACT COMPONENT
// ====================================

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
