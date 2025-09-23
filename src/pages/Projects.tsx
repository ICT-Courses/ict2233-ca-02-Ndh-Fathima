import React, { useState, useMemo } from 'react';
import { Search, Filter, Github, ExternalLink } from 'lucide-react';
import { SAMPLE_PROJECTS, PERSONAL_INFO } from '../utils/constants';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import ProjectCard from '../components/ProjectCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'github'>('portfolio');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  
  const { repos, loading: reposLoading, error: reposError } = useGitHubRepos(PERSONAL_INFO.githubUsername);

  const categories = ['all', ...Array.from(new Set(SAMPLE_PROJECTS.map(p => p.category)))];

  const filteredProjects = useMemo(() => {
    return SAMPLE_PROJECTS.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, categoryFilter]);

  const filteredRepos = useMemo(() => {
    return repos.filter(repo => 
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (repo.language && repo.language.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [repos, searchTerm]);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my work, from personal projects to open-source contributions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-2 flex">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'portfolio'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Portfolio Projects
            </button>
            <button
              onClick={() => setActiveTab('github')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'github'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              GitHub Repositories
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={activeTab === 'portfolio' ? "Search projects..." : "Search repositories..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          {/* Category Filter (Only for Portfolio) */}
          {activeTab === 'portfolio' && (
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="pl-12 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)} Projects
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {SAMPLE_PROJECTS.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Portfolio Projects</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {repos.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">GitHub Repos</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Stars</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              {new Set(repos.map(repo => repo.language).filter(Boolean)).size}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Languages Used</div>
          </div>
        </div>

        {/* Projects Grid */}
        {activeTab === 'portfolio' ? (
          <div>
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} type="portfolio" />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search terms or filters
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>
            {reposLoading ? (
              <div className="flex justify-center items-center py-16">
                <LoadingSpinner size="lg" />
                <span className="ml-4 text-lg text-gray-600 dark:text-gray-400">
                  Loading repositories...
                </span>
              </div>
            ) : reposError ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">⚠️</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Unable to load repositories
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {reposError}
                </p>
                <a
                  href={`https://github.com/${PERSONAL_INFO.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            ) : filteredRepos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRepos.map((repo) => (
                  <ProjectCard key={repo.id} repo={repo} type="github" />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  No repositories found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search terms
                </p>
              </div>
            )}
          </div>
        )}

        {/* GitHub Profile Link */}
        <div className="text-center mt-16">
          <a
            href={`https://github.com/${PERSONAL_INFO.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <Github className="w-6 h-6" />
            <span className="text-lg font-semibold">View Full GitHub Profile</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;