import React from "react";
import Avatar from "react-avatar";
import { IoLocation } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Jobcomponents = ({
  page,
  Jobperpage,
  filteredJobs,
  isLoading,
  
}) => {
  const indexLastjob = page * Jobperpage;
  const indexFirstjob = indexLastjob - Jobperpage;
  const currenJob = filteredJobs.slice(indexFirstjob, indexLastjob);

  return (
    <div>
      {isLoading
        ? Array(Jobperpage)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="border border-gray-200 mx-4 my-4 p-4 flex flex-col md:flex-row space-x-4"
              >
                <Skeleton circle={true} height={70} width={70} />
                <div className="text-sm flex-1">
                  <Skeleton height={20} width={`80%`} />
                  <Skeleton
                    height={20}
                    width={`60%`}
                    style={{ marginTop: 8 }}
                  />
                  <div className="items-center gap-2 flex flex-wrap mt-3">
                    <Skeleton height={20} width={20} />
                    <Skeleton height={20} width={100} />
                    <Skeleton height={20} width={20} />
                    <Skeleton height={20} width={100} />
                    <Skeleton height={20} width={20} />
                    <Skeleton height={20} width={100} />
                    <Skeleton height={20} width={20} />
                    <Skeleton height={20} width={100} />
                  </div>
                  <Skeleton
                    height={60}
                    width={`100%`}
                    style={{ marginTop: 8 }}
                  />
                  <Skeleton height={40} width={240} style={{ marginTop: 8 }} />
                </div>
              </div>
            ))
        : currenJob.map((companie, index) => (
            <div
              key={index}
              className="border border-gray-200 mx-4 my-4 p-4 flex flex-col md:flex-row space-x-4"
            >
              <Avatar
                src={companie.avatarUrl}
                size="70"
                className="rounded-md border border-gray-200"
              />
              <div className="text-sm flex-1 ">
                <div className=" font-semibold text-gray-700 font-dm-sans">
                  {companie.name}
                </div>
                <div className="font-semibold text-gray-800 mt-3 font-dm-sans">
                  {companie.position}
                </div>
                <div className=" items-center gap-2 flex flex-wrap mt-3">
                  <IoLocation />
                  <span className="font-dm-sans">{companie.location}</span>
                  <IoMdTime />
                  <span className="font-dm-sans">{companie.type}</span>
                  <FaDollarSign />
                  <span className="font-dm-sans">{companie.salary}</span>
                  <CiCalendarDate />
                  <span className="font-dm-sans">{companie.datePosted}</span>
                </div>
                <div className="text-sm mt-3 mr-8 font-dm-sans">
                  {companie.description}
                </div>
                <div className="bg-blue-600 w-60 p-2 font-dm-sans mt-3 mr-3 text-center rounded-lg text-white font-semibold cursor-pointer ">
                  Job Descriptions View and apply
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Jobcomponents;
