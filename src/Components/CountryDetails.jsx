import React from "react";
import EnquiryForm from "./EnquiryForm";

const CountryDetails = ({ data }) => {
  console.log("🚀 ~ file: CountryDetails.jsx:4 ~ CountryDetails ~ data:", data);
 
  return (
    <div className="lg:w-4/5 h-screen mx-auto p-12 lg:flex md:flex gap-10">
      <div className="w-2/3 mx-auto text-left pb-12 ">
        <img
          className="rounded-lg"
          src="https://images.pexels.com/photos/1222438/pexels-photo-1222438.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />

        <h1 className=" text-4xl text-stone-700 font-bold my-6">{data.name}</h1>
        <p className="text-left mb-2">{data.description}</p>
        <p className="text-left">{data.benefits.description}</p>
      </div>
      <div className="lg:w-1/3 md:w-1/3 w-full text-left py-3 h-screen ">
        {/* <iframe
          className="h-full w-full"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfskLcclpaEhroU63ZpiN6jfhfTaLdPvvhOVB-nZDSDIG_heg/viewform?embedded=true"
          width="640"
          height="818"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe> */}
        <EnquiryForm/>
      </div>
    </div>
  );
};

export default CountryDetails;
