import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col justify-between gap-6 xl:flex-row lgl:gap-0">
      <div>
        <h2 className="mb-4 text-base uppercase font-titleFont">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaHtml5 />
          </span>
          <span className="bannerIcon">
            <FaCss3 />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <FaBootstrap />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaJs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
