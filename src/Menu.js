import React from "react";
// Link se le coloca la propiedad "to" para indicarle a que ruta debe ir usando hash
// import { Link } from "react-router-dom";
import {NavLink } from "react-router-dom";


const routes = [];
routes.push({
  to: '/',
  text: 'Home'
});
routes.push({
  to: '/blog',
  text: 'Blog'
});
routes.push({
  to: '/profile',
  text: 'Profile'
});

function Menu() {
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

        {/* Uando un objeto  */}
        {routes.map(route => (
         <li key={route.to}>
            <NavLink 
               style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
               to={route.to}>{route.text}</NavLink>
         </li>
        ))}
      </ul>
    </nav>
  );
}


export { Menu };
