import React from 'react';
import SproutItem from './SproutItem'
import './styles/SproutGallery.css'
import "bootstrap/dist/css/bootstrap.min.css";

const SproutGallery = ({sprouts}) => {
  return (
  <>
    <SproutItem sprouts= {sprouts}/>
  </>);
};

export default SproutGallery;