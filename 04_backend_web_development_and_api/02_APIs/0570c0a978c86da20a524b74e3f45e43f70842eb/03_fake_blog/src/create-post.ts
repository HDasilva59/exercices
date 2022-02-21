import request from "@fewlines-education/request";
import "dotenv/config";

function createPost(title: string, author: string): void {
  const body = {
    title: `${title}`,
    author: `${author}`,
  };
  request(
    `http://${process.env.HOST}/posts`,
    { method: "post", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } },
    (error, body) => {
      console.log(body);
      if (error) {
        console.error(error);
        return;
      } else {
        const data = JSON.parse(body);
        console.log(data);
        return;
      }
    },
  );
}

export { createPost };
