import { log } from "console";
import EventEmmiter from "events";

class Post extends EventEmmiter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on("likePost", (username) =>
      console.log(`${username} liked your post!`)
    );
    this.on("error", (error) => console.log(error));
  }
  like(username) {
    if (!username) {
      // return from fn if there is no username
      return this.emit("error", "No username in the like request!");
    }
    this.likesQty += 1;
    this.emit("likePost", username);
  }
}

const myPost = new Post("Serge", "My greatest post!");

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);
myPost.like();
setTimeout(() => {
  myPost.like("Sandra");
}, 1000);
setTimeout(() => {
  myPost.like("Lada");
}, 2000);
// console.log(myPost.likesQty);
