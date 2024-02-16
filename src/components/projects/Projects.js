import React from "react";
import Title from "../layouts/Title";
import {
  ats,
  crm,
  eSign,
  covid,
  drawing,
  feed,
  projectTwo,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title title="projects" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
        <ProjectsCard
          title="APPLICATION TRACKING SYSTEM (ATS)"
          des="This application is mainly developed to help recruitment team to track the hiring process of candidate"
          src={ats}
          link="https://app.rightcandidate.ai/auth/login"
        />
        <ProjectsCard
          title="SALES CRM"
          des="This application is build to help small businesses with their sales.Sales CRM is a SAAS based software which tracks deals"
          src={crm}
          link="https://crm.insureco.io/"
        />
        <ProjectsCard
          title="DOCUMENT E-SIGN"
          des="This application is a build to sign documents digitally. This helps to save the time and paper and human efforts to sign the document."
          src={eSign}
          link="https://documentesign.com/"
        />
        <ProjectsCard
          title="SOCIAL FEED"
          des="This application is a clone of instagram where user can add post, like others post bookmark a post"
          src={feed}
        />
        <ProjectsCard
          title="Covid WEBSITE"
          des="This is a static page which displays information about COVID"
          src={covid}
          link="https://efminnthlqbbjqzyo0meiq.on.drv.tw/www.Covid-19%20site/website/"
        />
        <ProjectsCard
          title="DRAWING BOARD"
          des="This is a online drawing tool which is mainly built using canvas, used Redux for state management"
          src={drawing}
          link="https://main--visionary-dango-7d97ef.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
