import shoot from "../assets/projects/shoot.png";
import potato from "../assets/projects/potato.png";
import connect4 from "../assets/projects/connect4.png";
import wargames from "../assets/projects/wargames.jpeg";
import easyeats from "../assets/projects/easyeats.png";
import hkust from "../assets/hkust.png"

export const HERO_CONTENT = `I am a Bachelor's in Computer Science from HKUST with a knack for crafting robust and scalable web applications and data solutions. With ${new Date().getFullYear() - 2024}+ years of hands-on experience, I have honed my skills in front-end technologies, as well as back-end technologies, cloud technologies, and data-driven technologies. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "Jul 2024 - Dec 2024",
    role: "Full Stack Developer",
    company: "DG Innotech",
    description: `Created the user interface for a new customer intelligence platform, Campflyer. Developed using REACT and Node.js. Utilised react libraries such as Antd, AG Grid, reCharts, etc. Backend work to make API calls and connections for data flow. Worked with MongoDB and PostgresSQL.`,
    technologies: ["React", "Redux", "Node.js", "Express", "NextAuth", "Ant Design", "MongoDB", "PostgreSQL"],
  },
  {
    year: "Jun 2023 - Aug 2023",
    role: "Game Developer",
    company: "Medmind Technology Limited",
    description: `Created interactive minigames for Neurogym2. Created a motion game that can be controlled using a KJ Stick. Implemented AI opponents that users can play with using MLAgents.`,
    technologies: ["Flask", "React", "Informatica", "Docker", "Azure", "SQL Server"],
  },
  {
    year: "Jun 2022 - Aug 2022",
    role: "Game Developer",
    company: "Medmind Technology Limited",
    description: `Created minigames for the company's new app, Neurogym2. Used Photon Fusion to add Multiplayer to the minigames`,
    technologies: ["Unity", "C#", "Photon Fusion"],
  },
];

export const EDUCATION = [
  {
    title: "Bachelor's in Computer Science (BSc)",
    company: "Hong Kong University of Science and Technology (HKUST)",
    image: hkust,
    description: "Major In Computer Science. 6 month Exchange Program in the University of Toronto",
    technologies: ["C++", "Java", "Object-oriented Programming", "Artificial Intelligence", "Design and Analysis of Algorithms", "Cybersecurity"],
  },
]

export const PROJECTS = [
  {
    title: "QR Code Ordering System",
    company: "Easy Eats",
    image: easyeats,
    description: "Developing a web-app platform for a QR code menu ordering system, featuring inventory tracking, receipt processing, and customisable menu designs. To be released in Indonesia.",
    technologies: ["React", "GoLang", "Axios", "Typescript", "PostgreSQL", "Supabase", "Ant Design", "Next.js"],
  },
  {
    title: "Connect 4 AI",
    company: "Personal",
    image: connect4,
    description: "Developed and trained a Connect 4 AI using MLAgents. Training is done by simulating 30 games at once, pitting a Player 1 AI against a Player 2 AI.",
    technologies: ["Unity", "Artificial Intelligence", "MLAgents"],
  },
  {
    title: "2D Multiplayer Shooting Game",
    company: "Shoot²",
    image: shoot,
    description: "Developed a multiplayer shooting game using Photon Fusion. The game supports a Lobby Create/Join system based on the lobby name. Players can customise their square colours and change their hats.",
    technologies: ["Unity", "Multiplayer", "Photon Fusion"],
  },
  {
    title: "Economy Clicker Game",
    company: "Potato Clicker",
    image: potato,
    description: "Developed a Clicker game that revolved around Supply and Demand. Supports saving progress and makes use of multiple Unity elements.",
    technologies: ["Unity", "C#"],
  },
  {
    title: "Cybersecurity Training Course (Bandit)",
    company: "Overthewire",
    image: wargames,
    description: "Completing the Bandit level in the popular Overthewire Wargames which trains learners how to use linux and navigate cybersecurity.",
    technologies: ["Linux", "Cybersecurity"],
  }
];

export const CONTACT = {
  // address: "BSD City, Tangerang, Banten 15339",
  phoneNo: "+852 6212 0342",
  email: "joeventlawrance@gmail.com",
};
