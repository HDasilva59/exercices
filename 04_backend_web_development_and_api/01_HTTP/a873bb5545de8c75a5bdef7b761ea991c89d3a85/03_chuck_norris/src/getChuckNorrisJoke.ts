import request from "@fewlines-education/request";

function getChuckNorrisJoke(category: string): void {
  request(`https://api.chucknorris.io/jokes/random?category=${category}`, (error, body) => {
    if (error) {
      console.error(error);
      return;
    } else {
      const dajoke = JSON.parse(body);
      console.log(dajoke);
    }
  });
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
