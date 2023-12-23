import moment from "moment/moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { VIEW } from "../API";
import { useSelector } from "react-redux";

const AllBlogCards = ({ main }) => {
  const navigate = useNavigate();
  const blogs = useSelector((state) => state?.blogs?.data);
  return (
    <div>
      <div className="bg-[#EEF5FF] ">
        {/* main section  */}

        {main && (
          <div className="w-3/4 mx-auto ">
            <div className="flex  justify-center items-center py-20">
              <div className=" flex justify-between">
                <div className="rounded-lg shadow-lg  shadow-stone-300 overflow-hidden">
                  <img
                    className="w-[90vw] h-full object-cover"
                    src={VIEW + blogs[0]?.image}
                    alt=""
                  />
                </div>

                <div className="px-8 relative items text-left">
                  <p className="text-xs text-stone-400">
                    {moment(blogs[0]?.createdAt).format("ll")}
                  </p>
                  <p
                    onClick={() => navigate(`/blog-post/${blogs[0]?._id}`)}
                    className="text-4xl capitalize text-left font-bold hover:underline cursor-pointer mt-2"
                  >
                    {blogs[0]?.title}
                  </p>
                  <p className="w-[35vw] text-stone-500 text-sm line-clamp-4 mt-2">
                    {blogs[0]?.description}
                  </p>

                  <div className="absolute bottom-0 p-8 flex items-center gap-6  w-96">
                    <img
                      className="h-10 object-fill shadow scale-125 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTzg-bVaGG0YjadE4mLt4bbacyPXB3uvcLidFs-zPlbkM9Fc6br8qpcCtN8QuOSmGaKA&usqp=CAU"
                      alt=""
                    />
                    <div className="text-sm font-semibold  text-stone-700">
                      {blogs[0]?.author?.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* cards section  */}

      <div className="w-3/4   p-4 mx-auto grid grid-cols-3 ">
        {blogs.slice(main ? 1 : 0)?.map((res) => (
          <div
            onClick={() => navigate(`/blog-post/${res?._id}`)}
            className="h-[60vh] cursor-pointer hover:scale-[101%] brightness-100 hover:brightness-105 hover:shadow-lg hover:shadow-stone-300 duration-300 m-4 relative  rounded-xl overflow-hidden shadow"
          >
            <img
              src={VIEW + res?.image}
              className="h-80 object-cover w-full"
              alt=""
            />
            <div className="p-4  text-left">
              <h2 className="text-2xl capitalize text-stone-700 font-semibold hover:underline cursor-pointer">
                {res?.title}
              </h2>
              <p className="line-clamp-5 text-sm text-stone-500 mt-2 ">
                {res?.description}
              </p>
            </div>
            <div className="absolute text-right border-t w-full bottom-0 p-3">
              <button className="text-sm hover:text-teal-600">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogCards;
