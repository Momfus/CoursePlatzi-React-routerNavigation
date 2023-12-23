import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPost() {
  const navigate = useNavigate(); // Para navegar entre rutas
  const { slug } = useParams(); // Para obtener los parámetros de la ruta
  
  const blogpost = blogdata.find((post) => post.slug === slug);

  const returnToBlog = () => {
    navigate("/blog");
    // navigate(-1); // -1 para volver a la ruta anterior que se estaba pero recordar que puede ingresarse manualmente a otro lado y devolver el lugar equivocado
    // navigate(-2); // -2 para volver a la ruta dos veces anterior
  }

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog </button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
    </>
  );
}

export { BlogPost };
