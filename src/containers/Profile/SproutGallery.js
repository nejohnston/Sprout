import React from 'react';
import SproutItem from './SproutItem'
import './styles/SproutGallery.css'
import "bootstrap/dist/css/bootstrap.min.css";

const SproutGallery = ({sprouts}) => {
  return (
    <div id="gallery-container">
      <SproutItem sprouts={sprouts}/>
    </div>);
};

export default SproutGallery;