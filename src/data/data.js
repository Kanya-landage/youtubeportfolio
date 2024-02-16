import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <AiFillAppstore />,
    title: "Web Development",
    des: "Built Frontend the user-facing part of a web application. To develop Frontend typically used languages like HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript to accomplish these tasks.",
  },
  {
    id: 2,
    icon: <SiAntdesign />,
    title: "Unit Testing",
    des: "Implemented unit test cases for react component to test components in isolation. Used Jest(JavaScript Testing Framework), react-testing-library, jasmine to write test cases for react components.",
  },
  {
    id: 3,
    icon: <FaMobile />,
    title: "Mobile Development",
    des: "Developed applications for mobile using React native(JavaScript Framework).Built application for android in react native.Maintained codebase for cross platform applications",
  },
  {
    id: 4,
    icon: <SiProgress />,
    title: "Backend Development",
    des: "Implemented REST APIs,connected with database using Node.js, worked on JWT authentication to encrypt the authentication process of React application  ",
  },
  {
    id: 5,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Hosted websites on netlify, configured AWS knowledge of Continuous Integration Continuous Deployment (CI|CD). Configured AWS S3 bucket service to upload images to cloud",
  },
];
