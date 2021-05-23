// =====================================
//               IMPORTS
// =====================================

// React
import React, { useState } from "react";

// FS Lightbox - from https://fslightbox.com/react/documentation
import FsLightbox from "fslightbox-react"; 

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Styles
import "./styles/PlantProfilePicture.css";

/**
 * Return the Plant Profile component
 * 
 * The image will lightbox, due to the incorporation of FS lightbox
 * 
 * @param {String} image_url - string with the url of the image to be rendered
 * @returns the Plant Profile component
 */

const PlantProfilePicture = ({ image_url }) => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <img src={image_url} id="plant-profile-picture" className="shadow-sm" alt="" onClick={() => setToggler(!toggler)} />
      <FsLightbox toggler={toggler} sources={[<img src={image_url} alt=""/>]} />
    </>
  );
};

export default PlantProfilePicture;
