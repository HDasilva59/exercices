import request from "@fewlines-education/request";
import "dotenv/config";

function deletePost(id: number): void {
  request(`http://${process.env.HOST}/posts/${id}`, { method: "delete" }, (error, body) => {
    console.log(body);
    if (error) {
      console.error(error);
      return;
    } else {
      console.log(body);
      return;
    }
  });
}

export { deletePost };
