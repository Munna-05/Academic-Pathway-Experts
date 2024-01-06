import React, { useEffect, useState } from "react";
import CoverArea from "../Components/CoverArea";
import Section2 from "../Components/Section2";
import Countries from "../Components/MUIComponents/Countries";
import OurServices from "../Components/OurServices";
import WeWorkWith from "../Components/WeWorkWith";
import JobSection from "../Components/JobSection";
import { motion } from "framer-motion";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../Redux/blogSlice";
import { setJobs } from "../Redux/JobSlice";
import { setService } from "../Redux/serviceSlice";
import LoadingPage from "../Components/LoadingPage/LoadingPage";
import { setCourses } from "../Redux/courseSlice";
import Courses from "./Courses";

const Home = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.data);
  const all_jobs = useSelector((state) => state?.jobs?.data)
  const all_blogs = useSelector((state) => state.blogs.data);
  const all_courses = useSelector((state)=>state?.courses?.data)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!services || !all_jobs || !all_blogs || all_courses) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/blogs`)
        .then((res) => {
          dispatch(setBlogs(res?.data));
        })
        .catch((e) => console.log(e));

      axios
        .get(`${process.env.REACT_APP_API_URL}/jobs`)
        .then((res) => {
          console.log(res?.data);
          dispatch(setJobs(res?.data));
        })
        .catch((e) => {
          console.log(e?.response?.data);
        });

      axios
        .get(`${process.env.REACT_APP_API_URL}/services`)
        .then((res) => {
          dispatch(setService(res?.data));
          setLoading(false);
        })
        .catch((e) => console.log(e));
      axios
        .get(`${process.env.REACT_APP_API_URL}/courses`)
        .then((res) => {
          dispatch(setCourses(res?.data));
          setLoading(false);
        })
        .catch((e) => console.log(e));
    } else {
      setLoading(true);
    }
  }, []);
  return (
    <>
      {!services || !all_jobs || !all_blogs ? (
        <LoadingPage />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0 }}
          className="-mt-1"
        >
          <CoverArea />
          <Section2 />
          {/* <WeWorkWith/> */}
          <JobSection />
          <Courses/>
          <OurServices />
          {/* <Countries /> */}
        </motion.div>
      )}
    </>
  );
};

export default Home;
