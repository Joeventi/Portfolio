import projectCM from "../assets/projects/centralmedica.webp";
import projectDSW from "../assets/projects/dapoersariwangi.webp";
import projectHI from "../assets/projects/hematindonesia.webp";
import projectSOI from "../assets/projects/soindustri.webp";

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

export const PROJECTS = [
  {
    title: "Office Administrative Management",
    company: "Central Medica",
    image: projectCM,
    description: "Developing and managing back-office administrative processes for Central Medica, focusing on streamlining internal operations. Key responsibilities included overseeing inventory management, handling order processing, and maintaining accurate records to support overall business efficiency.",
    technologies: ["React", "Elysia", "Bun", "Prisma ORM", "PostgreSQL", "VPS", "Ant Design"],
  },
  {
    title: "Package Evidence Tracker",
    company: "Hemat Indonesia",
    image: projectHI,
    description: "Developing an admin page with a module focused on tracking evidence for shipment processes, featuring barcode scanner integration, webcam-triggered evidence capture, and duplicate airwaybill validation. The system optimizes operational efficiency by limiting evidence submissions per airwaybill to prevent duplicate shipments and reduce company losses.",
    technologies: ["React", "Gin", "GCP", "Docker", "MongoDB", "Chakra UI"],
  },
  {
    title: "Marketing Channel",
    company: "Dapoer Sariwangi",
    image: projectDSW,
    description: "Developing a reservation web application to improve customer experience and operational efficiency, with features including restaurant profiles, web-based menu information, and room reservation functionality.",
    technologies: ["Next.js", "NestJS", "Prisma ORM", "PostgreSQL", "Cloudinary"],
  },
  {
    title: "E-Commerce Website",
    company: "PT Sinar Ogan Industri",
    image: projectSOI,
    description: "Developed an end-to-end e-commerce platform using the MERN stack for the web application and Flask for an item-based collaborative filtering machine learning model. Key features included a stock tracker for inventory management, targeted item-based recommendations, and role-based user pages.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Flask"],
  },
];

export const CONTACT = {
  // address: "BSD City, Tangerang, Banten 15339",
  phoneNo: "+852 6212 0342",
  email: "joeventlawrance@gmail.com",
};
