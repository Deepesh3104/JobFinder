import React, { useState, useEffect } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { IoMdJet } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewsLatter = ({ isLoading }) => {
  const [email, setEmail] = useState("");
  const emailHandlers = (e) => {
    setEmail(e.target.value);
  };
  const emailSubscribe = () => {
    alert("Email Subscribed", email);
    setEmail("");
  };

  return (
    <div className="w-[30%] mr-8">
      <div className="shadow-sm bg-white rounded-md">
        <div className="flex items-center gap-1">
          {isLoading ? (
            <Skeleton circle height={24} width={24} />
          ) : (
            <MdMarkEmailRead className="ml-4 mt-4" />
          )}
          <h1 className="font-semibold mt-4 font-dm-sans">
            {isLoading ? <Skeleton width={150} /> : "Email me For jobs"}
          </h1>
        </div>
        <h1 className="text-sm p-4 font-dm-sans">
          {isLoading ? (
            <Skeleton count={3} />
          ) : (
            "Subscribe to our newsletter for the latest news, offers, and exclusive content. Enter your email to stay updated on promotions and special announcements. Join us today!"
          )}
        </h1>
        <div className="p-4">
          {isLoading ? (
            <Skeleton height={40} />
          ) : (
            <input
              onChange={emailHandlers}
              className="border border-gray-200 w-[100%] p-4 font-dm-sans"
              type="email"
              placeholder="Enter your email"
              value={email}
            />
          )}
          {isLoading ? (
            <Skeleton height={40} style={{ marginTop: "16px" }} />
          ) : (
            <button
              onClick={emailSubscribe}
              className="bg-blue-600 font-dm-sans text-center w-full p-3 rounded-md mt-4 text-white font-semibold"
            >
              Subscribe
            </button>
          )}
        </div>
      </div>
      <div className="shadow-sm bg-white rounded-md mt-4">
        <div className="flex items-center gap-1">
          {isLoading ? (
            <Skeleton circle height={24} width={24} />
          ) : (
            <IoMdJet className="ml-4 mt-4" />
          )}
          <h1 className="font-semibold mt-4 font-dm-sans">
            {isLoading ? <Skeleton width={150} /> : "Get Noticed Faster"}
          </h1>
        </div>
        <h1 className="text-sm p-4 font-dm-sans">
          {isLoading ? (
            <Skeleton count={3} />
          ) : (
            "Enhance your presence and grab attention quickly. Get noticed faster with our proven strategies. Achieve greater recognition and reach your goals efficiently."
          )}
        </h1>
        <div className="p-4">
          {isLoading ? (
            <Skeleton height={40} width={"100%"} />
          ) : (
            <input type="file" className="mr-4 font-dm-sans" />
          )}
          {isLoading ? (
            <Skeleton height={40} style={{ marginTop: "16px" }} />
          ) : (
            <button className="bg-blue-600 font-dm-sans text-center w-full p-3 rounded-md mt-4 text-white font-semibold">
              Upload Your Resume
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
