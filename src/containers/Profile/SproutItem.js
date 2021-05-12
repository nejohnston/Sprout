import React from "react";
import './styles/SproutItem.css'
import "bootstrap/dist/css/bootstrap.min.css";

const PlantGallery = ({sprouts}) => {
  return sprouts.map((sprout) => (
    <div className="plant-list-item" key={sprout.id}>
      <img src={sprout.image_url} className="plant-list-img"/>
      <strong><p className="plant-list-name">{sprout.name}</p></strong>
    </div>
  ));
};

export default PlantGallery;
