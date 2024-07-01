import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Jobcomponents from "./jobs.component";
import axios from "axios";
import { useState, useEffect } from "react";
import companies from "./CompaniesData";

const Job = () => {
  const [page, setPage] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const Jobperpage = 3;

  const decrease = () => {
    setPage(page > 1 ? page - 1 : 1);
  };
  const increase = () => {
    const indexOfLastJob = page * Jobperpage;
    const indexOfFirstJob = indexOfLastJob - Jobperpage;
    const currentJobs = companies.slice(indexOfFirstJob, indexOfLastJob);
    if (currentJobs.length == 0) {
      alert("No more job founds", page - 1);
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div className="w-full md:w-[60%] h-[50rem] shadow-sm bg-white rounded-md flex flex-col justify-between">
      <div>
        <div className="p-4">
          <div className="font-semibold text-xl">Jobs</div>
        </div>
        <Jobcomponents
          Jobperpage={Jobperpage}
          page={page}
          companies={companies}
        />
      </div>
      <div className="flex items-center justify-center mb-4">
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
