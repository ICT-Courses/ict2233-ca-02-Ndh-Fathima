import { Project, Skill, Education, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: "Nadha Siddeek",
  tagline: "Undergraduate at the university of SriJayawardenapura & UI/UX Enthusiast",
  email: "nadhafathima565@gmail.com",
  phone: "+94 75 800 5838",
  location: "Matale, Sri Lanka",
  bio: "I am a student at the University of Sri Jayawardenapura, passionate about frontend fevelopment and creating engaging user expereiences.",
  githubUsername: "Ndh-Fathima", 
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Ndh-Fathima",
    icon: "github"
  },
  {
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/nadha-siddeek-5ab832204",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:nadhafathima565@gmail.com",
    icon: "mail"
  }
];

export const SKILLS: Skill[] = [
  { name: "React", level: "Advanced", category: "Frontend", icon: "⚛️" },
  { name: "TypeScript", level: "Advanced", category: "Frontend", icon: "🔷" },
  { name: "JavaScript", level: "Expert", category: "Frontend", icon: "🟨" },
  { name: "HTML/CSS", level: "Expert", category: "Frontend", icon: "🌐" },
  
  
  { name: "Node.js", level: "Intermediate", category: "Backend", icon: "🟢" },
  
  { name: "MongoDB", level: "Intermediate", category: "Backend", icon: "🍃" },
  
  { name: "Git", level: "Advanced", category: "Tools", icon: "📦" },
  { name: "VS Code", level: "Expert", category: "Tools", icon: "💻" },
  { name: "Figma", level: "Intermediate", category: "Tools", icon: "🎨" },
  { name: "Problem Solving", level: "Expert", category: "Soft Skills", icon: "🧩" },
  { name: "Team Collaboration", level: "Advanced", category: "Soft Skills", icon: "🤝" },
  { name: "Communication", level: "Advanced", category: "Soft Skills", icon: "💬" },
];



export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "BSc Hons in Information Technology",
    institution: "University of Sri Jayawardenapura",
    period: "2024 - 2027",
    description: "Specialize in Information and Communication Technology",
  },
  {
    id: "2",
    degree: "Advanced Level (Arts(English Meduim))",
    institution: "Amina Girls's National School Matale",
    period: "2019 - 2023",
  }
];

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Employee Management System",
    description: "It is a desktop-based Employee Management System built using WPF (Windows Presentation Foundation) and MySQL",
    longDescription: "WorkLoom is a desktop-based Employee Management System built using WPF (Windows Presentation Foundation) and MySQL. It allows users to manage employees, attendance, payroll, departments, and more with a smooth and interactive interface.",
    technologies: ["Frontend: WPF (.NET 8), Database: MySQL, Language: C#, PDF Export: QuestPDF"],
    githubUrl: "https://github.com/ICT-Courses/application-development-ca1-Ndh-Fathima.git",
    demoUrl: "https://drive.google.com/file/d/1mcZzMJCJCMKnoow9k7ZnYpcGKa-ZcP5b/view?usp=sharing",
    imageUrl: "https://shiftin.app/wp-content/uploads/2021/10/what-are-employee-management-systems.jpg",
    featured: true,
    category: "desktop"
  },
  {
    id: "2", 
    title: "Student Registration System",
    description: "A web application that allows students to register for courses and manage their profiles, while enabling administrators to manage student records, track enrollments, and generate reports efficiently.",
    longDescription: "A web-based application that enables students to easily register for courses, manage their personal profiles, and view enrollment details. Administrators can efficiently manage student records, track course registrations, and generate reports, streamlining the overall registration process and improving data management.",
    technologies: ["flask", "CSS","HTML","JavaScript"],
    githubUrl: "https://github.com/SD187/EduNova-Student-Registration-System.git",
    demoUrl: "https://drive.google.com/file/d/1zX0wiXJheNVqdzi82dMys6wW1FSkfIiE/view?usp=drivesdk",
    imageUrl: "https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.jpg?s=612x612&w=0&k=20&c=Fnx06haU4IHYLcRpy9Po_TBknvBqVjicGuUWkGu8e6Y=", 
    featured: true,
    category: "web"
  },
  {
    id: "3",
    title: "Book Library", 
    description: "This online book library offers easy access to books and resources anytime, anywhere.",
    longDescription: "An online book library is a digital platform to browse, read  books anytime. It offers easy search, organized categories, and instant access to e-books.",
    technologies: ["React", "CSS", "Java Script", "HTML"],
    githubUrl: "https://github.com/ICT-Courses/ict2233-ca-01-Ndh-Fathima.git",
    demoUrl: "hhttps://drive.google.com/file/d/1B4oDLVu9388ce-y0g3O1vgiWH-0trpkr/view?usp=drivesdk",
    imageUrl: "https://img.freepik.com/premium-photo/many-old-books-bookshelf-library_129479-5503.jpg?semt=ais_incoming&w=740&q=80",
    featured: true,
    category: "web"
  },
  
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
  { name: 'More', path: '/NotFound' },
];