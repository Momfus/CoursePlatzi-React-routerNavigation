import React from "react";
// Link se le coloca la propiedad "to" para indicarle a que ruta debe ir usando hash
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const routes = [];
routes.push({
  to: "/",
  text: "Home",
  private: false,
});
routes.push({
  to: "/blog",
  text: "Blog",
  private: false,
});
routes.push({
  to: "/profile",
  text: "Profile",
  private: true,
});
routes.push({
  to: "/login",
  text: "Login",
  private: false,
  publicOnly: true
});
routes.push({
  to: "/logout",
  text: "Logout",
  private: false,
});

function Menu() {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {/* Para usar Link */}
        {/* <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/blog">Blog</Link>
            </li>
            <li>
               <Link to="/profile">Profile</Link>
            </li> */}

        {/* Usando navlink que es parecido a Link, nos permite en las propiedades className o style funciones (nos devuelve cual es activo con isActive) */}
        {/* <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}s
            to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink 
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}s
            to="/profile">Profile</NavLink>
        </li> */}

        {/* Usando un objeto  */}
        {routes.map((route) => {

          // Retornar en caso que la ruta sea publica y hay usuario
          if( route.publicOnly && auth.user ) return null;
          
          // Retornar en caso que la ruta sea privada y no hay usuario
          if( route.private && !auth.user ) return null;

          // Caso contrario
          return (
            <li key={route.to}>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { Menu };
