import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const JobSection = () => {
    const navigate = useNavigate()
    const user = useSelector((state)=>state.user.currentUser)
    const token = localStorage.getItem('token')
  return (
    <div className="w-full bg-stone-50 py-4">
      <div className="w-3/4  mx-auto  pt-16 px-16">
        <div className="uppercase text-xs text-orange-400 mb-8 font-semibold">
          for candidates
        </div>
        <div className="text-5xl  font-bold mt-4 text-stone-700">
          Explore Thousands of Jobs
        </div>
        <div className="w-1/2  mx-auto mt-4 px-4 text-sm ">
          Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
          Morbi mattis ullamcorper velit.
        </div>
        <div className="grid mt-5  grid-cols-3 ">
          <div className=" h-60 mb-4  items-center flex justify-center">
            <div>
              <div className="mx-auto flex justify-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  color="red"
                  stroke="currentColor"
                  class="w-24 h-24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.601 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </div>
              <p className="uppercase text-xs font-semibold text-stone-500 mt-2">
                step 1
              </p>
              <h4 className="font-mono font-semibold mt-4 my-2">
                Create an account
              </h4>
              <p className="text-sm text-stone-500">
                Nunc nonummy metus. Donec elit libero.
              </p>
            </div>
          </div>

          <div className=" h-60 mb-4 items-center flex justify-center">
            <div>
              <div className="mx-auto flex justify-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  color="red"
                  stroke="currentColor"
                  class="w-24 h-24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </div>
              <p className="uppercase text-xs font-semibold text-stone-500 mt-2">
                step 2
              </p>
              <h4 className="font-mono font-semibold mt-4 my-2">
                Complete Your Profile
              </h4>
              <p className="text-sm text-stone-500">
                Nunc nonummy metus. Donec elit libero.
              </p>
            </div>
          </div>

          <div className=" h-60  items-center flex justify-center">
            <div>
              <div className="mx-auto flex justify-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-24 h-24"
                  color="red"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <p className="uppercase text-xs font-semibold text-stone-500 mt-2">
                step 3
              </p>
              <h4 className="font-mono font-semibold mt-4 my-2">
                Search Your Job
              </h4>
              <p className="text-sm text-stone-500">
                Nunc nonummy metus. Donec elit libero.
              </p>
            </div>
          </div>
        </div>
        <div className=" p-3 mb-12">
        {user && token ?   <button onClick={()=>navigate('/profile')} className="text-sm bg-stone-800 capitalize py-3 px-4 text-stone-200 rounded-lg hover:text-teal-300 hover:scale-[102%] duration-200 hover:shadow-lg hover:shadow-stone-700">
            Go to Profile
          </button>:  <button onClick={()=>navigate('/signup')} className="text-sm bg-stone-800 capitalize py-3 px-4 text-stone-200 rounded-lg hover:text-teal-300 hover:scale-[102%] duration-200 hover:shadow-lg hover:shadow-stone-700">
            get started
          </button>}
        </div>
      </div>
    </div>
  );
};

export default JobSection;
