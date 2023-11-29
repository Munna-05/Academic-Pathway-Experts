import moment from "moment/moment";
import React from "react";
import { useNavigate } from "react-router-dom";

const AllBlogCards = () => {
    const navigate = useNavigate()
  return (
    <div>


      <div className="bg-[#EEF5FF] ">

          {/* main section  */}

        <div className="w-3/4 mx-auto ">

          <div className="flex  justify-center items-center py-20">
            <div className=" flex justify-between">

            <div className="rounded-lg shadow-lg  shadow-stone-300 overflow-hidden">
              <img
              className="w-[90vw] h-full object-cover"
                src="https://zone-ui.vercel.app/assets/images/course/course_5.jpg"
                alt=""
              />
            </div>


            <div className="px-8 relative items text-left">
              <p className="text-xs text-stone-400">
                {moment(new Date()).format("ll")}
              </p>
              <p onClick={()=>navigate('/blog-post')} className="text-4xl text-left font-bold hover:underline cursor-pointer mt-2">
                The Future of Artificial Intelligence: Trends and Insights
              </p>
              <p className="w-3/4 text-stone-500 text-sm line-clamp-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate esse, tenetur dolor in quisquam laborum doloribus ut possimus similique labore. Nihil ea sunt facilis praesentium atque. Ab animi alias sequi molestias aut velit ea. Sed possimus eos. Et est aliquid est voluptatem.</p>

              <div className="absolute bottom-0 p-8 flex items-center gap-6  w-96">
                <img className="h-10 object-fill shadow scale-125 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTzg-bVaGG0YjadE4mLt4bbacyPXB3uvcLidFs-zPlbkM9Fc6br8qpcCtN8QuOSmGaKA&usqp=CAU" alt="" />
                <div className="text-sm font-semibold  text-stone-700">Author Name</div>
              </div>

            </div>





            </div>
            
          </div>
        </div>




      </div>

      {/* cards section  */}

      <div className="w-3/4   p-4 mx-auto grid grid-cols-3 ">

            <div onClick={()=>navigate('/blog-post')} className="h-[60vh] cursor-pointer hover:scale-[101%] brightness-100 hover:brightness-105 hover:shadow-lg hover:shadow-stone-300 duration-300 m-4 relative  rounded-xl overflow-hidden shadow">
                <img src="https://zone-ui.vercel.app/assets/images/course/course_1.jpg" className="h-80 object-cover w-full" alt="" />
                <div className="p-4  text-left">
                    <h2 className="text-2xl capitalize text-stone-700 font-semibold hover:underline cursor-pointer">10 Essential Tips for Healthy Living</h2>
                    <p className="line-clamp-5 text-sm text-stone-500 mt-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste officia sit accusantium dolorem molestias ex. Ex, nostrum nulla aliquam deserunt voluptas dignissimos enim eveniet nisi assumenda vel autem placeat voluptatem.</p>
                </div>
                <div className="absolute text-right border-t w-full bottom-0 p-3">

                    <button className="text-sm hover:text-teal-600">Read More</button>
                </div>
            </div>
            <div onClick={()=>navigate('/blog-post')} className="h-[60vh] cursor-pointer hover:scale-[101%] brightness-100 hover:brightness-105 hover:shadow-lg hover:shadow-stone-300 duration-300 m-4 relative  rounded-xl overflow-hidden shadow">
                <img src="https://zone-ui.vercel.app/assets/images/course/course_1.jpg" className="h-80 object-cover w-full" alt="" />
                <div className="p-4  text-left">
                    <h2 className="text-2xl capitalize text-stone-700 font-semibold hover:underline cursor-pointer">10 Essential Tips for Healthy Living</h2>
                    <p className="line-clamp-5 text-sm text-stone-500 mt-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste officia sit accusantium dolorem molestias ex. Ex, nostrum nulla aliquam deserunt voluptas dignissimos enim eveniet nisi assumenda vel autem placeat voluptatem.</p>
                </div>
                <div className="absolute text-right border-t w-full bottom-0 p-3">

                    <button className="text-sm hover:text-teal-600">Read More</button>
                </div>
            </div>
            <div onClick={()=>navigate('/blog-post')} className="h-[60vh] cursor-pointer hover:scale-[101%] brightness-100 hover:brightness-105 hover:shadow-lg hover:shadow-stone-300 duration-300 m-4 relative  rounded-xl overflow-hidden shadow">
                <img src="https://zone-ui.vercel.app/assets/images/course/course_1.jpg" className="h-80 object-cover w-full" alt="" />
                <div className="p-4  text-left">
                    <h2 className="text-2xl capitalize text-stone-700 font-semibold hover:underline cursor-pointer">10 Essential Tips for Healthy Living</h2>
                    <p className="line-clamp-5 text-sm text-stone-500 mt-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste officia sit accusantium dolorem molestias ex. Ex, nostrum nulla aliquam deserunt voluptas dignissimos enim eveniet nisi assumenda vel autem placeat voluptatem.</p>
                </div>
                <div className="absolute text-right border-t w-full bottom-0 p-3">

                    <button className="text-sm hover:text-teal-600">Read More</button>
                </div>
            </div>
            <div onClick={()=>navigate('/blog-post')} className="h-[60vh] cursor-pointer hover:scale-[101%] brightness-100 hover:brightness-105 hover:shadow-lg hover:shadow-stone-300 duration-300 m-4 relative  rounded-xl overflow-hidden shadow">
                <img src="https://zone-ui.vercel.app/assets/images/course/course_1.jpg" className="h-80 object-cover w-full" alt="" />
                <div className="p-4  text-left">
                    <h2 className="text-2xl capitalize text-stone-700 font-semibold hover:underline cursor-pointer">10 Essential Tips for Healthy Living</h2>
                    <p className="line-clamp-5 text-sm text-stone-500 mt-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste officia sit accusantium dolorem molestias ex. Ex, nostrum nulla aliquam deserunt voluptas dignissimos enim eveniet nisi assumenda vel autem placeat voluptatem.</p>
                </div>
                <div className="absolute text-right border-t w-full bottom-0 p-3">

                    <button className="text-sm hover:text-teal-600">Read More</button>
                </div>
            </div>
           
      </div>



    </div>
  );
};

export default AllBlogCards;
