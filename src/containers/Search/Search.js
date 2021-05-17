import {React, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import searchPlantData from "./plants.json";
import SearchItem from "./SearchItems";

const Search = () => {
  let plantJSON = [];
  plantJSON.push(...searchPlantData);
  useEffect(() => {
    let nativePlants = document.getElementsByClassName("is-native");
    console.log(nativePlants.length)
    console.log(document.getElementById("plant1").innerHTML);
    for (let i = 1; i < nativePlants.length + 1; i++) {
      if(plantJSON[i-1]["PLANT_ORIGIN"].substring(0, 4) !== "B.C.") {
        let is_native = document.getElementById("plant" + String(i));
        is_native.remove()
      }
    } 
  });

  return (
    <>
      <SearchItem plantData={plantJSON} />
    </>
  );
};

export default Search;
