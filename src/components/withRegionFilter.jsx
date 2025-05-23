import React, { useState } from "react";

// HOC to add region filtering logic
export function withRegionFilter(WrappedComponent) {
  return function WithRegionFilter(props) {
    const [selectedRegion, setSelectedRegion] = useState("");
    return (
      <WrappedComponent
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        {...props}
      />
    );
  };
}
