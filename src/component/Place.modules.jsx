import { useState } from "react";

const Place = ({ filteredJobs }) => {
  const [searchh, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const displayLoc = filteredJobs.slice(0, 6);
  const uniqueLocations = Array.from(
    new Set(displayLoc.map((job) => job.location.toLowerCase()))
  ).map((location) => {
    return displayLoc.find((job) => job.location.toLowerCase() === location);
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
      <label className="flex mt-4 gap-2 text-sm">
        <input type="checkbox" className="mr-2 rounded-full" />
        <h1 className="font-dm-sans">All</h1>
      </label>
      {uniqueLocations
        .filter((loc) => {
          return loc.location.toLowerCase().includes(searchh.toLowerCase());
        })
        .map((location, index) => (
          <label key={index} className="flex mt-2 gap-2">
            <input
              type="checkbox"
              className="mr-2 rounded-full cursor-pointer"
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
