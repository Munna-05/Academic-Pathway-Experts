import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { API } from "../API";

const SignupForm = () => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Cpass, setCpass] = useState();
  const [DOB, setDOB] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();

  const handleSubmit = async () => {
    toast.loading("Saving...")
    const data = {
      name: FirstName + " " + LastName,
      email: Email,
      password: Password,
      dob: DOB,
      phone: PhoneNumber,
    };

    console.log(data);

    await axios.post(`${process.env.REACT_APP_API_URL}/signup`, data).then(res=>{
      console.log(res)
      toast.remove()
      toast.success("Account Created Successfully")
    }).catch(e=>{
      toast.remove()
      toast.error(e?.response?.data?.message)
    })
    
    
  };

 



  return (
    <div className="pb-28 flex justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        className="w-1/3 mx-auto mt-32 "
      >
        <div className="text-5xl font-bold my-10 text-stone-600">
          CREATE ACCOUNT
        </div>
        <div>
          <div className="flex gap-4">
            <input  style={{border:'none'}}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-stone-100 my-4 w-1/2 text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="First Name"
            />
            <input  style={{border:'none'}}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-stone-100 my-4 w-[50%] text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="Last Name"
            />
          </div>
          <div>
            <input  style={{border:'none'}}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-stone-100 my-4 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="Email"
            />
          </div>
          <div>
            <input  style={{border:'none'}}
              className="bg-stone-100 my-4 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="text"
              name=""
              id=""
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div>
            <input  style={{border:'none'}}
              className="bg-stone-100 my-4 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="text"
              name=""
              id=""
              onChange={(e) => setCpass(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <input  style={{border:'none'}}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-stone-100 my-4 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none hover:outline-teal-300 rounded-md"
              type="number"
              name=""
              id=""
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input  style={{border:'none'}}
              onChange={(e) => setDOB(e.target.value)}
              className="bg-stone-100 my-4 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="date"
              name=""
              id=""
              placeholder="DOB"
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            onClick={handleSubmit}
            className="text-sm bg-stone-800 capitalize py-3 px-12 text-stone-200 rounded-lg hover:text-teal-300 hover:scale-[102%] duration-200 hover:shadow hover:shadow-lg hover:shadow-teal-100"
          >
            Create Account
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupForm;
