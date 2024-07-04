import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Navbar = ({ isLoading }) => {
  return (
    <>
      <nav className="flex justify-between items-center w-[80%] mx-auto py-6">
        <div className="text-xl font-bold">
          {isLoading ? (
            <Skeleton height={32} width={120} />
          ) : (
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap font-dm-sans">
              JobDekho
            </h1>
          )}
        </div>
        <div className="flex space-x-8">
          {isLoading ? (
            <>
              <Skeleton height={24} width={80} />
              <Skeleton height={24} width={80} />
              <Skeleton height={24} width={80} />
              <Skeleton height={24} width={80} />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {isLoading ? (
            <>
              <Skeleton circle height={32} width={32} />
              <Skeleton height={32} width={80} />
            </>
          ) : (
            <>
              <img
                src="https://via.placeholder.com/30"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="hover:text-gray-400 cursor-pointer bg-blue-600 px-2 py-1 text-white rounded-lg shadow-md w-20 text-center font-semibold">
                Logout
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
