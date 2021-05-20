// =====================================
//               IMPORTS
// =====================================

// React
import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

// Assets
import sproutLogo from "./components/Layout/images/sprout_logo.png";

/**
 * Return the splash screen component to be used for loading screens
 * @returns splash screen component
 */

const Splash = () => {
  return (
    <>
      <div id="splash-container">
        <img id="under-const-logo" src={sproutLogo} alt="logo" />
        <br/>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </>
  );
};

export default Splash;
