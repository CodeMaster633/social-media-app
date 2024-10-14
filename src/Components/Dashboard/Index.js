import React from "react";
import "./Index.css";
import PostList from "../Post/PostList";
import CreatePost from "../Post/CreatePost";

function Index() {
  return (
    <div>
      <CreatePost />
      <PostList posts={["This is a post", "Another post"]} />
    </div>
  );
}

export default Index;
