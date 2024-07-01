import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between w-[80%] mx-auto py-6">
        <div className="text-xl font-bold">
          <h1 className="self-center text-2xl font-semibold whitespace-nowrap font-dm-sans dark:text-">
            JobDekho
          </h1>
        </div>
        <div className="flex space-x-8">
          <h1 className="hover:text-gray-400 cursor-pointer font-dm-sans">
            Start Search
          </h1>
          <h1 className="hover:text-gray-400 cursor-pointer font-dm-sans">
            My jobs
          </h1>
          <h1 className="hover:text-gray-400 cursor-pointer font-dm-sans">
            Salary
          </h1>
          <h1 className="hover:text-gray-400 cursor-pointer font-dm-sans">
            Post A job
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/30"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="hover:text-gray-400 cursor-pointer bg-blue-600 px-2 py-1 text-white rounded-lg shadow-md w-20 text-center font-semibold ">
            Logout
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
