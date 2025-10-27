import {
  facebook,
  linkedin,
  instagram,
  twitter,
  github,
  facebook1,
  linkedin1,
  instagram1,
  twitter1,
  github1,
  tictactoe,
  mathmagician,
  recipeapp,
  trackbudget,
  tictactoe1,
  tictactoe2,
  tictactoe3,
  recipeapp3,
  recipeapp4,
  recipeapp6,
  trackbuget1,
  trackbuget2,
  trackbuget5,
  chitchat1,
  chitchat3,
  chitchat4,
  chitchat5,
  apple1,
  apple2,
  apple3,
  apple4,
  apple5,
  cch1,
  cch2,
  cch3,
  cch4,
  cch5,
  responsive,
  react,
  fullstack,
} from "../assets";

const social = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ikram-khan-b93251311",
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 2,
    name: "Facebook",
    url: "https://www.facebook.com/ikram0pakistan",
    icon: facebook,
    icon1: facebook1,
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/ikram0pakistan_7",
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 4,
    name: "Twitter",
    url: "https://twitter.com/ikram0pakistan",
    icon: twitter,
    icon1: twitter1,
  },
  {
    id: 5,
    name: "Github",
    url: "https://github.com/ikram0codes",
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ["languages", "all"],
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    stack: ["languages", "all"],
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    stack: ["languages", "all"],
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    stack: ["languages", "all"],
    name: "Node Js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    stack: ["languages", "all"],
    name: "Mongo DB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
  },

  {
    stack: ["frameworks", "all"],
    name: "Socket.io",
    icon: "https://avatars.githubusercontent.com/u/10566080?s=200&v=4",
  },

  {
    stack: ["frameworks", "all"],
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "Next JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "Three Js",
    icon: "https://avatars.githubusercontent.com/u/10566080?s=200&v=4",
  },

  {
    stack: ["frameworks", "all"],
    name: "Redux Toolkit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "MUI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    stack: ["tools", "all"],
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    stack: ["tools", "all"],
    name: "GitHub",
    icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
  },

  {
    stack: ["tools", "all"],
    name: "Webpack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg",
  },
  {
    stack: ["tools", "all"],
    name: "Visual Studio Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },

  {
    stack: ["tools", "all"],
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
];

const projects = [
  {
    id: 1,
    name: "Real-Time Chat App",
    desc: "Chit Chat is a real-time chat application built using Node Js and Socket.io for real-time connection between browsers. While it is a compete MERN app with React Js in frontend and a very seamless and user friendly Ui. This app has all the neccessary features for a Chat Application such as single chat, group chat, profiles, friends and notifications etc.",
    tech: ["Node Js", "Socket.io", "React", "Mongo DB"],
    img: chitchat1,
    carousel: [chitchat1, chitchat3, chitchat4, chitchat5],
    source_link: "https://github.com/ikram0codes/Chit_Chat_Frontend",
    live_link: "https://github.com/ikram0codes/Chit_Chat_baceknd",
  },
  {
    id: 2,
    name: "Apple IPhone 15 Clone",
    desc: "Chit Chat is a real-time chat application built using Node Js and Socket.io for real-time connection between browsers. While it is a compete MERN app with React Js in frontend and a very seamless and user friendly Ui. This app has all the neccessary features for a Chat Application such as single chat, group chat, profiles, friends and notifications etc.",
    tech: ["React Js", "Three Js", "GSAP", "tailwindcss"],
    img: apple1,
    carousel: [apple1, apple2, apple3, apple4, apple5],
    source_link: "https://github.com/ikram0codes/apple-cloned",
    live_link: "https://apple-clone-ten-beige.vercel.app",
  },

  {
    id: 3,
    name: "Full-Stack Blog",
    desc: "This is the 1st version of my full-stack blog CyberCodeHub. The primary technology used in Next Js because of it's extraordinary SEO performance due to Server Side Rendering. For styling I have used Modular Css. In this blog i have also added features like active Table of Content and dark mode etc.",
    tech: ["Next Js", "Modular CSS", "Mongo Db"],
    img: cch1,
    carousel: [cch1, cch2, cch3, cch4, cch5],
    source_link: "https://github.com/ikram0codes/cybercodehub",
    live_link: "  https://www.cybercodehub.com",
  },
  {
    id: 4,
    name: "Recipe App",
    desc: "The Recipe app keeps track of all your foods, recipes, and ingredients. It allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Since sharing recipes is an important part, it allows you to make them public so anyone can access them.",
    tech: ["Ruby", "Ruby on Rails", "PostgreSQL"],
    img: recipeapp,
    carousel: [recipeapp3, recipeapp4, recipeapp6],
    source_link: "https://github.com/ikram0codes/",
    live_link: "https://recipe-app121-b8888e20687b.herokuapp.com/",
  },

  {
    id: 7,
    name: "Track Budget App",
    desc: "Track Budget is a mobile web application where you can manage your budget: you have a list of purchases associated with a category, so that you can see how much money you spent and on what category.",
    tech: ["Ruby", "Ruby on Rails", "PostgreSQL"],
    img: trackbudget,
    carousel: [trackbuget1, trackbuget2, trackbuget5],
    sourc_link: "https://github.com/ikram0codes/",
    live_link: "https://track-budget121-70a570d4e3e1.herokuapp.com/",
  },
  {
    id: 8,
    name: "Math Magicians",
    desc: "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.",
    tech: ["React"],
    img: mathmagician,
    carousel: [mathmagician],
    source_link: "https://github.com/ikram0codes/",
    live_link: "https://math-magicians121.netlify.app/",
  },
  {
    id: 9,
    name: "Tic Tac Toe",
    desc: "Tic Tac Toe is a simple and classic game that is played on a 3x3 grid. The game is typically played with two players, one using “X” and the other using “O”. Mainly built with JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    img: tictactoe,
    carousel: [tictactoe1, tictactoe2, tictactoe3],
    source_link: "https://github.com/ikram0codes/",
    live_link: "https://tic-tac-toe121.netlify.app/",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Harry",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Excellent Sysadmin. Helped with deep research and found the issue. Will work again.",
    country: "Netherlands",
    linkedIn: "#",
    category: "Web Development",
  },
  {
    id: 2,
    name: "Isaac",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "IKRAM did amazing work, I will definitely hire again.",
    country: "Ghana",
    linkedIn: "#",
    category: "Web Development",
  },
  {
    id: 3,
    name: "Chad",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    text: "IKRAM did an outstanding job on my project. Their communication was excellent, and they completed the work on time and to my full satisfaction. I highly recommend them for any project.",
    country: "USA",
    linkedIn: "#",
    category: "Web Development",
  },
  {
    id: 4,
    name: "Sridhar",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    text: "Ikram helped me build a basic expense tracker app for my personal purpose. He also helped me host it. It was built using Next JS. He did a good job and implemented all what I asked for.",
    country: "India",
    linkedIn: "#",
    category: "Web Development",
  },
  {
    id: 5,
    name: "Shravan",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    text: "I thoroughly enjoyed working with IKRAM - they had clear requirements and were easy to communicate with. I would highly recommend them to anyone looking for a great client to work with.",
    country: "India",
    linkedIn: "#",
    category: "Web Development",
  },
  {
    id: 6,
    name: "Mohammad",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    text: "IKRAM & team was a pleasure to work with. They were timely, efficient, and delivered top-notch work. I highly recommend them to anyone in need of their services.",
    country: "Canada",
    linkedIn: "#",
    category: "Web Development",
  },
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: "Enterprise Architecture",
    tech: "Microservices, Cloud Native, Serverless",
    text: "Design and implement scalable, resilient enterprise architectures that support business growth and digital transformation initiatives.",
    features: [
      "System Architecture Design",
      "Cloud Infrastructure Planning",
      "Scalability & Performance Optimization",
      "Technical Leadership & Strategy",
    ],
  },
  {
    id: 2,
    icon: react,
    title: "Full-Stack Development",
    tech: "React, Node.js, Python, TypeScript",
    text: "End-to-end development of sophisticated web applications with modern frameworks and best practices for enterprise-grade solutions.",
    features: [
      "Modern Frontend Development",
      "RESTful & GraphQL APIs",
      "Real-time Applications",
      "Progressive Web Apps",
    ],
  },
  {
    id: 3,
    icon: fullstack,
    title: "Technical Leadership",
    tech: "Team Management, Agile, DevOps",
    text: "Provide strategic technical leadership, mentor development teams, and drive engineering excellence across organizations.",
    features: [
      "Team Leadership & Mentoring",
      "Code Review & Best Practices",
      "Technical Roadmap Planning",
      "Agile Process Optimization",
    ],
  },
  {
    id: 4,
    icon: responsive,
    title: "Cloud & DevOps",
    tech: "AWS, Azure, Docker, Kubernetes",
    text: "Implement robust CI/CD pipelines, containerization strategies, and cloud infrastructure for seamless deployment and scaling.",
    features: [
      "CI/CD Pipeline Implementation",
      "Container Orchestration",
      "Infrastructure as Code",
      "Monitoring & Observability",
    ],
  },
  {
    id: 5,
    icon: react,
    title: "Digital Transformation",
    tech: "Strategy, Implementation, Optimization",
    text: "Lead digital transformation initiatives, modernize legacy systems, and implement cutting-edge technologies to drive business innovation.",
    features: [
      "Legacy System Modernization",
      "Digital Strategy Consulting",
      "Technology Stack Evaluation",
      "Innovation Implementation",
    ],
  },
  {
    id: 6,
    icon: fullstack,
    title: "Solution Architecture",
    tech: "System Design, Integration, Security",
    text: "Architect comprehensive solutions that integrate seamlessly with existing systems while ensuring security, performance, and maintainability.",
    features: [
      "System Integration Design",
      "Security Architecture",
      "Performance Optimization",
      "Technical Documentation",
    ],
  },
];

const navLinks = [
  {
    id: 1,
    name: "About",
    url: "/#about",
  },
  {
    id: 2,
    name: "Service",
    url: "/#service",
  },
  {
    id: 3,
    name: "Work",
    url: "/#work",
  },
  {
    id: 4,
    name: "Testimonial",
    url: "/#testimonial",
  },
  {
    id: 5,
    name: "Contact",
    url: "/#contact",
  },
  {
    id: 5,
    name: "Blog",
    url: "https://www.cybercodehub.com",
  },
];

export { technologies, projects, testimonials, social, services, navLinks };
