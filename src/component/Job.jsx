import React from "react";
import Avatar from "react-avatar";
import { IoLocation } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
const Job = () => {
  return (
    <div className="w-full md:w-[60%] h-[50rem] shadow-sm bg-white rounded-md overflow-y-auto">
      <div className="p-4">
        <div className="font-semibold text-xl">Jobs</div>
      </div>
      <div className="border border-gray-200 mx-4 my-2 p-4 flex flex-col md:flex-row space-x-4">
        <Avatar
          src="https://shorturl.at/amX9z"
          size="70"
          className="rounded-md border border-gray-200"
        />
        <div className="text-sm flex-1 ">
          <div className=" font-semibold text-gray-700">Linear Company</div>
          <div className="font-semibold text-gray-800 mt-3">
            Software Development level 1
          </div>
          <div className="flex items-center gap-2 flex-wrap mt-3">
            <IoLocation />
            <span>Brusia</span>
            <IoMdTime />
            <span>Full-time</span>
            <FaDollarSign />
            <span>60-90k</span>
            <CiCalendarDate />
            <span>2023-10-28</span>
          </div>
          <div className="text-sm mt-3">
            Welcome to accenture.com! In order to provide a more relevant
            experience for you, we use cookies to enable some website
            functionality. Cookies help us see which articles most interest you;
            allow you to easily share articles on social media; permit us to
            deliver content, jobs and ads tailored to your interests and
            locations; and provide many other site benefits. For more
            information, please review our{" "}
          </div>
          <div className="bg-blue-600 w-60 p-2 mt-3 text-center rounded-lg text-white font-semibold cursor-pointer">
            Job Descriptions View and apply
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
