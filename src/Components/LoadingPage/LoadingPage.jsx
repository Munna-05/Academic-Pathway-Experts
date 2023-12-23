import React from "react";
import './loading.css'

const LoadingPage = () => {
  window.scrollTo(0,100);

  return (
    <div className="w-full main h-full  bg-stone-900">
      <div className="loading-ring h-screen bg-stone-800">
        Loading
        <span className="span"></span>
      </div>
    </div>
  );
};

export default LoadingPage;
