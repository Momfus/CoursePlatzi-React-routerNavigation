
import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { Menu } from "./Menu";

function App() {
  return (
    <>
      <HashRouter>
        {/* Para manejo de cabecera */}
        <Menu></Menu>

        {/* Para manejo de lo que se cambia según la ruta */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog" element={<BlogPage/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="*" element={<p>Not found</p>}> </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

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
export default App;
