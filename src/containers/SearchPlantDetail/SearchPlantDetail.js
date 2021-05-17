import React from 'react';
import plantData from './plants.json';
import DetailCards from './DetailCards'

const SearchPlantDetail = () => {
  let plantJSON = [];
  plantJSON.push(...plantData);
  return (
    <div id="container">
    <DetailCards plantInfo={plantJSON[2]}/>
  </div>);
};

export default SearchPlantDetail;
