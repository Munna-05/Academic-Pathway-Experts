import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ProfileComponent = () => {
  const [message, setMessage] = useState();

  const handleSendMessage = () => {};

  return (
    <div className="h-screen p-20  bg-gray-100  ">
      <div className="border rounded-xl bg-stone-200 w-full h-60  mb-20">
        <div className='w-full h-full rounded-xl bg-[url("https://4kwallpapers.com/images/walls/thumbs_3t/9602.jpg")] bg-cover'>
          <div className="relative w-full text-white flex items-end justify-center h-full">
            <div className="ring-[0.5px] ring-stone-100 shadow-md w-[95%] h-32 p-4 flex justify-between backdrop-blur-sm bg-stone-100 bg-opacity-30 rounded-xl absolute top-40">
              <div className="h-full flex  ">
                <img
                  className="w-26 rounded-xl shadow-md shadow-stone-400 object-cover h-full"
                  src="https://i.pinimg.com/originals/bb/8b/97/bb8b976467f63fc083bcc18f2c47b760.jpg"
                  alt=""
                />
                <div className="mx-5 mt-2 text-left">
                  <h1 className=" text-2xl">John Doe</h1>
                  <p className="text-xs text-stone-300">JohnDoe@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-2 gap-1">
        <div className="bg-stone-50 shadow-xl rounded-xl ">
          <div className="text-left">
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name=""
              className="w-full rounded-t-xl border-b border-stone-200 outline-none p-3 text-sm"
              placeholder="Write your enquiry here ..."
              id=""
              cols="30"
              rows="6"
            ></textarea>
            <div className=" px-2 pb-2 flex justify-end">
              <button
                onClick={() => handleSendMessage()}
                className="text-sm bg-stone-800 capitalize py-1.5 px-8 text-stone-200 rounded-lg hover:text-green-500 hover:scale-[102%] duration-200 hover:shadow hover:shadow-lg hover:shadow-teal-100"
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div>section2</div>
      </div>
    </div>
  );
};

export default ProfileComponent;
