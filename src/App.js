import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { Menu } from "./Menu";
import { BlogPost } from "./BlogPost";
import { LogoutPage } from "./LogoutPage";
import { LoginPage } from "./LoginPage";
import { AuthProvider, AuthRoute } from "./auth";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          {/* Para manejo de cabecera */}
          <Menu></Menu>

          {/* Para manejo de lo que se cambia según la ruta */}
          <Routes>
            <Route path="/" element={<HomePage />}></Route>

            {/* Blog tiene subrutas con nested routes */}
            <Route path="/blog" element={<BlogPage />}>
              {/* Para enviar parámetros como el ejemplo del slug */}
              <Route path=":slug" element={<BlogPost />}></Route>
            </Route>

            <Route path="/login" element={<LoginPage />}></Route>
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            ></Route>
            <Route path="*" element={<p>Not found</p>}>
              {" "}
            </Route>
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
