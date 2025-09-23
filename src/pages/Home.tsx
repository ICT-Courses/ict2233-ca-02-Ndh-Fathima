import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, SAMPLE_PROJECTS } from '../utils/constants';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  const featuredProjects = SAMPLE_PROJECTS.filter(project => project.featured).slice(0, 3);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return Github;
      case 'linkedin':
        return Linkedin;
      case 'mail':
        return Mail;
      default:
        return Mail;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
                    Hello, I'm
                  </p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {PERSONAL_INFO.name}
                    </span>
                  </h1>
                  <p className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                    {PERSONAL_INFO.tagline}
                  </p>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 group shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-lg transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  Get In Touch
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                {SOCIAL_LINKS.map((link) => {
                  const IconComponent = getSocialIcon(link.icon);
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110"
                      aria-label={link.name}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full p-1 shadow-2xl">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="text-8xl lg:text-9xl">👩‍💻</div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-2xl rotate-12 shadow-lg opacity-90 animate-bounce"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full shadow-lg opacity-90 animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-pink-400 rounded-lg rotate-45 shadow-lg opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "15+", label: "Technologies" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} type="portfolio" />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️" },
              { name: "TypeScript", icon: "🔷" },
              { name: "Node.js", icon: "🟢" },
              { name: "Tailwind", icon: "🎨" },
              { name: "Firebase", icon: "🔥" },
              { name: "Git", icon: "📦" }
            ].map((skill) => (
              <div key={skill.name} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              Learn More About Me
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
