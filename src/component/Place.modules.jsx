import React, { useState } from "react";

const Place = ({ filteredJobs, setLocation }) => {
  const [searchh, setSearch] = useState(""); // State for search input
  const [selectedLocation, setSelectedLocation] = useState(""); // State for selected location

  // Function to handle search input change
  const handleSearch = (e) => {
    setSearch(e.target.value); // Update search input state
  };

  // Function to handle location checkbox change
  const handleLocationChange = (location) => {
    if (selectedLocation === location) {
      setSelectedLocation(""); // Toggle off if already selected
      setLocation(""); // Notify parent component about location change
      setSearch("");
    } else {
      setSelectedLocation(location); // Update selected location state
      setLocation(location); // Notify parent component about location change
    }
  };

  // Remove duplicate locations
  const uniqueLocations = Array.from(
    new Set(filteredJobs.map((job) => job.location.toLowerCase()))
  ).map((location) => {
    return filteredJobs.find((job) => job.location.toLowerCase() === location);
  });

  return (
    <div>
      <h1 className="font-dm-sans font-semibold mt-3">Locations</h1>
      <input
        onChange={handleSearch}
        className="font-dm-sans p-2 mt-2 border border-gray-200 cursor-pointer"
        placeholder="Enter a Place"
        value={searchh}
      />
      {/* <label className="flex mt-4 gap-2 text-sm">
        <input
          type="checkbox"
          className="mr-2 rounded-full"
          checked={selectedLocation === location.location}
          onChange={() => handleLocationChange("")}
        />
        <h1 className="font-dm-sans">All</h1>
      </label> */}
      {uniqueLocations
        .filter((loc) => {
          return loc.location.toLowerCase().includes(searchh.toLowerCase());
        })
        .map((location, index) => (
          <label key={index} className="flex mt-2 gap-2">
            <input
              type="checkbox"
              className="mr-2 rounded-full cursor-pointer"
              checked={selectedLocation === location.location}
              onChange={() => handleLocationChange(location.location)}
            />
            <h1 className="font-dm-sans text-sm cursor-pointer">
              {location.location}
            </h1>
          </label>
        ))}
    </div>
  );
};

export default Place;
