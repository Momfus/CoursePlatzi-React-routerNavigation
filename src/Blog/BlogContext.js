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


   const blogData = {  data, addData, deleteData, editData };

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