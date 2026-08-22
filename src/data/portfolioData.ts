import { NavItem } from '../types';

export const personalInfo = {
  name: "Muhammad Muqeet",
  role: "Software Engineering Student / Full-Stack Developer",
  shortGreeting: "Hi, I am",
  headline: "Full-Stack & Front-End Developer with a passion for software engineering, modern web architectures, and UI/UX design.",
  bio: "I am a Software Engineering student at National College of Business Administration & Economics (NCBA&E) and a web developer who enjoys designing and implementing high-performance, accessible digital applications. With a strong foundation in modern React, TypeScript, state management, and cloud database integrations, I focus on writing clean, maintainable code and translating complex requirements into intuitive user interfaces.",
  location: "Pakistan",
  availability: "Available for new projects & opportunities",
  githubUrl: "https://github.com/muqqeett",
  linkedinUrl: "https://www.linkedin.com/in/muhammadmuqeet04/",
  email: "m.muqeetrasul16@gmail.com",
};

export const navItems: NavItem[] = [
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact me", href: "#contact" },
];

export const aboutPillars = [
  {
    title: "DESIGN",
    description: "Creating accessible, intuitive user interfaces with a focus on visual hierarchy, typography, and responsive user experience.",
    icon: "Palette"
  },
  {
    title: "DEVELOPMENT",
    description: "Building scalable frontend and full-stack web applications using React, TypeScript, Redux Toolkit, and Tailwind CSS.",
    icon: "Code"
  },
  {
    title: "INTEGRATION",
    description: "Connecting dynamic client interfaces with real-time cloud backends, Firebase Firestore, and REST APIs.",
    icon: "Database"
  }
];

export interface SkillItemGajda {
  name: string;
  icon: string;
}

export const skillsData = {
  usingNow: [
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "JAVASCRIPT", icon: "js" },
    { name: "TYPESCRIPT", icon: "ts" },
    { name: "REACT", icon: "react" },
    { name: "TAILWIND CSS", icon: "tailwind" },
    { name: "BOOTSTRAP", icon: "bootstrap" },
    { name: "GIT", icon: "git" },
  ],
  learning: [
    { name: "NEXT.JS", icon: "nextjs" },
    { name: "NODE.JS", icon: "nodejs" },
    { name: "POSTGRESQL", icon: "postgres" },
    { name: "CLOUD ARCHITECTURES", icon: "cloud" },
  ],
  otherSkills: [
    { name: "FIGMA", icon: "figma" },
    { name: "FIREBASE", icon: "firebase" },
    { name: "REDUX TOOLKIT", icon: "redux" },
    { name: "REST APIS", icon: "api" },
    { name: "VS CODE", icon: "vscode" },
    { name: "RESPONSIVE DESIGN", icon: "responsive" },
    { name: "GITHUB", icon: "github" },
  ]
};

export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  type: 'CODED' | 'DESIGNED';
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  image?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "everlane",
    number: "01",
    title: "Everlane Clothing Store",
    description: "An e-commerce storefront built with React, Redux Toolkit, and Firebase, featuring product filtering, cart management, and authentication.",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Shadcn/ui", "Firebase", "React Router"],
    features: [
      "Multi-category product catalog with real-time Firestore database sync",
      "Shopping cart state management with persistent totals",
      "Firebase Authentication for secure user login and signup",
      "Responsive design with mobile navigation drawer"
    ],
    type: "CODED",
    liveUrl: "https://everlane-clothing-store.vercel.app",
    githubUrl: "https://github.com/muqqeett/Everlane-Clothing-Store",
    category: "E-COMMERCE WEB APP",
    image: "/projects/everlane.png"
  },
  {
    id: "banking",
    number: "02",
    title: "Banking & Financial Portal",
    description: "A multi-page responsive financial platform built with HTML5, CSS3, Bootstrap 5, and JavaScript.",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    features: [
      "Multi-page architecture with authentication workflows and security overview",
      "Mobile-first responsive dashboard layout",
      "Interactive customer authentication forms with validation",
      "Structured financial component hierarchy"
    ],
    type: "CODED",
    liveUrl: "https://banking-app-project-1.vercel.app",
    githubUrl: "https://github.com/muqqeett/Banking-App-Project-1",
    category: "FINANCIAL INTERFACE",
    image: "/projects/banking.png"
  },
  {
    id: "stopwatch",
    number: "03",
    title: "Glassmorphic Stopwatch",
    description: "A precision timer web application built with Vanilla JavaScript, featuring millisecond tracking and dark mode toggle.",
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    features: [
      "High-precision time calculation with lap and split time logging",
      "Dark and light theme toggle switcher",
      "Glassmorphic visual styling with fluid responsive feedback"
    ],
    type: "CODED",
    githubUrl: "https://github.com/muqqeett/Stop-Watch",
    category: "UTILITY APPLICATION",
    image: "/projects/stopwatch.png"
  },
  {
    id: "todo-list",
    number: "04",
    title: "Interactive Task Manager",
    description: "A streamlined task management application supporting CRUD operations, completion toggles, and localStorage persistence.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    features: [
      "Dynamic task creation, inline editing, and deletion",
      "Status filtering for active and completed items",
      "Persistent state via browser Local Storage"
    ],
    type: "CODED",
    githubUrl: "https://github.com/muqqeett/ToDo-List",
    category: "PRODUCTIVITY APP",
    image: "/projects/todo.png"
  }
];

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  officialUrl: string;
  description: string;
}

export const educationAndCertifications = {
  education: {
    degree: "Bachelor of Science in Software Engineering (BS SE)",
    institution: "National College of Business Administration & Economics (NCBA&E)",
    status: "Currently Enrolled",
    description: "Focusing on Software Architecture, Web Engineering, Data Structures, Algorithms, Database Systems, and Object-Oriented Design at NCBA&E."
  },
  certifications: [
    {
      title: "Web Development",
      issuer: "Institute of Emerging Careers (IEC)",
      date: "February 02, 2026",
      officialUrl: "https://lnd.iec.org.pk/certificate/Certificate749.png",
      description: "An online authorised course in modern web development, frontend frameworks, responsive component architectures, and full-stack software development principles."
    }
  ] as CertificationItem[]
};
