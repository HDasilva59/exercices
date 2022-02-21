import fetch from "node-fetch";

function getCategories(): Promise<string[]> {
  return fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    .then((result) => result);
}

function getJoke(category: string): Promise<string> {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result.value;
    });
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
