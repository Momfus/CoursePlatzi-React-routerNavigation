import React from "react";
import { blogdata } from "./blogdata";
import { useNavigate } from "react-router-dom";

const BlogContext = React.createContext();

const BlogProvider = ({ children }) => {
   const [data, setData] = React.useState(blogdata);
   const navigate = useNavigate();

   const addData = (newData) => {
      setData([...data, newData]);
      navigate("/blog");
   }

   const deleteData = (slug) => {
      const newData = data.filter((post) => post.slug !== slug);
      setData([...newData]);
      navigate("/blog");
   }

   const editData = (slug) => {
      navigate(`/blog/${slug}/edit`);
   }

   const createData = () => {
      navigate("/blog/create");
   }

   const savePost = (post) => {
      const auxData = [...data];
      auxData.push(post);
      setData(auxData);
      navigate(`/blog/${post.slug}`);
   }

   const editPost = (post, oldSlug) => {
      const auxData = [...data];
      const index = auxData.findIndex((item) => item.slug === oldSlug);
      auxData[index] = post;
      setData(auxData);
      navigate(`/blog/${post.slug}`);
   }


   const blogData = {  data, addData, deleteData, editData, createData, savePost, editPost };

   return (
      <BlogContext.Provider value={blogData}>
         {children}
      </BlogContext.Provider>
   )
   
}

function useData() {
   const data = React.useContext(BlogContext);
   return data;
 }
 

export { BlogProvider, useData };