import React from "react";
import {motion} from 'framer-motion'

const LoginComponent = () => {
  return (
    <div className="h-screen p-10 flex justify-center ">
      <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:1 , delay:0.5}}} className="w-1/3 mx-auto mt-48">
        <div className="text-5xl font-bold my-10 text-stone-600">LOGIN</div>
        <div>
          <div>
            <input
              className="bg-stone-100 my-4 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="bg-stone-100 my-4 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
        </div>
        <div className="mt-10">
        <button className="text-sm bg-stone-800 capitalize py-3 px-12 text-stone-200 rounded-lg hover:text-teal-300 hover:scale-[102%] duration-200 hover:shadow hover:shadow-lg hover:shadow-teal-100">
            Login
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginComponent;
