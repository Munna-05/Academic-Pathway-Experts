import React from "react";
import { VIEW } from "../API";
import LongParagraphComponent from "./LongParagraphComponent";
import OurServices from "./OurServices";
import BlogPostComponent from "./BlogPostComponent";
import Services from "../Pages/Services";
import { useSelector } from "react-redux";
import AllServices from "./AllServices";

const ServiceDetails = ({ data }) => {
    const services = useSelector(state=>state.services.data)
  return (
    <div className=" mx-auto p-8">
      <div>
        <img className="mx-auto w-1/2 h-[50vh] object-cover" src={VIEW + data?.image} alt="" />
      </div>

      <div className="px-6 w-2/3 mx-auto m-12 text-left">
        <h1 className="font-bold text-center text-stone-700 text-2xl capitalize">
          {data?.title}
        </h1>
        <div className="p-4">
          <p className="">
            <LongParagraphComponent text={data?.description} />
          </p>
        </div>
      </div>
      <div className="">
        <h1 className="mt-6 text-2xl font-bold capitalize">Other Services</h1>
        <Services/>
      </div>
    </div>
  );
};

export default ServiceDetails;
