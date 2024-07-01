import React, { useState } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { IoMdJet } from "react-icons/io";
const NewsLatter = () => {
  const [email, setEmail] = useState("");
  const emailHandlers = (e) => {
    setEmail(e.target.value);
  };
  const emailSubscribe = () => {
    alert("Email Subscribed", email);
    setEmail("");
  };
  return (
    <div className="w-[30%] mr-8 ">
      <div className="  shadow-sm bg-white rounded-md">
        <div className="flex items-center gap-1 ">
          <MdMarkEmailRead className="ml-4 mt-4" />
          <h1 className="font-semibold mt-4">Email me For jobs</h1>
        </div>
        <h1 className="text-sm  p-4">
          Subscribe to our newsletter for the latest news, offers, and exclusive
          content. Enter your email to stay updated on promotions and special
          announcements. Join us today!
        </h1>
        <div className="p-4">
          <input
            onChange={emailHandlers}
            className=" border border-gray-200 w-[100%] p-4"
            type="email"
            placeholder="Enter your email"
            value={email}
          />
          <button
            onClick={emailSubscribe}
            className="bg-blue-600 text-center w-full p-3 rounded-md mt-4 text-white font-semibold"
          >
            Subsribe
          </button>
        </div>
      </div>
      <div className="  shadow-sm bg-white rounded-md mt-4">
        <div className="flex items-center gap-1 ">
          <IoMdJet className="ml-4 mt-4" />
          <h1 className="font-semibold mt-4">Get Noticed Faster</h1>
        </div>
        <h1 className="text-sm  p-4">
          Enhance your presence and grab attention quickly. Get noticed faster
          with our proven strategies. Achieve greater recognition and reach your
          goals efficiently.
        </h1>
        <div className="p-4">
          <input type="file" className="mr-4" />
          <button className="bg-blue-600 text-center w-full p-3 rounded-md mt-4 text-white font-semibold">
            Upload Your resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
