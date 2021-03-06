// ======================================
//               Import
// ======================================

// React
import React from "react";

// Assets
import leaf from '../../config/assets/icons/big-leaf.svg';
import watercan from '../../config/assets/icons/water-can-slim.svg';
import star from '../../config/assets/icons/star.svg';
import flower from '../../config/assets/icons/flower.svg';
import fruit from '../../config/assets/icons/fruit.svg';

// Styling
import './styles/DetailCards.css'

/**
 * Return the card components rendering the plant's info to be used in search details.
 * @param {object} plantInfo: an object containing the specific plant's information
 * @returns the card components rendering the plant's info
 */

// ======================================
//            React Component
// ======================================

const DetailCards = ({ plantInfo }) => {

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
        <p id="reference">Kwantlen Polytechnic University, School of Horticulture (2015).</p>
      </div>
    </div>
  );
};

export default DetailCards;
