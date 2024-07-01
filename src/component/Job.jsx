import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Jobcomponents from "./jobs.component";
import axios from "axios";
import { useState, useEffect } from "react";

const Job = ({ jobtitle, jobs, filteredJobs }) => {
  const [page, setPage] = useState(1);

  const Jobperpage = 3;

  const decrease = () => {
    setPage(page > 1 ? page - 1 : 1);
  };
  // const increase = () => {
  //   const indexOfLastJob = page * Jobperpage;
  //   const indexOfFirstJob = indexOfLastJob - Jobperpage;
  //   const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  //   if (currentJobs.length == 0 || filteredJobs.length === 0) {
  //     alert("No more job founds", page - 1);
  //     setPage(1);
  //   } else {
  //     setPage(page + 1);
  //   }
  // };
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
              {jobtitle
                ? `Jobs ${filteredJobs.length}`
                : `Total jobs: ${jobs.length}`}
            </span>
          </div>
        </div>

        <Jobcomponents
          Jobperpage={Jobperpage}
          page={page}
          jobs={jobs}
          jobtitle={jobtitle}
          filteredJobs={filteredJobs}
        />
      </div>
      <div className="flex items-center justify-center mb-4 mt-2">
        <FaLongArrowAltLeft
          onClick={decrease}
          values={page}
          className="cursor-pointer"
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
