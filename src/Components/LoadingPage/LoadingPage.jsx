import React from "react";
// import './loading.css'

const LoadingPage = () => {
  window.scrollTo(0,100);

  return (
    <>
    <div className="w-full main h-[80vh] flex mt-32 justify-center items-center">
     <img src="./APE_logo.jpg" className="h-1/2 animate-pulse" alt="" />
     
    
    </div>
    </>
  );
};

export default LoadingPage;
