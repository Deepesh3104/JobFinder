const Place = ({jobs}) => {
  return (
    <div>
      <h1 className="font-dm-sans font-semibold mt-3 ">Locations</h1>
      <label className="flex mt-4 gap-2 text-sm">
        <input type="checkbox" className="mr-2 rounded-full" />
        <h1 classname="font-dm-sans ">All</h1>
      </label>
      <label className="flex mt-2 gap-2">
        <input type="checkbox" className="mr-2 rounded-full" />
        <h1 classname="font-dm-sans text-sm">Banglore</h1>
      </label>
      <label className="flex mt-2 gap-2">
        <input type="checkbox" className="mr-2 rounded-full" />
        <h1 classname="font-dm-sans text-sm">Pune</h1>
      </label>
      <label className="flex mt-2 gap-2">
        <input type="checkbox" className="mr-2 rounded-full" />
        <h1 classname="font-dm-sans text-sm">Mumbai</h1>
      </label>
      <label className="flex mt-2 gap-2">
        <input type="checkbox" className="mr-2 rounded-full" />
        <h1 classname="font-dm-sans text-sm">Noida</h1>
      </label>
      <label className="flex mt-2 gap-2">
        <input type="checkbox" className="mr-2 rounded-full" />
        <h1 classname="font-dm-sans text-sm">Delhi</h1>
      </label>
    </div>
  );
};

export default Place;
