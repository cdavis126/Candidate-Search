import { Candidate } from "../interfaces/Candidate.interface";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// Fetches a random list of GitHub users
const searchGithub = async (): Promise<Candidate[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;

    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Invalid API response");
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
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Invalid API response");
    }

    return await response.json();
  } catch (err) {
    console.error("Error fetching user:", err);
    return null;
  }
};

export { searchGithub, searchGithubUser };
