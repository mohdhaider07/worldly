import React from "react";
import "./PopulationAreaFilter.css";

const FILTERS = [
  { label: "Most Populated", value: "most-populated" },
  { label: "Least Populated", value: "least-populated" },
  { label: "Biggest Country", value: "biggest" },
  { label: "Smallest Country", value: "smallest" },
];

const PopulationAreaFilter = ({ selectedFilter, setSelectedFilter }) => (
  <div className="pop-area-filter-container">
    <h3 className="pop-area-filter-title">Sort/Highlight</h3>
    <div className="pop-area-filter-list">
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          className={`pop-area-filter-btn${
            selectedFilter === filter.value ? " selected" : ""
          }`}
          onClick={(e) => {
            setSelectedFilter(
              filter.value === selectedFilter ? "" : filter.value
            );
            e.target.blur();
          }}
        >
          {filter.label}
        </button>
      ))}
    </div>
  </div>
);

export default PopulationAreaFilter;
