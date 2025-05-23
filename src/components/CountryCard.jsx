import React from "react";
import {
  MdLocationCity,
  MdPublic,
  MdGroup,
  MdStraighten,
  MdExpandMore,
} from "react-icons/md";
import "./CountryCard.css";

const CountryCard = React.memo(
  ({ name, flag, capital, region, population, area, onMoreInfo }) => {
    return (
      <div className="country-card card-elevated">
        <div className="country-flag-top">
          <img
            src={flag}
            alt={`${name} flag`}
            className="country-flag-img-top"
          />
        </div>
        <div className="country-content-top">
          <h2 className="country-title-top">{name}</h2>
          <div className="country-info-list-top">
            <div className="country-info-row-top">
              <MdLocationCity className="country-info-icon-top" />
              <span>Capital:</span>{" "}
              <span className="country-info-value">{capital}</span>
            </div>
            <div className="country-info-row-top">
              <MdPublic className="country-info-icon-top" />
              <span>Region:</span>{" "}
              <span className="country-info-value">{region}</span>
            </div>
            <div className="country-info-row-top">
              <MdGroup className="country-info-icon-top" />
              <span>Population:</span>{" "}
              <span className="country-info-value">{population}</span>
            </div>
            <div className="country-info-row-top">
              <MdStraighten className="country-info-icon-top" />
              <span>Area:</span>{" "}
              <span className="country-info-value">{area}</span>
            </div>
            <div className="country-info-row-top">
              <MdExpandMore className="country-info-icon-top" />
              <span>More Info:</span>{" "}
              <span
                className="country-info-value country-more-info-link"
                onClick={onMoreInfo}
                style={{
                  cursor: "pointer",
                  color: "#1976d2",
                  textDecoration: "underline",
                }}
              >
                Click here
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CountryCard;
