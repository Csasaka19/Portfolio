import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bash,
  c,
  dart,
  datadog,
  maria,
  pythoon,
  r,
  redis,
  trello,
  alx,
  cs50,
  daystar,
  udacity,
  R,
  python,
  flutter,
  flask,
  Credit,
  Chatroom,
  patient,
  roommate,
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
    name: "JavaScript",
    icon: javascript,
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
    name: "bash",
    icon: bash,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "dart",
    icon: dart,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "python",
    icon: pythoon,
  },
  {
    name: "datadog",
    icon: datadog,
  },
  {
    name: "redis",
    icon: redis,
  },
  {
    name: "maria",
    icon: maria,
  },
  {
    name: "trello",
    icon: trello,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const education = [
  {
    title: "Udacity",
    course_name: "Intro to Programming Nanodegree Program",
    icon: udacity,
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
    icon: alx,
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
    course_name: "Harvard University's Introduction to Computer Science",
    icon: cs50,
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
    icon: daystar,
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

const experiences = [
  {
    title: "Credit Card analysis",
    company_name: "R Programming Language",
    icon: R,
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
    icon: python,
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
    icon: flutter,
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
    icon: flask,
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

const projects = [
  {
    name: "Credit Card analysis",
    description:
      "A shiny web application that enables users to analyze credit card data, visualize trends, and generate insights using the R programming language.",
    tags: [
      {
        name: "R Language",
        color: "blue-text-gradient",
      },
      {
        name: "shiny app",
        color: "green-text-gradient",
      },
      {
        name: "plotly",
        color: "pink-text-gradient",
      },
    ],
    image: Credit,
    source_code_link: "https://github.com/Csasaka19/R_credit",
  },
  {
    name: "ChatRoom Application",
    description:
      "A versatile chat room application that allows users to communicate over the same network, featuring both a command-line interface and a graphical user interface.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Sockets",
        color: "green-text-gradient",
      },
      {
        name: "tkinter",
        color: "pink-text-gradient",
      },
    ],
    image: Chatroom,
    source_code_link: "https://github.com/Csasaka19/Chatroom-App",
  },
  {
    name: "Patient Tracker",
    description:
      "A Flutter application that enables users to manage their health-related data, including hospital visits, medical records, and appointments.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: patient,
    source_code_link: "https://github.com/Csasaka19/patient-tracker",
  },
  {
    name: "Roommate To Survive",
    description:
      "A web application that enables users to find affordable rooms within their localities.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: roommate,
    source_code_link: "https://github.com/Csasaka19/Roommate-to-survive",
  },
];

const licensesAndCertifications = [
  {
    title: "Scratch and Computer Science",
    issuer: "Tech Republic Africa",
    issue_date: "September 2015",
    credential_url: "https://drive.google.com/file/d/10jjXr57soVCOcxE7yBEggE_22qgYv2GX/view?usp=sharing",
  },
  {
    title: "Database Management Certification",
    issuer: "Oracle Academy",
    issue_date: "December 2022",
    credential_url: "https://drive.google.com/file/d/1En5N4Fg8-7i78yA4vO5wB-jxfhLPnOFE/view?usp=sharing",
  },
  {
    title: "Programming Nanodegree Certification",
    issuer: "Udacity",
    issue_date: "October 2023",
    credential_url: "https://drive.google.com/file/d/1E4Gu6_t6gQygvOnNpVyVkZErDEk79gXh/view?usp=sharing",
  },
  {
    title: "Core Member Badge",
    issuer: "Google Developers Student Club",
    issue_date: "September 2023",
    credential_url: "https://developers.google.com/profile/badges/community/gdsc/2023/core-member/",
  },
  {
    title: "Software Engineering Certification",
    issuer: "ALX Africa",
    issue_date: "November 2023",
    credential_url: "https://drive.google.com/file/d/1IHHHhyqaNhfJ5DDiRoW9RlFO6XotMGZE/view?usp=sharing",
  },
  {
    title: "Azure Responsible AI Workshop",
    issuer: "Microsoft Americas Azure Team",
    issue_date: "March 2024",
    credential_url: "https://drive.google.com/file/d/1IHHHhyqaNhfJ5DDiRoW9RlFO6XotMGZE/view?usp=sharing",
  },
];

const testimonials = [
  {
    testimonial:
      "Lead in the coordination and holding sessions of various google programming modules.",
    name: "Google Developers Student Club",
    designation: "CoLead",
    company: "GDSC",
    image: "https://www.gravatar.com/avatar/%7Bdigest%7D?d=identicon&s=256",
  },
  {
    testimonial:
      "Promoted and advertised the backend and front end software programs to new cohorts.",
    name: "ALX SE Ambassador",
    designation: "Ambassador",
    company: "ALX",
    image: "https://www.gravatar.com/avatar/%7Bdigest%7D?d=identicon&s=256",
  },
  {
    testimonial:
      "I write some insightful blogs on the latest technologies and trends in the tech industry.",
    name: "Medium Blogger",
    designation: "Blogger",
    company: "Articles",
    image: "https://www.gravatar.com/avatar/%7Bdigest%7D?d=identicon&s=256",
  },
];


export { services, technologies, experiences, testimonials, projects, education, licensesAndCertifications };
