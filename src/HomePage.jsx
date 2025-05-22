import React, { useState } from "react";
import "./homepage.css";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountryList from "./components/CountryList";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
import PopulationAreaFilter from "./components/PopulationAreaFilter";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <div className="modern-bg">
      <div className="hero">
        <div className="hero-logo">
          <span role="img" aria-label="globe" style={{ fontSize: 48 }}>
            🌍
          </span>
        </div>
        <h1 className="hero-title">World Countries Explorer</h1>
        <p className="hero-desc">
          Discover facts, flags, and details about every country on Earth.
        </p>
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="main-content">
        <div className="filter-group-container">
          <h3 className="filter-group-title">Filters</h3>
          <div className="filter-group-row">
            <RegionFilter
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
            <PopulationAreaFilter
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </div>
        </div>
        <CountryList
          search={search}
          region={selectedRegion}
          filter={selectedFilter}
        />
        {/* <Loader /> */}
      </div>
      <BackToTop />
    </div>
  );
};

export default HomePage;
