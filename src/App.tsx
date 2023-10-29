import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Homepage from "./pages/Homepage/Homepage";

import NewPost from "./pages/NewPost/NewPost";

import Register2 from "./pages/Register/Register2";
import LoginPage from "./pages/Login/LoginPage";
import { ContextProvider } from "./state/context";

import EditProfile from "./pages/EditProfile/EditProfile";
import MyPosts from "./pages/MyPosts/MyPosts";
import { PostPage } from "./pages/Post/PostPage";
import ProtectedRoute from "./state/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="RegisterPage" element={<Register2 />} />
          <Route path="LoginPage" element={<LoginPage />} />

          <Route
            path="NewPost"
            element={
              <ProtectedRoute>
                <NewPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="EditProfile"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="MyPosts"
            element={
              <ProtectedRoute>
                <MyPosts />
              </ProtectedRoute>
            }
          />

          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

/* 
ZA DALJE


PAGINATION DONE

bem
@media responsiveness IZGLEDA KATASTROFALNO

BACKLOG
- vratiti protectedRoutes DONE
- staviti loader-e gde se ceka api
- srediti TS gde fali (PostMui)
- staviti MainLayout oko celog projekta(tako lakse?)
- toastify



FUTURE 
- dodati Edit post
- search za postove po title-u
- napraviti kategorije postova i filtere za prikazivanje MOZE DONE
*/
