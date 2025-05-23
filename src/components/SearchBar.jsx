import React from "react";
import { MdSearch, MdTravelExplore } from "react-icons/md";
import "./SearchBar.css";

const SearchBar = React.memo(({ search, setSearch }) => (
  <div className="searchbar-container searchbar-dark">
    <span className="searchbar-icon searchbar-icon-dark">
      <MdSearch />
    </span>
    <input
      type="text"
      placeholder="Search for a country..."
      className="searchbar-input searchbar-input-dark"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <button className="searchbar-btn searchbar-btn-dark">
      <MdTravelExplore />
    </button>
  </div>
));

export default SearchBar;
