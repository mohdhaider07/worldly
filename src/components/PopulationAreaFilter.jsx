import React from "react";
import "./PopulationAreaFilter.css";

const PopulationAreaFilterContext = React.createContext();

function PopulationAreaFilter({ selectedFilter, setSelectedFilter, children }) {
  return (
    <PopulationAreaFilterContext.Provider
      value={{ selectedFilter, setSelectedFilter }}
    >
      <div className="pop-area-filter-container">
        <h3 className="pop-area-filter-title">Sort/Highlight</h3>
        <div className="pop-area-filter-list">{children}</div>
      </div>
    </PopulationAreaFilterContext.Provider>
  );
}

function Option({ value, children }) {
  const { selectedFilter, setSelectedFilter } = React.useContext(
    PopulationAreaFilterContext
  );
  return (
    <button
      className={`pop-area-filter-btn${
        selectedFilter === value ? " selected" : ""
      }`}
      onClick={(e) => {
        setSelectedFilter(value === selectedFilter ? "" : value);
        e.target.blur();
      }}
    >
      {children}
    </button>
  );
}

PopulationAreaFilter.Option = Option;

export default PopulationAreaFilter;
