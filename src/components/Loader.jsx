import React from "react";
import { MdRefresh } from "react-icons/md";
import "./Loader.css";

const Loader = ({ render }) => (
  <div className="loader-container">
    <div className="loader-icon">
      <MdRefresh className="loader-spin" />
    </div>
    {render ? render() : <p className="loader-text">Loading...</p>}
  </div>
);

export default Loader;
