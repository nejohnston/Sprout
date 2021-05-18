/* React Imports */
import React from "react";

/* Stylesheet import */
import "./styles/SearchItem.css";

/**
 * Return the Search Items components
 * Takes the plant info and maps it to a search item card
 * Will only render the native plant pill if the plant is a native plant of BC
 * @returns Search Items components
 */

const SearchItem = ({ plantData }) => {

  // Convert plant's name to titlecase

  const titleCase = (title) => title.charAt(0).toUpperCase() + title.slice(1);

  return plantData.map((plant) => (
    <div className="plant-search-item" key={plant["PLANT_ID"]}>
      <img
        src={plant["PLANT_IMG_URL"]}
        className="plant-search-img"
        alt="plant-search-img"
      />
      <div className="plant-search-name-div">
        <strong>
          <p className="plant-search-name">
            {titleCase(plant["PLANT_COMMON_NAME"].split(", ")[0])}
          </p>
        </strong>
        <div className="plant-search-familytype">
          <p className="plant-search-family">
            <strong>Family: </strong>
            {plant["PLANT_FAMILY_NAME"]}
          </p>
          <p className="plant-search-type">
            <strong>Type: </strong>
            {plant["PLANT_TYPE"]}
          </p>

          {plant["PLANT_ORIGIN"].includes("B.C") && (
            <p className="is-native" id={"plant" + plant["PLANT_ID"]}>
              Native Plant
            </p>
          )}
        </div>
      </div>
    </div>
  ));
};

export default SearchItem;
