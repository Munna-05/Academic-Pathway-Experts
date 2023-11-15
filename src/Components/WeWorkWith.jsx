import React from "react";
import Marquee from "react-fast-marquee";

const WeWorkWith = () => {
  return (
    <div>
      <div className="w-full p-4 py-24   ">
        <div className="w-3/4 h-full mx-auto overflow-hidden flex justify-center items-center">
          <div className="text-4xl font-bold text-stone-700">
            We Work With
            <p className="text-sm mt-6 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              rerum.
            </p>
            <div className=" py-6 p-6 flex  mt-12  justify-center ">
              <Marquee loop={0} delay={0} speed={100} gradient={true} play={true} className="flex gap-3">
               <div className="w-60 bg-stone-50 h-20 mx-8  "></div>
               <div className="w-60 bg-stone-50 h-20 mx-8  "></div>
               <div className="w-60 bg-stone-50 h-20 mx-8  "></div>
               <div className="w-60 bg-stone-50 h-20 mx-8  "></div>
               <div className="w-60 bg-stone-50 h-20 mx-8  "></div>
               <div className="w-60 bg-stone-50 h-20 mx-8  "></div>
               <div className="w-60 bg-stone-50 h-20 mx-8  "></div>
               <div className="w-60 bg-stone-50 h-20 mx-8  "></div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeWorkWith;
