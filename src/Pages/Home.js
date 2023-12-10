import React from "react";
import CoverArea from "../Components/CoverArea";
import Section2 from "../Components/Section2";
import Countries from "../Components/MUIComponents/Countries";
import OurServices from "../Components/OurServices";
import WeWorkWith from "../Components/WeWorkWith";
import JobSection from "../Components/JobSection";
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0 }} className="-mt-1">
      <CoverArea />
      <Section2 />
      {/* <WeWorkWith/> */}
      <JobSection/>
      <OurServices/>    
      <Countries />
    </motion.div>
  );
};

export default Home;
