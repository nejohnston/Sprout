// =====================================
//               IMPORTS
// =====================================

// React
import React, { useState } from "react";

// Bootsrap
import "bootstrap/dist/css/bootstrap.min.css"; 

// Styling
import './Search.css'

// Components
import SearchItem from "../../components/Search/SearchItems";
import SearchBar from "../../components/Search/SearchBar";

// Data (Temp)
import searchPlantData from "../../backend/plants.json";



// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return components of the Search Page.
 * 
 * Search code adapted from @pradityadhitama from Medium.
 * 
 * @returns - components of the Search Page.
 */
const SearchPage = () => {

  // Push data to be used as prop
  
  let plantJSON = [];
  plantJSON.push(...searchPlantData);

  // State to track the search input changes as user types. Default empty string
  const [input, setInput] = useState('')

  // State to track the default plant list. Default imported plant database
  const [plantListDefault, setPlantListDefault] = useState(plantJSON);

  // State to track the filtered plant list. Default imported plant database
  const [plantList, setPlantList] = useState(plantJSON);


  // Function to update the input in the search bar and the filtered plant list based on current input
  const updateInput = input => {

    const filterList = plantListDefault.filter(plant => {   // filter through the default plant list
      return plant.PLANT_COMMON_NAME.toLowerCase().includes(input.toLowerCase())  // return only plants w/ common name including input
    })

    setInput(input);            // make sure input is updated in search bar to current input string
    setPlantList(filterList);   // update the current plant list displayed to the new filtered list
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

export default SearchPage;
