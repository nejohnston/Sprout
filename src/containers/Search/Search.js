import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import searchPlantData from "./plants.json";
import SearchItem from "./SearchItems";
import SearchBar from "./SearchBar";

/* Data import */
import plantData from './plants.json';

const Search = () => {

  let plantJSON = [];
  plantJSON.push(...searchPlantData);

  const [input, setInput] = useState('')
  const [plantListDefault, setPlantListDefault] = useState(plantJSON);
  const [plantList, setPlantList] = useState(plantJSON);

  const updateInput = input => {
    const filterList = plantListDefault.filter(plant => {
      return plant.PLANT_COMMON_NAME.toLowerCase().includes(input.toLowerCase())
    })

    setInput(input);
    setPlantList(filterList);

    console.log(filterList)
  }

  const filerNativePlants = () => {
    let nativePlants = document.getElementsByClassName("is-native");
    for (let i = 1; i < nativePlants.length + 1; i++) {
      if (plantJSON[i - 1]["PLANT_ORIGIN"].substring(0, 4) !== "B.C.") {
        let isNative = document.getElementById("plant" + String(i));
        isNative.remove();
      }
    }
  };
  useEffect(() => {
    filerNativePlants();
  });

  return (
    <div id="container">
      <div id="profile-header">
        <h1 id="search-h1">Search</h1>
      </div>

      <hr/>

      <SearchBar input_keyword={input} updateInputKeyword={updateInput}/>
      <SearchItem plantData={plantJSON} />

    </div>
  );
};

export default Search;
