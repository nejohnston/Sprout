import React from "react";
import './styles/SproutItem.css'
import "bootstrap/dist/css/bootstrap.min.css";

const PlantGallery = ({sprouts}) => {
  return sprouts.map((sprout) => (
    <div className="plant-list-item" key={sprout.id}>
      <img src={sprout.image_url} className="plant-list-img" alt="plant"/>
      <div className="plant-list-name-div">
      <strong><p className="plant-list-name">{sprout.name}</p></strong>
      </div>
    </div>
  ));
};

export default PlantGallery;
