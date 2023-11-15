import React from "react";
import CoverArea from "../Components/CoverArea";
import Section2 from "../Components/Section2";
import Countries from "../Components/MUIComponents/Countries";
import OurServices from "../Components/OurServices";
import WeWorkWith from "../Components/WeWorkWith";
import JobSection from "../Components/JobSection";

const Home = () => {
  return (
    <div className="-mt-1">
      <CoverArea />
      <Section2 />
      <WeWorkWith/>
      <JobSection/>
      <OurServices/>    
      <Countries />
    </div>
  );
};

export default Home;
