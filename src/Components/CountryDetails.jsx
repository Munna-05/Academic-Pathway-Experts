import React from "react";

const CountryDetails = ({ data }) => {
  console.log("🚀 ~ file: CountryDetails.jsx:4 ~ CountryDetails ~ data:", data);
  window.scrollTo(0, 0);
  return (
    <div className="w-3/4 mx-auto p-4 flex gap-10">
      <div className="w-2/3 text-left pb-32 ">
        <img
          className="rounded-lg"
          src="https://images.pexels.com/photos/1222438/pexels-photo-1222438.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />

        <h1 className=" text-4xl text-stone-700 font-bold my-6">{data.name}</h1>
        <p className="text-left mb-2">{data.description}</p>
        <p className="text-left">{data.benefits.description}</p>
      </div>
      <div className="w-1/3 text-left py-3  rounded-lg bg-stone-50 ring-1 ring-stone-300">
      <iframe className="h-full w-full " src="https://docs.google.com/forms/d/e/1FAIpQLSfskLcclpaEhroU63ZpiN6jfhfTaLdPvvhOVB-nZDSDIG_heg/viewform?embedded=true" width="640" height="818" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
      
    </div>
  );
};

export default CountryDetails;
