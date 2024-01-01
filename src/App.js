import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ProfilePage } from "./ProfilePage";
import { Menu } from "./Menu";
import { LogoutPage } from "./LogoutPage";
import { LoginPage } from "./LoginPage";
import { AuthProvider, AuthRoute } from "./auth";
import { BlogPage } from "./Blog/BlogPage";
import { BlogPost } from "./Blog/BlogPost";
import { BlogProvider } from "./Blog/BlogContext";
import { BlogPostForm } from "./Blog/BlogPostForm";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <BlogProvider>
            {/* Para manejo de cabecera */}
            <Menu></Menu>

            {/* Para manejo de lo que se cambia según la ruta */}
            <Routes>
              <Route path="/" element={<HomePage />}></Route>

              {/* Blog tiene subrutas con nested routes */}
              <Route path="/blog" element={<BlogPage />}>
                {/* Para enviar parámetros como el ejemplo del slug */}
                <Route path=":slug" element={<BlogPost />}></Route>
                <Route
                  path=":slug/edit"
                  element={
                    <AuthRoute>
                      <BlogPostForm isNew={false} />
                    </AuthRoute>
                  }
                ></Route>
                <Route
                  path="create"
                  element={
                    <AuthRoute>
                      <BlogPostForm isNew={true} />
                    </AuthRoute>
                  }
                ></Route>
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
          </BlogProvider>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
