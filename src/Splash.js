/* React imports */
import React from "react";

/* Bootstrap imports */
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

/* Component imports */
import sproutLogo from "./components/Layout/images/sprout_logo_textless.png";

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
