// ======================================
//               Import
// ======================================

// React
import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Components
import plantData from '../../config/data/plants_with_bees.json';
import DetailCards from '../../components/SearchPlantDetail/DetailCards'
import AddPlantModal from '../../components/Modals/AddPlantModal';

// Assets
import backbutton from '../../config/assets/icons/back_button.svg';


// ======================================
//            React Component
// ======================================

/**
 * Return the components for Search Details page.
 * @returns - the components for Search Details page.
 */
const SearchPlantDetailPage = () => {

  let plantId = parseInt(useParams().plantId);

  let this_plant = plantData.filter( plant => plant.PLANT_ID === plantId )[0]
  

  /**
   * Return the plant's first common name capitalized.
   * @param {*} plant - a plant object
   * @returns - a string, the plant's first common name capitalized.
   */
  const firstCommonName = (plant) => {
    let firstName = plant.PLANT_COMMON_NAME.split(',')[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  }

  return (

  <div id="container">

    <div id="header_backarrow_container">
      <Link to="/search">
          <img src={backbutton} className="back-button" alt="" />
      </Link>
      <h1 id="profile-h1">{firstCommonName(this_plant)}</h1>
      <AddPlantModal type={this_plant['PLANT_TYPE']} family={this_plant['PLANT_FAMILY_NAME']}/>
    </div>

    <hr />

    <div id="search-details-img-container">
    <img id="search-details-img" src={this_plant['PLANT_IMG_URL']} alt=""></img>
    </div>

    <DetailCards plantInfo={this_plant}/>
  </div>);
};

export default SearchPlantDetailPage;
