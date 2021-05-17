/* React Imports */
import React from "react";
import "./styles/SearchItem.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchItem = ({ plantData }) => {
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
            {titleCase(plant["PLANT_COMMON_NAME"])}
          </p>
          </strong>
          <p className="is-native" id={"plant" + plant["PLANT_ID"]}>Is Native</p>
      </div>
    </div>
  ));
};

export default SearchItem;
