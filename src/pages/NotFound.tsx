import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export {}; 


const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
        <div className="mb-12">
          <div className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4 animate-bounce">
            404
          </div>
          <div className="text-6xl mb-6">🚀💥</div>
        </div>

      
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            It appears that this page went out to have a coffee break and never returned.
            There is nothing to fret, it befalls the best of us!
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              The one you are seeking was possibly transferred, lost, or never created.
              But at least, you found this cool 404 page!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-lg transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            While you're here, check out:
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              to="/about"
              className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">👋</div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                About Me
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learn more about my journey
              </p>
            </Link>

            <Link
              to="/projects"
              className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">💼</div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                My Projects
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                See what I've been building
              </p>
            </Link>

            <Link
              to="/contact"
              className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📧</div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Get in Touch
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Let's start a conversation
              </p>
            </Link>
          </div>
        </div>

        
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
            Fun Fact!
          </h3>
          <p className="text-blue-800 dark:text-blue-400">
            This HTTP 404 error was named after the room 404 at CERN where the World Wide Web was developed.
            This is technically a myth, however, this would be a fun tale!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;