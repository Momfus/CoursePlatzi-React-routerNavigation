import React from "react";
import { Link } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPage() {
  return (
    <>
      <h1>BlogPage</h1>
      {/* Rutas dinámicas */}
      <ul>
        {blogdata.map((post) => {
          return <BlogLink key={post.slug} post={post} />;
        })}
      </ul>
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export { BlogPage };
