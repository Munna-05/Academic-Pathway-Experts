import axios from "axios";
import React, { useState } from "react";
import { API } from "../API";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading('Sending Enquiry...')
    // Perform the form submission logic here
    // For simplicity, let's just log the form data
    axios.post(`${API}/enquiry/${localStorage.getItem('id')}`,formData).then((res)=>{
        console.log(res.data);
        console.log(res.data.message)
        toast.remove()
        toast.success(res?.data?.message)
        setTimeout(() => {
            navigate('/')
        }, 2500);
    }).catch(e=>{
        console.log(e)
        toast.remove()
        toast.error("Error,Try again")
    })

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="lg:w-[30vw] md:w-20vw w-full mx-auto mt-8 p-6 bg-white rounded ">
      <h2 className="text-2xl font-semibold text-stone-700 mb-4">Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="text-left">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-stone-100 my-2 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-stone-100 my-2 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-stone-100 my-2 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Enquiry
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-stone-100 my-2 w-full text-stone-600 ring-teal-300 ring-1 p-4 outline-teal-300 hover:outline-teal-300 rounded-md"
            required
          ></textarea>
        </div>
        <div className="w-full flex justify-center px-4">
          <button
            type="submit"
            className="text-sm bg-stone-800 capitalize mx-auto py-3 px-12 text-stone-200 rounded-lg hover:text-teal-300 hover:scale-[102%] duration-200 hover:shadow hover:shadow-lg hover:shadow-teal-100"          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
