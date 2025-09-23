import React from 'react';
import { Calendar, Award, BookOpen, Code, Coffee, Heart } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EDUCATION } from '../utils/constants';
import SkillCard from '../components/SkillCard';

const About: React.FC = () => {
  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section for the home page */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about my journey, skills, and passion for creating amazing digital experiences
          </p>
        </div>

        {/* About myself in the bio section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Hello! I'm {PERSONAL_INFO.name.split(' ')[0]}
              </h2>
              <div className="text-lg text-gray-600 dark:text-gray-400 space-y-4">
                <p>
                  I am a 2nd-year undergraduate specializing in Information and Communication Technology at the University of Sri Jayewardenepura. 
                  Passionate about leveraging technology to solve real-world problems, I am continuously exploring innovative solutions in software development, 
                  database management, and application design.
                </p>
                <p>
                  With hands-on experience in C#, WPF, MySQL, HTML, CSS, JS, React and project development, 
                  I thrive on turning ideas into functional digital solutions. I am eager to connect with like-minded professionals, 
                  contribute to impactful projects, and grow in areas of software development, IT systems, and emerging technologies.
                </p>

                  
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Coffee className="w-5 h-5" />
                  <span>Tea Enthusiast</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Code className="w-5 h-5" />
                  <span>Problem Solver</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span>Design Lover</span>
                
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-3xl flex items-center justify-center relative overflow-hidden">
                    <div className="text-8xl">👩‍💻</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl rotate-12 shadow-lg opacity-90 animate-bounce flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full shadow-lg opacity-90 animate-pulse flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My top skills */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are the technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* About my Education */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My academic background and continuous learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.gpa && (
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="font-medium">GPA: {edu.gpa}</span>
                      </div>
                    )}
                    {edu.description && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fun Facts about me */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Fun Facts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "☕", title: "Coffee Consumed", value: "∞ cups", subtitle: "Fuel for coding" },
              { icon: "🌙", title: "Night Owl", value: "11 PM - 3 AM", subtitle: "Peak productivity hours" },
              { icon: "🎵", title: "Coding Music", value: "Melody", subtitle: "Perfect focus playlist" },
              { icon: "🏃‍♀️", title: "Fear", value: "Dogs", subtitle: "Maintain distance" }
            ].map((fact, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-4xl mb-4">{fact.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {fact.title}
                </h3>
                <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">
                  {fact.value}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {fact.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;