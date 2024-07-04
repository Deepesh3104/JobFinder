const Salary = () => {
  return (
    <div>
      <h1 className="font-dm-sans font-semibold mt-5">Salary</h1>
      <div className="flex mt-4 gap-2 justify-between ">
        <h1 className="border border-gray-200 p-2 font-dm-sans hover:bg-blue-600 hover:text-white cursor-pointer">
          Hourly
        </h1>
        <h1 className="border border-gray-200 p-2 font-dm-sans hover:bg-blue-600 hover:text-white cursor-pointer">
          Monthly
        </h1>
        <h1 className="font-dm-sans border border-gray-200 p-2 hover:bg-blue-600 hover:text-white cursor-pointer">
          Yearly
        </h1>
      </div>
      <div className="flex mt-3 gap-2">
        <input type="checkbox" className="mr-2 rounded-full" />
        <h1 classname="font-dm-sans text-sm">Banglore</h1>
      </div>
      <div className="flex mt-2 gap-2">
        <input type="checkbox" className="mr-2 rounded-full" />
        <h1 classname="font-dm-sans text-sm">Pune</h1>
      </div>
      <div className="flex mt-2 gap-2">
        <input type="checkbox" className="mr-2 rounded-full" />
        <h1 classname="font-dm-sans text-sm">Mumbai</h1>
      </div>
      <div className="flex mt-2 gap-2">
        <input type="checkbox" className="mr-2 rounded-full" />
        <h1 classname="font-dm-sans text-sm">Noida</h1>
      </div>
      <div className="flex mt-2 gap-2">
        <input type="checkbox" className="mr-2 rounded-full" />
        <h1 classname="font-dm-sans text-sm">Delhi</h1>
      </div>
    </div>
  );
};

export default Salary;
