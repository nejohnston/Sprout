import { React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import searchPlantData from "./plants.json";
import SearchItem from "./SearchItems";
import SearchBar from "./SearchBar";

const Search = () => {
  let plantJSON = [];
  plantJSON.push(...searchPlantData);
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

      <hr />

      <SearchBar />
      <SearchItem plantData={plantJSON} />
    </div>
  );
};

export default Search;
