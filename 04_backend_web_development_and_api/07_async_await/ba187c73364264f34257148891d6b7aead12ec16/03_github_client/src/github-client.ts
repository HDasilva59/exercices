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

export async function getReposUrl(nickname: string): Promise<string> {
  const response = await fetch(`https://api.github.com/users/${nickname}`);
  const object = await response.json();
  const url = object.repos_url;
  if (object.message === "Not Found") {
    throw new Error("the user doesn't exist");
  }
  return url;
}

export async function getRepos(url: string): Promise<Repo[]> {
  const response = await fetch(`${url}`);
  const object = await response.json();
  return object;
}

export const printRepos = (repos: Repo[]): Repo[] => {
  repos.forEach((element, index) => console.log(index + 1 + "-" + element.name));
  return repos;
};

export const printRepository = (repo: Repo): void => {
  console.log(`${repo.name}\n ${repo.description}\n ${repo.subscribers_count}\n ${repo.stargazers_count}\n ${repo.language} \n ${repo.url}`);
};

export async function getProjectInformations (url : string): Promise<Repo> {
  const response = await fetch(`${url}`);
  const object = await response.json();
  return object;
}
