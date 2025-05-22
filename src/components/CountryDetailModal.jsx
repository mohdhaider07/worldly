import React, { useEffect, useState } from "react";
import "./CountryCard.css";
import "./CountryDetailModal.css";
import { apiRequest } from "../requestMethod";
import Loader from "./Loader";

const CountryDetailModal = ({ isOpen, onClose, countryName }) => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen || !countryName) return;
    setLoading(true);
    setError("");
    setCountry(null);
    apiRequest
      .get(`/countries/${countryName.toLowerCase()}`)
      .then((res) => {
        setCountry(res.data.data);
      })
      .catch(() => {
        setError("Failed to fetch country details.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [isOpen, countryName]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content card-elevated">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="modal-error">{error}</div>
        ) : country ? (
          <>
            <div className="modal-header">
              <div className="modal-flag-large">
                <img src={country.flag} alt={`${country.name} flag`} />
              </div>
              <h2 className="modal-country-name">{country.name}</h2>
            </div>
            <div className="modal-info-grid">
              <div className="modal-info-item">
                <span
                  className="modal-info-icon"
                  role="img"
                  aria-label="Capital"
                >
                  🏛️
                </span>
                <span className="modal-info-label">Capital</span>
                <span className="modal-info-value">{country.capital}</span>
              </div>
              <div className="modal-info-item">
                <span
                  className="modal-info-icon"
                  role="img"
                  aria-label="Region"
                >
                  🌍
                </span>
                <span className="modal-info-label">Region</span>
                <span className="modal-info-value region-pill">
                  {country.region}
                </span>
              </div>
              <div className="modal-info-item">
                <span
                  className="modal-info-icon"
                  role="img"
                  aria-label="Subregion"
                >
                  🗺️
                </span>
                <span className="modal-info-label">Subregion</span>
                <span className="modal-info-value subregion-pill">
                  {country.subregion}
                </span>
              </div>
              <div className="modal-info-item">
                <span
                  className="modal-info-icon"
                  role="img"
                  aria-label="Population"
                >
                  👥
                </span>
                <span className="modal-info-label">Population</span>
                <span className="modal-info-value">
                  {country.population.toLocaleString()}
                </span>
              </div>
              <div className="modal-info-item">
                <span className="modal-info-icon" role="img" aria-label="Area">
                  📏
                </span>
                <span className="modal-info-label">Area</span>
                <span className="modal-info-value">
                  {country.area.toLocaleString()} km²
                </span>
              </div>
              <div className="modal-info-item">
                <span
                  className="modal-info-icon"
                  role="img"
                  aria-label="Coordinates"
                >
                  📍
                </span>
                <span className="modal-info-label">Coordinates</span>
                <span className="modal-info-value">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${country.coordinates.latitude},${country.coordinates.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-coords-link"
                  >
                    {country.coordinates.latitude},{" "}
                    {country.coordinates.longitude}
                  </a>
                </span>
              </div>
              <div className="modal-info-item">
                <span
                  className="modal-info-icon"
                  role="img"
                  aria-label="Borders"
                >
                  🚧
                </span>
                <span className="modal-info-label">Borders</span>
                <span className="modal-info-value">
                  {country.borders && country.borders.length
                    ? country.borders.map((b, i) => (
                        <span key={b} className="modal-border-pill">{`${b}${
                          i < country.borders.length - 1 ? ", " : ""
                        }`}</span>
                      ))
                    : "None"}
                </span>
              </div>
              <div className="modal-info-item">
                <span
                  className="modal-info-icon"
                  role="img"
                  aria-label="Timezones"
                >
                  ⏰
                </span>
                <span className="modal-info-label">Timezones</span>
                <span className="modal-info-value timezone-pill">
                  {country.timezones && country.timezones.length
                    ? country.timezones.join(", ")
                    : "N/A"}
                </span>
              </div>
              <div className="modal-info-item">
                <span
                  className="modal-info-icon"
                  role="img"
                  aria-label="Currency"
                >
                  💰
                </span>
                <span className="modal-info-label">Currency</span>
                <span className="modal-info-value">{country.currency}</span>
              </div>
              <div className="modal-info-item">
                <span
                  className="modal-info-icon"
                  role="img"
                  aria-label="Languages"
                >
                  🗣️
                </span>
                <span className="modal-info-label">Languages</span>
                <span className="modal-info-value">
                  {country.languages && country.languages.length
                    ? country.languages.map((lang, i) => (
                        <span key={lang} className="modal-lang-pill">{`${lang}${
                          i < country.languages.length - 1 ? ", " : ""
                        }`}</span>
                      ))
                    : "N/A"}
                </span>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CountryDetailModal;
