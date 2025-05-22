import React from "react";
import "./RegionFilter.css";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const RegionFilter = ({ selectedRegion, setSelectedRegion }) => (
  <div className="region-filter-container">
    <h3 className="region-filter-title">Region</h3>
    <div className="region-filter-list">
      {REGIONS.map((region) => (
        <button
          key={region}
          className={`region-filter-btn${
            selectedRegion === region ? " selected" : ""
          }`}
          onClick={(e) => {
            setSelectedRegion(region === selectedRegion ? "" : region);
            e.target.blur();
          }}
        >
          {region}
        </button>
      ))}
    </div>
  </div>
);

export default RegionFilter;
