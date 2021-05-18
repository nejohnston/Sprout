// ======================================
//               Imports
// ======================================

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import plantData from './plants.json';
import DetailCards from './DetailCards'
import AddPlantModal from '../../components/Modals/AddPlantModal';

// Images
import backbutton from './images/back_button.svg';


// ======================================
//            React Component
// ======================================


const SearchPlantDetail = () => {

  // Receive plant Data
  let plantJSON = [];
  plantJSON.push(...plantData);


  /**
   * Return the plant's first common name capitalized.
   * @param {*} plant - a plant object
   * @returns - a string, the plant's first common name capitalized.
   */
  const firstCommonName = (plant) => {
    let firstName = plant.PLANT_COMMON_NAME.split(',')[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  }


  // Component Return
  return (

  <div id="container">

    <div id="header_backarrow_container">
      <Link to="/search">
          <img src={backbutton} className="back-button" alt="" />
      </Link>
      <h1 id="profile-h1">{firstCommonName(plantJSON[2])}</h1>
      <AddPlantModal type={plantJSON[2]['PLANT_TYPE']} family={plantJSON[2]['PLANT_FAMILY_NAME']}/>
    </div>

    <hr />

    <div id="search-details-img-container">
    <img id="search-details-img" src={plantJSON[2]['PLANT_IMG_URL']}></img>
    </div>

    <DetailCards plantInfo={plantJSON[2]}/>
  </div>);
};

export default SearchPlantDetail;
