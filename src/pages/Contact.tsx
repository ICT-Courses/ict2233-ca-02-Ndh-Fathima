import React from 'react';
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../utils/constants';
import ContactForm from '../components/ContactForm';

export {}; 


const Contact: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return Github;
      case 'linkedin':
        return Linkedin;
      case 'twitter':
        return Twitter;
      case 'mail':
        return Mail;
      default:
        return Mail;
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section  for the contact page*/}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* My Contact informations. */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                I'm always excited to take on new challenges and collaborate with 
                amazing people. 
              </p>
            </div>

            {/* My Contact details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Response Time</h3>
                  <p className="text-gray-600 dark:text-gray-400">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* About my Social media details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => {
                  const IconComponent = getSocialIcon(link.icon);
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110 border border-gray-200 dark:border-gray-700"
                      aria-label={link.name}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
                  Available for Projects
                </h3>
              </div>
              <p className="text-green-700 dark:text-green-400">
                
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send me a message
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Asked question Section */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are some common questions I get asked
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              
              {
                question: "Do you work with teams or solo?",
                answer: "I enjoy both! I can work independently on smaller projects or collaborate with your existing team. I'm experienced with agile methodologies and remote collaboration tools."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "My primary focus is on React, TypeScript, Node.js, and modern web technologies. I'm also comfortable with various databases, cloud platforms, and deployment tools."
              },
              
              
              {
                question: "Can you help with existing projects?",
                answer: "Yes! I can help debug issues, add new features, improve performance, or modernize legacy codebases. I'm comfortable working with existing systems and teams."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;