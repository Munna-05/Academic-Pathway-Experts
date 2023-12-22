import moment from "moment";
import React from "react";

const JobInformations = ({data}) => {
  console.log("🚀 ~ file: JobInformations.jsx:5 ~ JobInformations ~ data:", data)
  return (
    <div>
      <div className="h-80 bg-gradient-to-r from-rose-950 to-blue-950 backdrop-blur-sm ">
        <div className=" h-full w-2/3 mx-auto flex items-center justify-between p-6">
          <div className="text-left">
            <h1 className="text-3xl capitalize text-white font-bold">{data?.title}</h1>
            <p className="text-lg font-semibold capitalize text-teal-400">{data?.company}</p>
            <p className="text-sm text-stone-400">{data?.location}</p>
          </div>
          <div>
            <button className="w-80 hover:bg-pink-500 duration-300 h-12 bg-pink-400 font-bold text-white rounded-lg text-sm p-2">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* descriptions  */}

      <div className="w-4/5 flex mx-auto ">
        <div className="w-3/4  p-12 ">
          <div className="text-left mb-12">
            <h1 className="text-2xl mb-4 font-bold">Job Description</h1>
            <p className="text-sm">
             {data?.description}
            </p>
          </div>

          {/* <div className="text-left mb-12">
            <h1 className="text-2xl mb-4 font-bold">Key Responsibilities</h1>
            <div className="text-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsa
                iusto assumenda cum quaerat expedita molestiae culpa odit sunt
                soluta hic vitae eum delectus quisquam error commodi nihil, non
                maxime iste totam ut praesentium dolore suscipit ipsam! Beatae
                maiores ducimus officia eaque hic, recusandae blanditiis nam
                doloribus, natus impedit incidunt modi perferendis ut molestias
                ullam alias sapiente omnis quia explicabo voluptas cum
                perspiciatis nostrum corrupti. Laborum molestiae, vitae
                doloribus voluptate odit officia veritatis ullam asperiores
                nobis rerum obcaecati saepe maiores optio deserunt dignissimos
                mollitia. Velit laboriosam error, delectus, sequi iure aperiam
                suscipit commodi repellendus quos maiores fugiat deleniti nam,
                aliquid atque exercitationem sint quasi dignissimos? Modi facere
                expedita veritatis recusandae ipsam? Rerum veritatis accusantium
                architecto, fugiat ab pariatur at doloremque, laboriosam,
                perferendis eos adipisci labore?
              </p>
            </div>
          </div> */}
         
        </div>
        <div className="w-1/4 p-2 pt-12">
          <div className="w-full rounded shadow-md p-4">
            <div className="text-left p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 mb-1 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>

              <h1 className="text-sm font-semibold font-sans">Date Posted</h1>
              <p className="text-sm text-stone-500 font-sans">
                {moment(data?.createdAt).format("lll")}
              </p>
            </div>
            <div className="text-left p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 mb-1 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>

              <h1 className="text-sm font-semibold font-sans">Experience Level</h1>
              <p className="text-sm text-stone-500 font-sans">{data?.experienceLevel}</p>
            </div>
            <div className="text-left p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 mb-1 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>

              <h1 className="text-sm font-semibold font-sans">Last Date</h1>
              <p className="text-sm text-stone-500 font-sans">
                {moment(data?.createdAt).add(30, 'days').format("LL")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInformations;
