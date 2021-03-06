import request from "@fewlines-education/request";

function getCategories(): void {
  request("https://api.chucknorris.io/jokes/categories", (error, body) => {
    if (error) {
      console.error(error);
      return;
    } else {
      const data = JSON.parse(body);
      console.log(data);
    }
  });
}

// leave line below for tests to work properly
export { getCategories };
