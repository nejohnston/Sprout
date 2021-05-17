import React from 'react';
import plantData from './plants.json';
import DetailCards from './DetailCards'
import AddPlantModal from '../../components/Modals/AddPlantModal';

const SearchPlantDetail = () => {
  let plantJSON = [];
  plantJSON.push(...plantData);

  const firstCommonName = (plant) => {
    return plant.PLANT_COMMON_NAME.split(',')[0];
  }

  return (
  <div id="container">
    <div id="profile-header">
      <h1 id="profile-h1">{firstCommonName(plantJSON[3])}</h1>
      <AddPlantModal type={plantJSON[3]['PLANT_TYPE']} family={plantJSON[3]['PLANT_FAMILY_NAME']}/>
    </div>

    <hr />

    <DetailCards plantInfo={plantJSON[0]}/>
  </div>);
};

export default SearchPlantDetail;
