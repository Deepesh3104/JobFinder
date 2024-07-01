import React from "react";
import Filter from "./Filter";
import Job from "./Job";
import NewsLatter from "./NewsLatter";

const JobModules = ({ jobtitle, jobs, filteredJobs }) => {
  return (
    <div className="bg-gray-100 w-[90%] rounded-md mx-auto flex px-10 py-10 mt-16 space-x-4">
      <Filter />
      <Job jobs={jobs} jobtitle={jobtitle} filteredJobs={filteredJobs} />
      <NewsLatter />
    </div>
  );
};

export default JobModules;
