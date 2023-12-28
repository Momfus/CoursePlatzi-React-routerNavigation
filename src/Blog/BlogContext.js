import React from "react";
import { blogdata } from "./blogdata";
import { useNavigate } from "react-router-dom";

const BlogContext = React.createContext();

const BlogProvider = ({ children }) => {
   const [data, setData] = React.useState(blogdata);
   const naviate = useNavigate();

   const addData = (newData) => {
      setData([...data, newData]);
      naviate("/blog");
   }

   const deleteData = (slug) => {
      const newData = data.filter((post) => post.slug !== slug);
      setData([...newData]);
      naviate("/blog");
   }


   const blogData = {  data, addData, deleteData };

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