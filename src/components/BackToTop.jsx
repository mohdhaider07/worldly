import React from "react";
import { MdArrowUpward } from "react-icons/md";
import "./BackToTop.css";

const BackToTop = () => (
  <div className="backtotop-container">
    <button
      className="backtotop-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <MdArrowUpward />
    </button>
    <span className="backtotop-tooltip">Back to top</span>
  </div>
);

export default BackToTop;
