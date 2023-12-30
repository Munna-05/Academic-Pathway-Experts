import axios from "axios";
import React, { useEffect, useState } from "react";
import AllServices from "../Components/AllServices";
import { useDispatch, useSelector } from "react-redux";
import { setService } from "../Redux/serviceSlice";
import { motion } from "framer-motion";

const Services = () => {
  window.scrollTo(0, 0);
  const services = useSelector((state) => state.services.data);
  const dispatch = useDispatch();

  // const [services,setAllServices] = useState()
  useEffect(() => {
    if (!services) {
      axios.get(`${process.env.REACT_APP_API_URL}/services`).then((res) => {
        dispatch(setService(res?.data));
      });
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5, type: "spring  " }}
      className="pt-16"
    >
      <AllServices data={services || []} />
    </motion.div>
  );
};

export default Services;
