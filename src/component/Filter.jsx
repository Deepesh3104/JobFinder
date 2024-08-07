import Place from "./Place.modules";
import Salary from "./Salary.modules";
// import { useState } from "react";
const Filter = ({ filteredJobs, setLocation }) => {
  // const [filter, setFilter] = useState;
  return (
    <div className="w-[30%] ">
      <div className="  shadow-sm bg-white rounded-md p-4">
        <div className=" font-dm-sans font-bold">Filter</div>
        <Place filteredJobs={filteredJobs} setLocation={setLocation} />
        <Salary />
      </div>
    </div>
  );
};

export default Filter;
