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
// import ProtectedRoute from "./state/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="RegisterPage" element={<Register2 />} />
          <Route path="LoginPage" element={<LoginPage />} />

          <Route path="NewPost" element={<NewPost />} />
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="MyPosts" element={<MyPosts />} />
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

kada editujem profil i PUT-ujem, update-uje se u db-u, ali ne i u !localStorage-u! SETUJ U STATU I LOCALU

staviti postove u STATE DONE
napraviti stranicu gde moze da se vidi ceo blog post, useParams DONE
dodati slike za postove DONE
dodati generisani datum kada je submitovan post  DONE
dodati random sliku svakom korisniku DONE

infinite scroll in reactu
PAGINATION?

bem
@media responsiveness

BACKLOG
- vratiti protectedRoutes
- staviti loader-e gde se ceka api
- srediti TS gde fali
- staviti MainLayout oko celog projekta(tako lakse?)



FUTURE 
- dodati Edit post
- search za postove po title-u
- napraviti kategorije postova i filtere za prikazivanje MOZE
*/
