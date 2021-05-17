import React from 'react';
import plantData from './plants.json';
import DetailCards from './DetailCards'

const SearchPlantDetail = () => {
  let plantJSON = [];
  plantJSON.push(...plantData);
  return (
  <div>
    <DetailCards plantInfo={plantJSON[0]}/>
  </div>);
};

export default SearchPlantDetail;
