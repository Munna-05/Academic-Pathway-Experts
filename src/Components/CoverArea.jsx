import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const CoverArea = () => {
  return (
    <div className="overflow-hidden">
      {/* <div className="relative">
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="object-cover w-full blur-md scale-105 brightness-50 h-[80vh]"
          alt=""
        />
        <div className="absolute flex  top-0 w-full h-full ">
          <div className="flex justify-center w-1/3 mx-auto h-full items-center">
          <div>
          <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{delay:0.3 , duration:1 , }}} className="text-6xl text-white font-bold cursor-default">
              Academic Pathway Experts
            </motion.div>
            <div className="mt-6">
                <motion.button initial={{opacity:0}} animate={{opacity:1 , transition:{delay:0.7 , duration:1 , }}} className="h-10 border px-4 text-white outline-none hover:bg-teal-600 hover:border-teal-600 duration-200">
                    Book a Consultation
                </motion.button>
            </div>
          </div>
          </div>
        </div>
      </div> */}
      <div className="bg-[url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?w=2000&t=st=1699991088~exp=1699991688~hmac=3e2c667f55a647e6f1afabe2628f0cfff70d3a7c5806eac3dff0b48deb1ad7ee')]  z-0 h-[75vh] scale-100 scale-x-105 bg-cover bg-center   ">
        <div class="w-3/4 mx-auto h-full flex  justify-center items-center backdrop-blur-md">
          <div className="grid grid-cols-2  w-full h-full">
            <div className="flex justify-center items-center">
              <div className=" border-l pl-6   ">
                <div className=" w-2/3 text-left text-5xl font-bold font-sans text-white">
                  Academic{" "}
                  <span className="text-red-500 drop-shadow-md	">Pathway</span>{" "}
                  Experts
                </div>
                <div className="text-left text-white text-sm mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fuga, veritatis!
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center text-white ">
              <motion.img
                animate={{
                    
                    rotate: [6,-6,6],
                    scale:[0.8]
                   
                 
                  }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    // times: [0, 0.2, 0.5, 0.8, 1],/
                    repeat: Infinity,
                  }}
                className={`scale-[80%] ring ring-blue-500 border-2 border-blue-500 duration-100 mt-8 rounded-full mix-blend-multiply object-contain`}
                src="https://img.freepik.com/free-vector/world-concept-illustration_114360-1391.jpg?t=st=1699993886~exp=1699994486~hmac=a96080856d940e92b83e36adb6d03cb121097b53f05ea0a5c74c4b7c0f9a1a07"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverArea;
