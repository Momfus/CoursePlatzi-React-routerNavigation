import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// Esto se haría en back, aca es para hacer un fake auth
const adminList = ['Irisval', 'momfus', 'arboleo'];

const AuthContext = React.createContext();

// Aca se utilizaria un fake auth para saber que se esta logueado o no
function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = ({username}) => {
    const isAdmin = adminList.includes(username);
    setUser({ username, isAdmin });
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
