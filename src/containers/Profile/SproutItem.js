import React from "react";
import './styles/PlantGallery.css'
import "bootstrap/dist/css/bootstrap.min.css";

const PlantGallery = ({sprouts}) => {
  return sprouts.map((sprout) => (
    <div className="plant-list-item">
      <img src={sprout.image_url} className="plant-list-img"/>
      <p className="plant-list-name">{sprout.name}</p>
    </div>
  ));
};

export default PlantGallery;
