import React, { useState } from 'react'
import {motion} from 'framer-motion'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';


const SignupForm = () => {

    const [FirstName , setFirstName] = useState()
    const [LastName , setLastName] = useState()
    const [Email , setEmail] = useState()
    const [Password , setPassword] = useState()
    const [Cpass , setCpass] = useState()
    const [DOB , setDOB] = useState()
    const [PhoneNumber , setPhoneNumber] = useState()

   
    const handleSubmit =()=>{
        if(Cpass !== Password){
        //    toast.error("Password doesn't match")
           toast.loading('Loading...')
           toast.success('Saved')
           toast.error('Error Try again !!')
        // toast.custom(<motion.div initial={{scale:0}} animate={{scale:1 , transition:{type:'spring'}}}  className='px-4 flex scale-110 w-80 bg-stone-600 text-teal-500 rounded-md h-10 items-center text-center'>
        //     <div>Password Error</div>
        // </motion.div>)
        }
        // axios.post('http://localhost:5000',{}).catch(e=>console.log(e))
    }

  return (
    <div className="pb-28 flex justify-center ">
      <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:1 , delay:0.5}}} className="w-1/3 mx-auto mt-32 ">
        <div className="text-5xl font-bold my-10 text-stone-600">CREATE ACCOUNT</div>
        <div>
          <div className='flex gap-4'>
            <input
            onChange={(e)=>setFirstName(e.target.value)}
              className="bg-stone-100 my-4 w-1/2 text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="First Name"
            />
            <input
              className="bg-stone-100 my-4 w-1/2 text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="Last Name"
            />
          </div>
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
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div>
            <input
              className="bg-stone-100 my-4 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="text"
              name=""
              id=""
              onChange={(e)=>setCpass(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <input
              className="bg-stone-100 my-4 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none hover:outline-teal-300 rounded-md"
              type="number"
              name=""
              id=""
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              className="bg-stone-100 my-4 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
              type="date"
              name=""
              id=""
              placeholder="DOB"
            />
          </div>
        </div>
        <div className="mt-10">
        <button onClick={handleSubmit} className="text-sm bg-stone-800 capitalize py-3 px-12 text-stone-200 rounded-lg hover:text-teal-300 hover:scale-[102%] duration-200 hover:shadow hover:shadow-lg hover:shadow-teal-100">
            Create Account
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default SignupForm