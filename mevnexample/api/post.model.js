import { Schema, model } from "mongoose";

const Post = new Schema(
  {
    title: {
      type: String
    },
    body: {
      type: String
    }
  },
  {
    collection: "posts"
  }
);

export default model("Post", Post);
