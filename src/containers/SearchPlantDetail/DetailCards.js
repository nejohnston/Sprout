// ======================================
//               Imports
// ======================================

// React
import React from "react";

// Assets
import leaf from './images/big-leaf.svg';
import watercan from './images/water-can-slim.svg'
import star from './images/star.svg'
import flower from './images/flower.svg'
import fruit from './images/fruit.svg'

// Styling
import './styles/SearchPlantDetail.css'


// ======================================
//            React Component
// ======================================

const DetailCards = ({ plantInfo }) => {

  /**
   * Title case a given string.
   * @param {String} title - a string, the title
   * @returns - a string title-cased
   */
  const titleCase = (title) => title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div id="detail-cards-container">
      <div id="plant-profile-dateAdded-card">
        <div className="plant-profile-info-card">
          <img src={star} className="plant-profile-icon" alt="leaf-icon"></img>
          <div className="plant-dateAdded-section">
            <p className="plant-profile-subhead1 plant-profile-subhead">
              Common Names
            </p>
            <p className="plant-profile-value1 plant-profile-value">
              {titleCase(plantInfo["PLANT_COMMON_NAME"])}
            </p>
          </div>
        </div>
      </div>

      <div id="plant-profile-card">
        <div className="plant-profile-info-card">
          <img src={leaf} className="plant-profile-icon" alt="leaf-icon"></img>
          <div className="plant-profile-info-section">
            <p className="plant-profile-subhead1 plant-profile-subhead">
              Family
            </p>
            <p className="plant-profile-value1 plant-profile-value">
              {plantInfo["PLANT_FAMILY_NAME"]}
            </p>

            <p className="plant-profile-subhead2 plant-profile-subhead">Type</p>
            <p className="plant-profile-value2 plant-profile-value">
              {plantInfo["PLANT_TYPE"]}
            </p>
          </div>
        </div>
      </div>

      <div id="plant-profile-card">
        <div className="plant-profile-info-card">
          <img src={watercan} className="plant-profile-icon" alt="leaf-icon"></img>
          <div className="plant-profile-info-section">
            <p className="plant-profile-subhead1 plant-profile-subhead">Soil</p>
            <p className="plant-profile-value1 plant-profile-value">
              {plantInfo["PLANT_SOIL"]}
            </p>

            <p className="plant-profile-subhead2 plant-profile-subhead">
              Water Use
            </p>
            <p className="plant-profile-value2 plant-profile-value">
              {plantInfo["PLANT_WATER_USE"]}
            </p>
          </div>
        </div>
      </div>

      <div id="plant-profile-card">
        <div className="plant-profile-info-card">
          <img src={flower} className="plant-profile-icon" alt="leaf-icon"></img>
          <div className="plant-profile-info-section">
            <p className="plant-profile-subhead1 plant-profile-subhead">
              Flowering Time
            </p>
            <p className="plant-profile-value1 plant-profile-value">
              {plantInfo["PLANT_FLOWER_TIME_AT_PEAK"]}
            </p>

            <p className="plant-profile-subhead2 plant-profile-subhead">
              Flower Color
            </p>
            <p className="plant-profile-value2 plant-profile-value">
              {plantInfo["PLANT_FLOWER_COLOR"]}
            </p>
          </div>
        </div>
      </div>

      <div id="plant-profile-dateAdded-card">
        <div className="plant-profile-info-card">
          <img src={fruit} className="plant-profile-icon" alt="leaf-icon"></img>
          <div className="plant-dateAdded-section">
            <p className="plant-profile-subhead1 plant-profile-subhead">
              Fruiting Time
            </p>
            <p className="plant-profile-value1 plant-profile-value">
              {plantInfo["PLANT_FRUIT_TIME"]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCards;
