import Post from "./Index";

export default function PostList({ posts }) {
  return (
    <section className="post-list">
      <div style={{ padding: "16px" }}>
        {posts?.length === 0 ? (
          <p>No posts</p>
        ) : (
          posts.map((post, index) => <Post key={index} post={post} />)
        )}
      </div>
    </section>
  );
}
