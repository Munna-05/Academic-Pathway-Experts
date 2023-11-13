import React from "react";
import CoverArea from "../Components/CoverArea";
import Section2 from "../Components/Section2";
import Countries from "../Components/MUIComponents/Countries";
import OurServices from "../Components/OurServices";

const Home = () => {
  return (
    <div>
      <CoverArea />
      <Section2 />
      <OurServices/>    
      <Countries />
    </div>
  );
};

export default Home;
