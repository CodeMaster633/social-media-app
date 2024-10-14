export default function Post({ post }) {
  return (
    <div
      style={{
        padding: "8px",
        maxWidth: "600px",
        border: "1px solid #ccc",
        marginBottom: "8px",
        textAlign: "center",
    }}
    >
      {post}
    </div>
  );
}
