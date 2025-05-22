import React from "react";
import { MdRefresh } from "react-icons/md";
import "./Loader.css";

const Loader = () => (
  <div className="loader-container">
    <div className="loader-icon">
      <MdRefresh className="loader-spin" />
    </div>
    <p className="loader-text">Loading more countries...</p>
  </div>
);

export default Loader;
