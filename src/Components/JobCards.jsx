import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const JobCards = () => {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  const all_jobs = useSelector((state) => state?.jobs?.data) || null;

  return (
    <div>
      <div></div>

      <div className="w-3/4 mx-auto">
        <div className="grid grid-cols-3 gap-4 p-10">
          {all_jobs?.map((res) => (
            <div
              onClick={() => navigate(`/job-details/${res?._id}`)}
              className="shadow-lg hover:shadow-xl ring-1 hover:scale-[103%] ring-stone-100 shadow-stone-200 duration-300 cursor-pointer hover:shadow-stone-300 bg-white rounded-2xl"
            >
              <div className="flex justify-between p-3">
                <div className="flex items-center justify-center rounded-full object-contain overflow-hidden">
                  <img
                    className="object-contain  h-8 rounded-full   scale-110"
                    src={process.env.REACT_APP_VIEW_API_KEY+res?.icon}
                    alt=""
                  />
                </div>
                <div
                  className="cursor-pointer  "
                  onClick={() => setLike(!like)}
                >
                  {!like ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="grey"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      class="w-6 h-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  )}
                </div>
              </div>

              <div className="text-left p-3 border-b border-dashed">
                <h1 className="capitalize  font-bold">{res?.title}</h1>
                <h4 className="text-sky-500 capitalize text-sm">{res?.company}</h4>
                <p className="text-[14px] capitalize font-semibold text-stone-400">
                 {res?.location}
                </p>

                <p className="text-[12px] text-stone-400 mt-12">
                  posted on : {moment(res?.createdAt).format("lll")}
                </p>
              </div>

              <div className="grid grid-cols-2">
                <div className="text-left p-3 flex justify-start items-center text-sm text-stone-500 font-semibold">
                  {res?.experienceLevel}
                </div>
                <div className="text-right p-3 text-sm flex items-center justify-end text-stone-500 font-semibold">
                  {res?.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCards;
