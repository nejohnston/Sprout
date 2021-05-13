import React from 'react';
import plantprofiledata from './plant_profile.json'

const PlantProfile = () => {

  let plantprofilejson = []
  plantprofilejson.push(...plantprofiledata);
  
  return (
  <div>
    <p>
      This is where Profile components will reside
    </p>
  </div>
  );
};

export default PlantProfile;
