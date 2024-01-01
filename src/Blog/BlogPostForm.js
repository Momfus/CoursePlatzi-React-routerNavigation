import React from "react";
import { useAuth } from "../auth";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "./BlogContext";

function BlogPostForm ({isNew}) {

   const { user } = useAuth();
   const {slug} = useParams();
   const blogData = useData();
   const navigate = useNavigate();

   const blogpost = blogData.data.find((post) => post.slug === slug);

   if (!isNew && blogpost.author !== user.username) {
      return navigate('/')
    }

   return (
      <div>
         <h2>{isNew ? "Create Post": "Edit Post"}</h2>
         <h1>{slug}</h1>
      </div>
   )

}


export { BlogPostForm};