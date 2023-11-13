import React from "react";
import {motion} from 'framer-motion'

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
      </div>
    </div>
  );
};

export default CoverArea;
