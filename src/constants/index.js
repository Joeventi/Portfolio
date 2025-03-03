import projectCM from "../assets/projects/centralmedica.webp";
import projectDSW from "../assets/projects/dapoersariwangi.webp";
import projectHI from "../assets/projects/hematindonesia.webp";
import projectSOI from "../assets/projects/soindustri.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications and data solutions. With ${new Date().getFullYear() - 2024}+ years of hands-on experience, I have honed my skills in front-end technologies, as well as back-end technologies, cloud technologies, and data-driven technologies. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "Jul 2024 - Dec 2024",
    role: "Full Stack Developer",
    company: "Dexa Group",
    description: `Tasked with creating the user interface for a new customer intelligence platform, Campflyer. Developed using REACT and Node.js. Utilised react libraries such as Antd, AG Grid, reCharts, etc. Backend work to make API calls and connections for data flow. Worked with MongoDB and PostgresSQL.`,
    technologies: ["React", "Redux", "Node.js", "Express", "NextAuth", "Ant Design", "MongoDB", "PostgreSQL"],
  },
  {
    year: "Apr 2024 - Jul 2024",
    role: "Data Governance Intern",
    company: "Sinar Mas Land",
    description: `Developed and deployed APIs using Flask, Docker, and Azure Container Apps for real-time data transfer from SAP (CX & S/4HANA) to an SQL Server MDM database. Automated sequential execution of Informatica jobs with APIs achieving 50-200ms response times. Built and managed frontend and backend operations for MDM web-app development while overseeing Git branch management and team updates to ensure seamless integration and collaboration.`,
    technologies: ["Flask", "React", "Informatica", "Docker", "Azure", "SQL Server"],
  },
  {
    year: "Aug 2023 - Dec 2023",
    role: "Data Management & Reporting Intern",
    company: "Sinar Mas Land",
    description: `Contributed to creating end-year vendor performance evaluation reports using Microsoft Excel, developed real-time interactive dashboards for daily vendor performance with Power BI, and assisted with monthly construction progress data entry.`,
    technologies: ["Power BI", "Microsoft Excel", "Adobe Photoshop"],
  },
  {
    year: "Aug 2023 - Jan 2024",
    role: "Cloud Computing Cohort",
    company: "Bangkit Academy",
    description: `Gained knowledge of Google Cloud Platform and cloud service cost structures, and served as a backend engineer on a Capstone Project, leveraging Node.js, Cloud SQL, Docker, and Cloud Run for scalable API development and deployment.`,
    technologies: ["Docker", "GCP", "Node.js", "Express", "MySQL"],
  },
  {
    year: "Feb 2023 - Jul 2023",
    role: "Data Analyst Intern",
    company: "Astra Credit Companies",
    description: `Developed interactive dashboards for Daihatsu's accounts receivable and weekly B2B performance using Looker Studio and Tableau connected to SQL Server views, streamlined daily data preparation with SQL procedures and triggers to eliminate 2-3 manual workflows, and analyzed direct and indirect selling data using Microsoft Excel.`,
    technologies: ["SQL Server", "Looker Studio", "Tableau", "Microsoft Excel"],
  },
  {
    year: "Nov 2022 - Dec 2022",
    role: "Frontend Web Developer Intern",
    company: "Seeds",
    description: `Fixed bugs on the user login and OTP authorization page, translated UI designs from Figma into structured React JSX and Tailwind CSS code, and maintained web functionality by synchronizing local branches with the production Git branch.`,
    technologies: ["Next.js", "React", "Tailwind CSS"],
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
  address: "BSD City, Tangerang, Banten 15339",
  phoneNo: "+62 895 2307 7397",
  email: "ryu.alvano@outlook.com",
};
