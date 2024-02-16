import React from "react";
import { Banner } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="relative flex items-center justify-center w-full lgl:w-1/2">
      <img
        className="w-[300px] h-auto lgl:w-[500px] lgl:h-[380px] z-10 object-contain rounded"
        src={Banner}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] rounded lgl:h-auto bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
