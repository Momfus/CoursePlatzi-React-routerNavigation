import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPage() {
  return (
    <>
      <h1>Blog</h1>

      {/* Aca usa la referencia de la sub página marcada en App.js */}
      <Outlet />

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
