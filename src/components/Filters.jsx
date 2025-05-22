import React from "react";
import { MdFilterList } from "react-icons/md";

const Filters = () => (
  <div className="filters-container">
    <div className="filters-row">
      <div className="filters-col">
        <h3 className="filters-label">Filter by Population</h3>
        <select className="filters-select">
          <option value="">Any population</option>
          <option value="under-10m">Under 10 million</option>
          <option value="10m-100m">10-100 million</option>
          <option value="100m-500m">100-500 million</option>
          <option value="500m-1b">500 million - 1 billion</option>
          <option value="over-1b">Over 1 billion</option>
        </select>
      </div>
      <div className="filters-col">
        <h3 className="filters-label">Filter by Area</h3>
        <select className="filters-select">
          <option value="">Any area</option>
          <option value="under-100k">Under 100,000 km²</option>
          <option value="100k-500k">100,000-500,000 km²</option>
          <option value="500k-1m">500,000-1 million km²</option>
          <option value="1m-5m">1-5 million km²</option>
          <option value="over-5m">Over 5 million km²</option>
        </select>
      </div>
      <div className="filters-action">
        <button className="filters-btn">
          <MdFilterList className="filters-btn-icon" />
          Apply Filters
        </button>
      </div>
    </div>
  </div>
);

export default Filters;
