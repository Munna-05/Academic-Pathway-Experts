import React from "react";

const CoverArea = () => {
  return (
    <div className=" overflow-hidden rounded-xl m-2">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="object-cover w-full blur-sm scale-105 brightness-50 h-[60vh]"
          alt=""
        />
        <div className="absolute flex  top-0 w-full h-full ">
          <div className="flex justify-center w-1/3 mx-auto h-full items-center">
          <div>
          <span className="text-6xl text-white font-bold cursor-default">
              Academic Pathway Experts
            </span>
            <div className="mt-6">
                <button className="h-10 border px-4 text-white outline-none hover:bg-teal-600 hover:border-teal-600 duration-200">
                    Book a Consultation
                </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverArea;
