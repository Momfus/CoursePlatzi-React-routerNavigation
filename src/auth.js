import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// Esto se haría en back, aca es para hacer un fake auth
const adminList = [
  {
    username: "admin",
    isAdmin: true,
    isEditor: false
  },
  {
    username: "editor",
    isAdmin: false,
    isEditor: true
  },
  {
    username: "user",
    isAdmin: false,
    isEditor: false
  },
  {
    username: "Momfus",
    isAdmin: false,
    isEditor: true
  }
];

const AuthContext = React.createContext();

// Aca se utilizaria un fake auth para saber que se esta logueado o no
function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = ({username}) => {
    const user = adminList.find((admin) => admin.username === username);
    const isAdmin = user ? user.isAdmin : false;
    const isEditor = user ? user.isEditor : false;
    setUser({ username, isAdmin, isEditor });
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

// Esto verifica si hay un usuarios, si no hay lo redirige a login
function AuthRoute(props) {
  const auth = useAuth();

  if(!auth.user) {
    return <Navigate to="/login"/>
  } 

  return props.children;

}

export { AuthProvider, useAuth, AuthRoute };
