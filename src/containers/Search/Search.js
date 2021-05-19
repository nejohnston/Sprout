// ====================================
//            REACT IMPORTS
// ====================================
import React, { useState } from "react";

// ====================================
//          BOOTSTRAP IMPORTS
// ====================================
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/Search.css'

// ====================================
//          REACT COMPONENTS
// ====================================
import SearchItem from "./SearchItems";
import SearchBar from "./SearchBar";

// ====================================
//            DATA IMPORTS
// ====================================
import searchPlantData from "./plants.json";

const Search = () => {

  let plantJSON = [];
  plantJSON.push(...searchPlantData); // Push data to be used as prop

  const [input, setInput] = useState('')
  const [plantListDefault, setPlantListDefault] = useState(plantJSON);
  const [plantList, setPlantList] = useState(plantJSON);

  const updateInput = input => {
    const filterList = plantListDefault.filter(plant => {
      return plant.PLANT_COMMON_NAME.toLowerCase().includes(input.toLowerCase())
    })

    setInput(input);
    setPlantList(filterList);
  }

  return (
    <div id="container">
      <div id="profile-header">
        <h1 id="search-h1">Search</h1>
      </div>

      <hr/>

      <SearchBar input_keyword={input} updateInputKeyword={updateInput}/>
      <div id="search-items-container">
      <SearchItem plantData={plantList} />
      </div>
    </div>
  );
};

export default Search;
