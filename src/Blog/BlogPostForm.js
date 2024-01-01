import React, { useState } from "react";
import { useAuth } from "../auth";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "./BlogContext";

function BlogPostForm({ isNew }) {
  const { user } = useAuth();
  const { slug } = useParams();
  const blogData = useData();
  const navigate = useNavigate();
  const blogpost = slug
    ? blogData.data.find((post) => post.slug === slug)
    : undefined;

  const [post, setPost] = useState({
    title: isNew ? "" : blogpost.title,
    slug: isNew ? "" : blogpost.slug,
    content: isNew ? "" : blogpost.content,
    author: user.username,
  });

  if (!isNew && blogpost.author !== user.username) {
    return navigate("/");
  }

  const handleForm = (event) => {
    event.preventDefault();
    const oldSlug = isNew ? undefined : post.slug;

    // Se hace un slug amigable con url
    post.slug = transformTitleToFriendlyUrl(post.title);
    if (isNew) {
      blogData.savePost(post);
    } else {
      blogData.editPost(post, oldSlug);
    }
    navigate("/blog");
  };

  const transformTitleToFriendlyUrl = (title) => {
    return title
      .trim() // Eliminar espacios en blanco al principio y al final
      .normalize("NFD") // Descomponer caracteres acentuados en su base y acentos
      .replace(/[\u0300-\u036f]/g, "") // Remover acentos
      .toLowerCase() // Convertir a minúsculas
      .replace(/[^a-z0-9]+/g, "-") // Reemplazar caracteres no alfanuméricos por guiones
      .replace(/^-+|-+$/g, ""); // Remover guiones al principio y al final
  };

  return (
    <div>
      <h2>{isNew ? "Create Post" : "Edit Post"}</h2>

      <form onSubmit={handleForm}>
        <p>
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            id="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </p>

        <p>
          <label htmlFor="content">Content</label>
          <br />
          <textarea
            id="content"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          />
        </p>

        <p>
          <button disabled={!post.title || !post.content} type="submit">
            {isNew ? "Save" : "Edit"}
          </button>
        </p>
      </form>
    </div>
  );
}

export { BlogPostForm };
