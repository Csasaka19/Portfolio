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
    title: "Udacity",
    course_name: "Intro to Programming Nanodegree Program",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - October 2023",
    points: [
      "Learnt the emerging fundamentals in javascript and python.",
      "Made corrections to a shopping cart javascript web application as per the course requirements.",
      "Developed some python programs to understand some fundamental libraries in the language.",
      "Received a certificate of completion for the course.",
    ],
  },
  {
    title: "ALX",
    course_name: "Full stack Software Engineering",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "November 2022 - November 2023",
    points: [
      "A 12 month intensive program that covers the full stack of software engineering.",
      "The program covered all the relevant technologies and tools needed to become a full stack software engineer.",
      "It also strengthened soft skills such as communication, team work, problem solving and critical thinking.",
      "The program was completed with a capstone project that was presented to the company.",
      "The capstone project was a full stack web application that was built from scratch.",
      "Enabled me with people from diverse backgrounds ,cultures and countries that strengthened the ability to work in teams.",
    ],
  },
  {
    title: "CS50",
    course_name: "Havard University's Introduction to Computer Science",
    icon: shopify,
    iconBg: "#383E56",
    date: "December 2023 - February 2024",
     points : [
    "Completed a comprehensive course on edX focusing on data structures and algorithms, providing a strong understanding of organizing and manipulating data efficiently.",
    "Enhanced proficiency in the C programming language, mastering syntax and leveraging its power for efficient algorithm implementation.",
    "Developed skills in web development using Flask, enabling creation of dynamic and interactive web applications.",
    "Acquired expertise in database management, learning to design and optimize databases for effective information storage and retrieval.",
    "Completed a challenging project synthesizing concepts from data structures, algorithms, C programming, Flask, and database management, demonstrating practical application of theoretical knowledge."
  ],
  },
  {
    title: "Daystar University",
    course_name: "Bachelor in Applied Computer Science",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2021 - Present",
    points: [
    "Received comprehensive training in database management, mastering techniques for designing, optimizing, and maintaining databases for efficient information storage and retrieval.",
    "Developed expertise in network management, acquiring skills in configuring, monitoring, and troubleshooting network infrastructure to ensure smooth and secure communication.",
    "Strengthened understanding of computer security principles, learning methods for identifying vulnerabilities, implementing security measures, and safeguarding systems and data from cyber threats.",
    "Acquired proficiency in mathematical concepts relevant to computer science, including discrete mathematics, linear algebra, probability theory, and algorithm analysis, enhancing problem-solving abilities and algorithm design skills.",
    "Mastered object-oriented programming concepts and techniques, gaining proficiency in languages such as C++, Java, and Dart, and applying principles of abstraction, encapsulation, inheritance, and polymorphism to design and develop modular and reusable software components.",
    "Developed mobile applications using Flutter, a framework for building cross-platform applications, leveraging Dart programming language to create responsive and visually appealing mobile interfaces and functionalities.",
    "Expanded language proficiency in C, C++, Java, and Dart, enabling development across diverse platforms and technologies."
  ],
  },
];

const education = [
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

export { services, technologies, experiences, testimonials, projects, education };
