import React from "react";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="object-cover w-full h-64 mb-2 rounded-lg"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Kanya Landage</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base tracking-wide text-gray-400">
          A MERN stack developer with knowledge of HTML, CSS, JavaScript, React.
          Node
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          Phone: <span className="text-lightText">+91 123456789 </span>
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          Email:{" "}
          <span className="text-lightText">kanyalandage01@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;
