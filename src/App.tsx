import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.scss";

import Homepage from "./pages/Homepage/Homepage";
import NewPost from "./pages/NewPost/NewPost";
import Register2 from "./pages/Register/Register2";
import LoginPage from "./pages/Login/LoginPage";
import EditProfile from "./pages/EditProfile/EditProfile";
import MyPosts from "./pages/MyPosts/MyPosts";
import PostPage from "./pages/Post/PostPage";
import EditPost from "./pages/EditPost/EditPost";

import ProtectedRoute from "./state/ProtectedRoute";
import { SearchValueProvider } from "./state/SearchContext";
import { ContextProvider } from "./state/context";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <SearchValueProvider>
          <MainLayout>
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
              <Route
                path="/editpost/:id"
                element={
                  <ProtectedRoute>
                    <EditPost />
                  </ProtectedRoute>
                }
              />

              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
          </MainLayout>
        </SearchValueProvider>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

/* 
ZA DALJE

- vratiti protectedRoutes DONE
- staviti MainLayout oko celog projekta(tako lakse?) DONE
- search za postove po title-u DONE, search kondiciono se prikazuje samo na homepage-u
- napraviti kategorije postova i filtere za prikazivanje MOZE DONE
- dodati Edit post DONE
- toastify DONE
- srediti TS gde fali DONE

bem
@media responsiveness IZGLEDA KATASTROFALNO

BACKLOG
- staviti loader-e gde se ceka api



FUTURE 
*/
