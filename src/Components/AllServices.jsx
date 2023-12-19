import React from "react";
import { VIEW } from "../API";
import { useNavigate } from "react-router-dom";

const AllServices = ({ data }) => {
  console.log("🚀 ~ file: AllServices.jsx:4 ~ AllServices ~ data:", data);
  const navigate = useNavigate()
  return (
    <div className="w-3/4 mx-auto">
      <div className="grid grid-cols-3 gap-4 p-6">
        {data?.map((res) => (
          <div className="relative shadow-lg overflow-hidden rounded-lg">
            <img
              className="h-60 w-full object-cover"
              src={VIEW + res?.image}
              alt=""
            />

            <div className="p-1 pb-2">
            <div className="text-left p-3 capitalize font-semibold">
                <h1 className="mb-2">{res?.title}</h1>
                <p className="font-normal text-xs line-clamp-5 ">{res?.description}</p>
            </div>
            <div className="h-14 justify-end  flex items-end">
            <button onClick={()=>navigate(`/view-service/${res?._id}`)} className="absolute p-3 border-none bg-transparent bottom-0 right-0 text-sm  h-fit">Read more...</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
