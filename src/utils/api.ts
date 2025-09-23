import { GitHubRepo } from '../types';

export const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
};

export const fetchGitHubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};