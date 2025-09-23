import { Project, Skill, Experience, Education, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: "Nadha Siddeek",
  tagline: "Undergraduate at the university of SriJayawardenapura & UI/UX Enthusiast",
  email: "nadhafathima565@gmail.com",
  phone: "+94 75 800 5838",
  location: "Matale, Sri Lanka",
  bio: "Passionate developer with expertise in React, TypeScript, and modern web technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems.",
  githubUsername: "Ndh-Fathima", 
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/fathimahudha",
    icon: "github"
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/fathimahudha",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:fathima.hudha@example.com",
    icon: "mail"
  }
];

export const SKILLS: Skill[] = [
  { name: "React", level: "Advanced", category: "Frontend", icon: "⚛️" },
  { name: "TypeScript", level: "Advanced", category: "Frontend", icon: "🔷" },
  { name: "JavaScript", level: "Expert", category: "Frontend", icon: "🟨" },
  { name: "HTML/CSS", level: "Expert", category: "Frontend", icon: "🌐" },
  { name: "Tailwind CSS", level: "Advanced", category: "Frontend", icon: "🎨" },
  { name: "Sass/SCSS", level: "Advanced", category: "Frontend", icon: "🎯" },
  { name: "Node.js", level: "Intermediate", category: "Backend", icon: "🟢" },
  { name: "Express.js", level: "Intermediate", category: "Backend", icon: "⚡" },
  { name: "MongoDB", level: "Intermediate", category: "Backend", icon: "🍃" },
  { name: "Firebase", level: "Intermediate", category: "Backend", icon: "🔥" },
  { name: "Git", level: "Advanced", category: "Tools", icon: "📦" },
  { name: "VS Code", level: "Expert", category: "Tools", icon: "💻" },
  { name: "Figma", level: "Intermediate", category: "Tools", icon: "🎨" },
  { name: "Problem Solving", level: "Expert", category: "Soft Skills", icon: "🧩" },
  { name: "Team Collaboration", level: "Advanced", category: "Soft Skills", icon: "🤝" },
  { name: "Communication", level: "Advanced", category: "Soft Skills", icon: "💬" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Tech Solutions Lanka",
    period: "2023 - Present",
    description: "Developed and maintained responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborated with design teams to implement pixel-perfect user interfaces and improved application performance by 40%.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    current: true
  },
  {
    id: "2",
    title: "Junior Web Developer",
    company: "Digital Creative Agency",
    period: "2022 - 2023",
    description: "Built interactive web applications and contributed to the development of reusable component libraries. Gained experience in full-stack development and API integration while working on client projects.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    current: false
  },
  {
    id: "3",
    title: "Web Development Intern",
    company: "StartUp Hub Colombo",
    period: "2021 - 2022",
    description: "Assisted in developing company website and internal tools. Learned modern web development practices and collaborated with senior developers on various projects.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    current: false
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Information Technology",
    institution: "University of Colombo School of Computing (UCSC)",
    period: "2020 - 2024",
    description: "Specialized in Software Engineering with focus on web technologies and database systems.",
    gpa: "3.8/4.0"
  },
  {
    id: "2",
    degree: "Advanced Level (Science)",
    institution: "Royal College Colombo",
    period: "2018 - 2020",
    description: "Physics, Chemistry, Combined Mathematics"
  }
];

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce website with user authentication, shopping cart, and payment integration",
    longDescription: "Complete e-commerce solution built with React and Node.js featuring user authentication, product catalog, shopping cart, order management, and Stripe payment integration. Includes admin dashboard for product and order management.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/fathimahudha/ecommerce-platform",
    demoUrl: "https://fathima-ecommerce.netlify.app",
    imageUrl: "/images/project1.png",
    featured: true,
    category: "web"
  },
  {
    id: "2", 
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts and interactive maps",
    longDescription: "Weather dashboard application that provides current conditions, 7-day forecasts, and interactive weather maps. Features geolocation support, search functionality, and detailed weather analytics using OpenWeather API.",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/fathimahudha/weather-dashboard",
    demoUrl: "https://fathima-weather.netlify.app",
    imageUrl: "/images/project2.png", 
    featured: true,
    category: "web"
  },
  {
    id: "3",
    title: "Task Management App", 
    description: "Collaborative project management tool with real-time updates and team features",
    longDescription: "Full-stack task management application with real-time collaboration features, file uploads, team management, and progress tracking. Built with React and Firebase for real-time synchronization.",
    technologies: ["React", "Firebase", "Material-UI", "WebSocket", "Cloud Functions"],
    githubUrl: "https://github.com/fathimahudha/task-manager",
    demoUrl: "https://fathima-tasks.netlify.app",
    imageUrl: "/images/project3.png",
    featured: false,
    category: "web"
  },
  {
    id: "4",
    title: "Recipe Finder",
    description: "Recipe search and meal planning application with nutritional information",
    longDescription: "Recipe discovery app that helps users find recipes based on ingredients they have, dietary restrictions, and nutritional goals. Features meal planning and grocery list generation.",
    technologies: ["React", "Spoonacular API", "CSS Modules", "Local Storage"],
    githubUrl: "https://github.com/fathimahudha/recipe-finder",
    demoUrl: "https://fathima-recipes.netlify.app",
    imageUrl: "/images/project1.png",
    featured: false,
    category: "web"
  },
  {
    id: "5",
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills",
    longDescription: "Responsive portfolio website built with React and TypeScript, featuring dark mode, smooth animations, and GitHub API integration for dynamic project display.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub API"],
    githubUrl: "https://github.com/fathimahudha/portfolio",
    demoUrl: "https://fathimahudha.github.io",
    imageUrl: "/images/project2.png",
    featured: false,
    category: "web"
  },
  {
    id: "6",
    title: "Expense Tracker",
    description: "Personal finance management tool with budgeting and analytics",
    longDescription: "Expense tracking application with category-based spending analysis, budget setting, and financial goal tracking. Features data visualization and export functionality.",
    technologies: ["React", "Chart.js", "IndexedDB", "PWA", "CSS Grid"],
    githubUrl: "https://github.com/fathimahudha/expense-tracker",
    demoUrl: "https://fathima-expenses.netlify.app",
    imageUrl: "/images/project3.png",
    featured: false,
    category: "web"
  }
];

export const API_ENDPOINTS = {
  GITHUB_USER: `https://api.github.com/users/${PERSONAL_INFO.githubUsername}`,
  GITHUB_REPOS: `https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=6`,
};

export const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];