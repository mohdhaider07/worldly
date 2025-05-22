import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Loader from "./Loader";
import { apiRequest } from "../requestMethod";
import CountryDetailModal from "./CountryDetailModal";

const PAGE_SIZE = 20;

const CountryList = ({ search, region, filter }) => {
  const [countries, setCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const res = await apiRequest.get("/countries");
        setCountries(res.data.data || []);
      } catch (err) {
        console.error("Error fetching countries:", err);
        setCountries([]);
      }
      setLoading(false);
    };
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes((search || "").toLowerCase());
    const matchesRegion = !region || country.region === region;
    return matchesSearch && matchesRegion;
  });

  let displayCountries = filteredCountries;

  if (filter === "most-populated") {
    displayCountries = [...filteredCountries].sort(
      (a, b) => (b.population || 0) - (a.population || 0)
    );
  } else if (filter === "least-populated") {
    displayCountries = [...filteredCountries].sort(
      (a, b) => (a.population || 0) - (b.population || 0)
    );
  } else if (filter === "biggest") {
    displayCountries = [...filteredCountries].sort(
      (a, b) => (b.area || 0) - (a.area || 0)
    );
  } else if (filter === "smallest") {
    displayCountries = [...filteredCountries]
      .filter((c) => c.area > 0)
      .sort((a, b) => a.area - b.area);
  }

  // Reset visibleCount if filter changes (optional, for better UX)
  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, region, filter]);

  return (
    <>
      <div className="country-list" id="countries-container">
        {displayCountries.slice(0, visibleCount).map((country) => (
          <CountryCard
            key={country.name}
            name={country.name}
            flag={country.flag}
            capital={country.capital}
            region={country.region}
            population={country.population}
            area={country.area}
            onMoreInfo={() => {
              setSelectedCountry(country.name);
              setModalOpen(true);
            }}
          />
        ))}
      </div>
      {loading && <Loader />}
      {!loading && visibleCount < displayCountries.length && (
        <div style={{ textAlign: "center", margin: "32px 0" }}>
          <button
            className="main-action-btn"
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
          >
            Show More Countries
          </button>
        </div>
      )}
      <CountryDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        countryName={selectedCountry}
      />
    </>
  );
};

export default CountryList;
