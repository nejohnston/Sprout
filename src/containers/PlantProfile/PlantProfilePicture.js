import React, { useState } from "react";
import FsLightbox from "fslightbox-react"; // from https://fslightbox.com/react/documentation
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/PlantProfilePicture.css";

const PlantProfilePicture = ({ image_url }) => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <img
        src={image_url}
        id="plant-profile-picture"
        onClick={() => setToggler(!toggler)}
      />
      <FsLightbox toggler={toggler} sources={[<img src={image_url} />]} />
    </>
  );
};

export default PlantProfilePicture;
