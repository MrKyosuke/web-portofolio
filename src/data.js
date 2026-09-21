import HeroImage from "/assets/hero-img.webp";
import ProfileImage from "/assets/profile_photo.jpg";
import LaptopImage from "/assets/laptop.png";


const Image = {
  HeroImage,
  ProfileImage,
  LaptopImage,
};


export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/kotlin.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/android.png";
import Tools13 from "/assets/tools/pycharm.png";
import Tools14 from "/assets/tools/vite.png";
import Tools15 from "/assets/tools/typescript.png";
import Tools16 from "/assets/tools/php.png";
import Tools17 from "/assets/tools/java.png";
import Tools18 from "/assets/tools/SQL.png";
import Tools19 from "/assets/tools/react_native.png";
import Tools20 from "/assets/tools/expo.png";
import Tools21 from "/assets/tools/yii.png";
import Tools22 from "/assets/tools/laravel.png";
import Tools23 from "/assets/tools/electron.png";
import Tools24 from "/assets/tools/mysql.png";
import Tools25 from "/assets/tools/postgre.png";
import Tools26 from "/assets/tools/oracle.png";
import Tools27 from "/assets/tools/sqlyog.png";
import Tools28 from "/assets/tools/nedb.png";
import Tools29 from "/assets/tools/docker.png";
import Tools30 from "/assets/tools/firebase.png";
import Tools31 from "/assets/tools/git.png";
import Tools32 from "/assets/tools/windows.png";
import Tools33 from "/assets/tools/ubuntu.png";
import Tools34 from "/assets/tools/eclipse.png";

export const listTools = [
  {
    type: "Tools",
    category: "Code Editors & IDEs",
    tools: [
      { id: 1, gambar: Tools1, nama: "Visual Studio Code" },
      { id: 2, gambar: Tools12, nama: "Android Studio" },
      { id: 3, gambar: Tools13, nama: "Pycharm" },
      { id: 4, gambar: Tools34, nama: "Eclipse IDE" }
    ]
  },
  {
    type: "Skills",
    category: "Languages",
    tools: [
      { id: 5, gambar: Tools6, nama: "JavaScript" },
      { id: 6, gambar: Tools7, nama: "Node.JS" },
      { id: 7, gambar: Tools15, nama: "TypeScript" },
      { id: 8, gambar: Tools16, nama: "PHP" },
      { id: 9, gambar: Tools9, nama: "Kotlin" },
      { id: 10, gambar: Tools17, nama: "Java" },
      { id: 11, gambar: Tools18, nama: "SQL" }
    ]
  },
  {
    type: "Skills",
    category: "Frameworks & Libraries",
    tools: [
      { id: 12, gambar: Tools2, nama: "React" },
      { id: 13, gambar: Tools19, nama: "React Native" },
      { id: 14, gambar: Tools14, nama: "Vite" },
      { id: 15, gambar: Tools4, nama: "Tailwind CSS" },
      { id: 16, gambar: Tools20, nama: "Expo" },
      { id: 17, gambar: Tools21, nama: "Yii Framework" },
      { id: 18, gambar: Tools22, nama: "Laravel" },
      { id: 19, gambar: Tools23, nama: "Electron" },
      { id: 20, gambar: Tools5, nama: "Bootstrap" }
    ]
  },
  {
    type: "Skills",
    category: "Database Management System",
    tools: [
      { id: 21, gambar: Tools24, nama: "MySQL" },
      { id: 22, gambar: Tools25, nama: "PostgreSQL" },
      { id: 23, gambar: Tools26, nama: "Oracle" },
      { id: 24, gambar: Tools27, nama: "SQLyog" },
      { id: 25, gambar: Tools28, nama: "NeDB" }
    ]
  },
  {
    type: "Tools",
    category: "Design & VCS",
    tools: [
      { id: 26, gambar: Tools11, nama: "Figma" },
      { id: 27, gambar: Tools10, nama: "Canva" },
      { id: 28, gambar: Tools8, nama: "Github" },
      { id: 29, gambar: Tools31, nama: "Git" }
    ]
  },
  {
    type: "Skills",
    category: "DevOps & Backend Services",
    tools: [
      { id: 30, gambar: Tools29, nama: "Docker" },
      { id: 31, gambar: Tools30, nama: "Firebase" }
    ]
  },
  {
    type: "Tools",
    category: "Systems I Worked With",
    tools: [
      { id: 33, gambar: Tools32, nama: "Windows" },
      { id: 34, gambar: Tools33, nama: "Linux Ubuntu" }
    ]
  }
];

import Proyek1 from "/assets/proyek/binus_map.png";
import Proyek2 from "/assets/proyek/echo_tales.png";
import Proyek3 from "/assets/proyek/focus_roast.png";
import Proyek4 from "/assets/proyek/kurfa.png";
import Proyek5 from "/assets/proyek/budgeting.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Campus Navigator App",
    desk: "An application that can show the location of each BINUS Campus and each class locations.",
    tools: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/MrKyosuke/SE_Project.git",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Echo Tales",
    desk: "A story telling application that requires the Users voice to interact and progress each story.",
    tools: ["Kotlin", "Java", "XML"],
    github: "https://github.com/MrKyosuke/Skripsi.git",
    dad: "500",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "FocusRoast AI",
    desk: "An AI powered desktop Todo List that detects procrastination via real-time screen analysis and provides dynamic interventions to keep users focused.",
    tools: ["React", "TypeScript", "Electron", "JavaScript", "LLM"],
    github: "#",
    dad: "600",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Kurfa Apps",
    desk: "A mobile transaction app built from scratch featuring data dashboards, role-based request workflows, and profile management.",
    tools: ["Expo", "React Native", "TypeScript", "JavaScript", "Firebase API"],
    github: "#",
    dad: "700",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Budgeting Feature",
    desk: "A fullstack budgeting module for a fintech app supporting Excel uploads, CSV exports, and cell-level data validation.",
    tools: ["Docker", "SQLyog", "Yii Framework", "JavaScript", "PHP"],
    github: "#",
    dad: "800",
  },
];

export const listExperience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "WZ Technology",
    date: "December 2025 - June 2026",
    points: [
      "Delivered the Budgeting sub-feature within a Fintech Management application used by GA, Finance & Supplier teams, enabling users to view uploaded Excel-based budgeting lists, export data to CSV, and receive cell-level validation feedback with error messages for invalid upload entries. Built fullstack using Docker, SQLyog, Yii Framework, JS, and PHP.",
      "Built a mobile version of the web application from scratch, covering 3 main pages: Dashboard (data summary & notifications), Request Page (approval workflow with role-based access controlled by the Backend team), and Profile (theme settings, cache clearing, logout). Worked as Frontend developer using Expo, React Native, TypeScript, JS, and Firebase API."
    ],
    delay: "300"
  },
  {
    id: 2,
    role: "Business Analyst",
    company: "PT Bank Central Asia",
    date: "February 2024 - February 2025",
    points: [
      "Designing Functional Flows for multiple projects to ensure clear communication of the requirements and expected system behaviours.",
      "Designing User Flows to visually represent the end-user experience to ensure that the application process would align well with the business needs.",
      "Iterating mockups based on multiple feedbacks given by the stakeholders, vendors and product managers to ensure alignment with business objectives."
    ],
    delay: "400"
  }
];
