import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

// Aca se utilizaria un fake auth para saber que se esta logueado o no
function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  
  const login = (username) => {
    console.log(username);
    setUser(username );
    navigate("/profile");
  }
  
  const logout = () => {
    setUser(null);
    navigate("/");
  }

  const auth = { user, login, logout};

  return (<AuthContext.Provider value={auth}>{children}</AuthContext.Provider>);
}

function useAuth() {
   const auth = useContext(AuthContext);
   return auth;
}

export { AuthProvider, useAuth };
