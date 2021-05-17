import { React, useState } from 'react';
import SearchBar from './SearchBar';

/* Data import */
import plantData from './plants.json';

const Search = () => {

  let plantDataStuff = [];
  plantDataStuff.push(...plantData);

  const [input, setInput] = useState('')
  const [plantListDefault, setPlantListDefault] = useState(plantDataStuff);
  const [plantList, setPlantList] = useState(plantDataStuff);

  // console.log(plantListDefault)

  const updateInput = input => {
    const filterList = plantListDefault.filter(plant => {
      return plant.PLANT_COMMON_NAME.toLowerCase().includes(input.toLowerCase())
    })

    setInput(input);
    setPlantList(filterList);

    console.log(filterList)
  }

  return (
    <div id="container">
      <div id="profile-header">
        <h1 id="search-h1">Search</h1>
      </div>

      <hr/>

      <SearchBar input_keyword={input} updateInputKeyword={updateInput}/>


    </div>
    );

};

export default Search;
