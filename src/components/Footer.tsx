import React from 'react';
import { Github, Linkedin, Mail, Heart, Twitter } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, NAVIGATION_ITEMS } from '../utils/constants';

export {}; 


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {PERSONAL_INFO.bio}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              📍 {PERSONAL_INFO.location}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {NAVIGATION_ITEMS.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Get In Touch
            </h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>{PERSONAL_INFO.phone}</div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = getSocialIcon(social.icon);
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>© {currentYear} {PERSONAL_INFO.name}. Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React & TypeScript</span>
            </div>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <span>Deployed with GitHub Pages</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;