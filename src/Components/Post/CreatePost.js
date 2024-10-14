import React from "react";

export default function CreatePost() {
  return (
    <section className="create-post">
      <div className="container">
        <h1 className="title">New Post</h1>
        <button type="submit" className="btn_create-post">Create post</button>
      </div>
      <form className="form create-post_form">
        <input type="text" id="inputText" placeholder="Type something here..." />
      </form>
    </section>
  );
}
