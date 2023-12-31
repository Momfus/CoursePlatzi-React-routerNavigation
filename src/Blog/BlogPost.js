import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../auth";
import { useData } from "./BlogContext";


function BlogPost() {
  const navigate = useNavigate(); // Para navegar entre rutas
  const { slug } = useParams(); // Para obtener los parámetros de la ruta
  const blogData = useData();
  const auth = useAuth();
  
  const blogpost = blogData.data.find((post) => post.slug === slug);
  const isUserAuthor =  auth.user?.username === blogpost.author;
  const canDelete = auth.user?.isAdmin || isUserAuthor;
  const canEdit = auth.user?.isEditor && isUserAuthor;

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

      {/* Pare saber si es admin o el autor del blog*/}
      {canDelete && (
        <button onClick={ () => blogData.deleteData(slug)} >Eliminar blogspost</button>
      )}

      {canEdit && (
        <button onClick={ () => blogData.editData(slug) }>Editar blogspost</button>
      )}
    </>
  );
}

export { BlogPost };
