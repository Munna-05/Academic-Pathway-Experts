import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const ProfileComponent = () => {
  const [message, setMessage] = useState();
  const data = useSelector((state)=>state.user.currentUser)
  console.log("🚀 ~ file: ProfileComponent.jsx:10 ~ ProfileComponent ~ data:", data)
  const array = [
    1, 3, 4, 2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3,
    4, 34,
  ];

  const handleSendMessage = () => {};

  return (
    <div className=" p-20  bg-gray-100  ">
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
                  <h1 className=" text-2xl">{data?.name}</h1>
                  <p className="text-xs text-stone-300">{data?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[60%] mx-auto">
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
      </div>
      <div className=" mt-12 p-2 text-sm  bg-white rounded-xl shadow-xl gap-4 border-8 border-stone-50 w-full grid grid-cols-2">
        <div className=" h-[100vh] overflow-scroll p-2">
          {array.map((res) => (
            <div className="w-full h-50 mb-4 bg-stone-50 rounded-xl text-left p-3 shadow">
              <h1 className="first-letter:uppercase text-sm font-semibold">
                lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
                animi.
              </h1>
              <p className="text-[10px] text-stone-500">{moment(Date.now()).format('llll')}</p>
              <div>
                <textarea
                  disabled
                  className="border h-32 text-xs overflow-scroll mt-2 rounded-lg bg-white outline-none p-2 w-full"
                  value="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum, laudantium saepe aliquam consequatur, eius excepturi, illum suscipit maiores quasi facere dicta est nihil sunt nemo atque dolore eveniet accusamus? Itaque minus, optio, quas, voluptatum ipsa blanditiis at recusandae dicta perspiciatis sunt placeat obcaecati autem qui numquam! Quas, ratione adipisci harum tempore laudantium provident iusto inventore quis eligendi modi autem possimus? Aliquam, dolores esse quae sequi quibusdam enim voluptas accusamus provident voluptatum ea neque laudantium quaerat, qui autem, est repellendus doloribus. Quas tempore placeat in ipsum consequuntur repudiandae rem ab necessitatibus, rerum optio quaerat asperiores aperiam reprehenderit odit earum voluptatem.
"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
          ))}
        </div>
        <div className=" h-[100vh] overflow-scroll p-2">
          {array.map((res) => (
            <div className="w-full  mb-2 bg-stone-50 rounded-xl shadow">a</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
