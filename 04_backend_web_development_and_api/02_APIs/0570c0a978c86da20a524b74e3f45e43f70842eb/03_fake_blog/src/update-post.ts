import request from "@fewlines-education/request";
import "dotenv/config";

function updatePostTitle(id:number, title: string): void {
  const body = { title: `${title}` };
  request(
    `http://${process.env.HOST}/posts/${id}`,
    { method: "patch", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } },
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

function updatePostAuthor(id:number, author: string): void {
  const body = { author: `${author}` };
  request(
    `http://${process.env.HOST}/posts/${id}`,
    { method: "patch", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } },
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

function updatePost(id:number, title:string, author:string):void {const body = { title: `${title}`, author: `${author}` };
request(
  `http://${process.env.HOST}/posts/${id}`,
  { method: "put", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } },
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
);}

export { updatePost, updatePostAuthor, updatePostTitle };
