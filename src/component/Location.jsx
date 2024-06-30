import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <div className="bg-gray-100 w-[77%] m-auto p-8 mt-8 rounded-lg shadow-lg">
      <h1 className="py-4 text-5xl font-sans font-medium">
        Find your <span className="text-blue-600">new job</span> today
      </h1>
      <h1>
        Thousands of jobs in the Computer Engineering sector are waiting for you
      </h1>
      <div className="flex mt-8 space-x-4">
        <div className="relative flex-grow">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faBriefcase} className="text-gray-500" />
          </span>
          <input
            className="w-full pl-10 shadow-md p-2 rounded-lg outline-none"
            placeholder="Enter a job title"
          />
        </div>
        <div className="relative flex-grow">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500" />
          </span>
          <input
            className="w-full pl-10 shadow-md p-2 rounded-lg outline-none"
            placeholder="Enter a job location"
          />
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold">
          Search
        </button>
      </div>
    </div>
  );
};

export default Location;
