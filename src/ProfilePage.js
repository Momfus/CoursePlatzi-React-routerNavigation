import React from "react";
import { useAuth } from "./auth";

function ProfilePage() {
   const auth = useAuth();
 
   return (
     <>
       <h1>Perfil</h1>
       {auth.user ? <p>Welcome, {auth.user.username}</p> : <p>No user is logged in.</p>}
     </>
   );
 }

export { ProfilePage };
