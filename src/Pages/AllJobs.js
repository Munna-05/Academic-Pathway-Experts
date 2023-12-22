import React, { useEffect, useState } from "react";
import JobCards from "../Components/JobCards";
import { motion } from "framer-motion";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../Redux/JobSlice";

const AllJobs = () => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();
  const all_jobs = useSelector((state) => state?.jobs?.data) || null
  console.log("🚀 ~ file: AllJobs.js:13 ~ AllJobs ~ all_jobs:", all_jobs)

  useEffect(() => {
    if (!all_jobs) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/jobs`)
        .then((res) => {
          console.log(res?.data);
          dispatch(setJobs(res?.data));
        })
        .catch((e) => {
          console.log(e?.response?.data);
        });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5, type: "spring  " }}
      className="pt-16"
    >
      <JobCards />
    </motion.div>
  );
};

export default AllJobs;
