import { Candidate } from "../interfaces/Candidate.interface";

const GITHUB_TOKEN: string | undefined = import.meta.env.VITE_GITHUB_TOKEN;

const getHeaders = (): HeadersInit => {
  const headers: HeadersInit = {};
  if (GITHUB_TOKEN) {
    headers.Authorization = `token ${GITHUB_TOKEN}`; // Correct GitHub API format
  }
  return headers;
};

// Fetches a random list of GitHub users
const searchGithub = async (): Promise<Candidate[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    console.log("Using GitHub Token:", GITHUB_TOKEN); // Debugging

    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Invalid API response: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  }
};

// Fetches a single GitHub user's details
const searchGithubUser = async (username: string): Promise<Candidate | null> => {
  try {
    console.log("Fetching user:", username);

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Invalid API response: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error fetching user:", err);
    return null;
  }
};

export { searchGithub, searchGithubUser };

