import Avatar from "react-avatar";
import { IoLocation } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

const Jobcomponents = ({ companies, page, Jobperpage }) => {
  const indexLastjob = page * Jobperpage;
  const indexFirstjob = indexLastjob - Jobperpage;
  const currenJob = companies.slice(indexFirstjob, indexLastjob);
  return (
    <div>
      {currenJob.map((companie, index) => (
        <div className="border border-gray-200 mx-4 my-2 p-4 flex flex-col md:flex-row space-x-4">
          <Avatar
            src={companie.avatarUrl}
            size="70"
            className="rounded-md border border-gray-200"
          />
          <div className="text-sm flex-1 ">
            <div className=" font-semibold text-gray-700">{companie.name}</div>
            <div className="font-semibold text-gray-800 mt-3">
              {companie.position}
            </div>
            <div className=" items-center gap-2 flex flex-wrap mt-3">
              <IoLocation />
              <span>{companie.location}</span>
              <IoMdTime />
              <span>{companie.type}</span>
              <FaDollarSign />
              <span>{companie.salary}</span>
              <CiCalendarDate />
              <span>{companie.datePosted}</span>
            </div>
            <div className="text-sm mt-3 mr-8">{companie.description}</div>
            <div className="bg-blue-600 w-60 p-2 mt-3 mr-3 text-center rounded-lg text-white font-semibold cursor-pointer ">
              Job Descriptions View and apply
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobcomponents;
