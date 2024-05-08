import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  images,
  rgipt,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Timeline",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Morning Star Children's Academy",
    company_name: "School Education",
    icon: images,
    iconBg: "#383E56",
    date: "2008 - 2018",
    points: [
      "Completed primary and secondary education.",
      "Class 10th: 96% (CBSE), 2018.",
    ],
  },
  {
    title: "Morning Star Children's Academy",
    company_name: "School Education",
    icon: images,
    iconBg: "#383E56",
    date: "2018 - 2020",
    points: [
      "Completed higher secondary education.",
      "Class 12th: 96.2% (CBSE), 2020.",
    ],
  },
  {
    title: "Rajiv Gandhi Institute of Petroleum Technology",
    company_name: "B.Tech in Computer Science Engineering",
    icon: rgipt,
    iconBg: "#E6DEDD",
    date: "2021 - 2025 (Expected)",
    points: [
      "Pursuing Bachelor's degree in Computer Science Engineering.",
      "Current CPI: 8.42 (Up to the fifth Semester).",
    ],
  },
];



const projects = [
  {
    name: "ImageCraft",
    description:
      "An AI-powered SaaS platform that offers advanced image processing features such as restoration, recoloring, object removal, and background extraction. Designed with a user-friendly interface and secure authentication system.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/suyashpurwar1/ImageCraft-AI_Image-Enhancement-SaaS",
  },
  {
    name: "Jobify",
    description:
      "A job management application with user authentication, job search, and robust tracking features. Users can add, create, and apply for jobs, and view monthly application status statistics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/suyashpurwar1/jobify",
  },
  {
    name: "GenAi",
    description:
      "An AI image generation platform that allows users to create images based on text prompts using OpenAI technology. Generated images can be published on the website with the author's name and prompt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/suyashpurwar1/AI_Image_Generator",
  },
];
export { services, technologies, experiences,  projects };
