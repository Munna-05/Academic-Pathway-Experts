import React from "react";
import JobInformations from "../Components/JobInformations";
import { motion } from "framer-motion";
import JobCards from "../Components/JobCards";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  window.scrollTo(0, 0);
  const all_jobs = useSelector(state=>state.jobs.data)
  const {id} = useParams()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="pt-20"
    >
      <JobInformations data={all_jobs?.find(res=>res?._id === id)}  />
     <div className="py-6  ">
      <h1 className="text-3xl border-b pb-4 border-dashed font-semibold text-stone-700 ">More Jobs</h1>
     <JobCards />
     </div>
    </motion.div>
  );
};

export default JobDetails;
