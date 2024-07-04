import React, { useState, useEffect } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Jobcomponents from "./jobs.component";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Job = ({ jobtitle, jobs, filteredJobs, isLoading }) => {
  const [page, setPage] = useState(1);
  const Jobperpage = 3;

  const decrease = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  const increase = () => {
    const totalJobs = jobtitle ? filteredJobs.length : jobs.length;
    const totalPages = Math.ceil(totalJobs / Jobperpage);

    if (page < totalPages) {
      setPage(page + 1);
    } else {
      alert("No more jobs found");
      setPage(1);
    }
  };

  return (
    <div className="w-full md:w-[60%] pb-4 shadow-sm bg-white rounded-md flex flex-col justify-between">
      <div>
        <div className="p-4 space-x-4">
          <div className="font-semibold text-xl flex items-center space-x-2">
            <span className="font-dm-sans">
              {isLoading ? (
                <Skeleton width={200} />
              ) : jobtitle ? (
                `Jobs ${filteredJobs.length}`
              ) : (
                `Total jobs: ${jobs.length}`
              )}
            </span>
          </div>
        </div>

        {isLoading ? (
          <div className="p-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="mb-4">
                <Skeleton height={100} />
              </div>
            ))}
          </div>
        ) : (
          <Jobcomponents
            Jobperpage={Jobperpage}
            page={page}
            jobs={jobs}
            jobtitle={jobtitle}
            filteredJobs={filteredJobs}
            isLoading={isLoading}
          />
        )}
      </div>
      <div className="flex items-center justify-center mb-4 mt-2">
        <FaLongArrowAltLeft
          onClick={decrease}
          className="cursor-pointer"
          values={page}
        />
        <h1 className="mx-2 font-semibold">
          Page <span className="text-blue-600">{page}</span>
        </h1>
        <FaLongArrowAltRight onClick={increase} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Job;
