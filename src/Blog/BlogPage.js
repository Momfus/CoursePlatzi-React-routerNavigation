import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useData } from "./BlogContext";

function BlogPage() {
  const blogData = useData();

  return (
    <>
      <h1>Blog</h1>

      {/* Aca usa la referencia de la sub página marcada en App.js */}
      <Outlet />

      {/* Rutas dinámicas */}
      {blogData.data.length > 0 ? (
        <ul>
          {blogData.data.map((post) => {
            return <BlogLink key={post.slug} post={post} />;
          })}
        </ul>
      ) : (
        <p>No hay posteos</p>
      )}
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
