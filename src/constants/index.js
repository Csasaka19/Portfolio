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
  meta,
  starbucks,
  tesla,
  shopify,
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
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Networking and Server management",
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
    title: "Credit Card analysis ",
    company_name: "R Programming Language",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 10th 2023 - November 22nd 2023",
    points: [
       "Actively collaborated in a team of four people to conduct an in-depth analysis and cleansing of data using the versatile R programming language.",
      "Employed advanced visualization techniques, leveraging plotly and other relevant packages, to extract nuanced and insightful patterns.",
      "Innovatively designed and developed a sophisticated web application featuring a user-friendly interface, skillfully utilizing the Shiny package.",
    ],
  },
  {
    title: "ChatRoom Application",
    company_name: "Python Programming Language",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "February 20th 2024 - February 25th 2024",
    points: [
      "Engineered a robust Chat Room Application in Python, implementing intricate socket programming functions and methods.",
      "Demonstrated versatility by crafting both a command-line interface and an aesthetically pleasing graphical user interface (GUI) using the tkinter library.",
      "Empowered users to engage in seamless communication over the same network through the application of advanced socket functionalities.",
    ],
  },
  {
    title: "Patient Tracker",
    company_name: "Flutter Framework and Dart Programming Language",
    icon: shopify,
    iconBg: "#383E56",
    date: "February 7th 2024 - April 26th 2024",
    points: [
      "Developed a comprehensive Flutter application to facilitate the management of health-related data including hospital visits, medical records, and appointments.",
      "Implemented features such as user authentication, intuitive interface, and secure data handling to ensure user convenience and privacy.",
      "Welcomed contributions from the community to enhance the application's functionalities and user experience.",
    ],
  },
  {
    title: "Roommate To Survive",
    company_name: "Flask Web Framework and Python Programming Language",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Developed a dynamic web application using the Flask web framework and Python programming language to assist users in finding compatible rooms within their locality.",
      "Implemented authentication, personalized experiences , localization and internationalization.",
      "Made secure connections, error handling capability and encryption.",
      "The styling and pagination of the website is ongoing for a complete project for deployment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
