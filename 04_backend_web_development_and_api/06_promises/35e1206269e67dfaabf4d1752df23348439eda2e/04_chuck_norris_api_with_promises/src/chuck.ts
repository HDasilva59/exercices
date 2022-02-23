import fetch from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export const getReposUrl = async (nickname: string): Promise<string> => {
  try {
    const response = await fetch(`https://api.github.com/users/${nickname}`);
    const repo = await response.json();
    return repo.url;
  } catch (error) {
    throw "user does not exist";
  }
};
