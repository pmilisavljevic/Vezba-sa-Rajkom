import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Homepage from "./pages/Homepage/Homepage";

import NewPost from "./pages/NewPost/NewPost";
// import RegisterPage from "./pages/Register/RegisterPage";
import Register2 from "./pages/Register/Register2";
import LoginPage from "./pages/Login/LoginPage";
import { ContextProvider } from "./state/context";
// import MyPosts from "./pages/MainBlogPage/components/MyPosts";
import EditProfile from "./pages/EditProfile/EditProfile";
import MyPosts from "./pages/MyPosts/MyPosts";
import Post from "./components/Post";
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
          <Route path="Post/:id" element={<PostPage />} />

          <Route path="/" element={<Homepage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

// DISPLAY I LOGIKA za editovanje profila DONE
// layout i footer svuda srediti DONE
// formik i yup za registraciju DONEEEEEE
// logout dugme DONE
/* ZA DALJE
kad se user uloguje, ide na glavnu stranu, dodati dugme za my Posts DONE
napraviti react toastify (nakon logina)
nakon submita novog posta da se vrati na myPosts DONE
dropdown menu za create post i edit profile (MUI) DONEEEEEE
na useru de stavi slika(dodati jos jedno polje na Useru)
element za change password u stranici profila
MUI card component za prikazivanje postove(sa toggle expandom) | MUI Card! DONE
truthy and falsy what are they

PROBLEMI
ne dobijam sifru od usera prilikom editovanja profila. RESENO (uzimam podatke iz localStorage)
kada editujem profil i PUT-ujem, update-uje se u db-u, ali ne i u !localStorage-u! SETUJ U STATU I LOCALU


napraviti stranicu gde moze da se vidi ceo blog post, useParams
staviti postove u STATE
dodati Edit post
json server relational data?
infinite scroll in reactu
sta je PAGINATION?
search za postove po title-u
staviti loader-e gde se ceka api
refaktorisati profileUpdate f.
dodati slike za postove
BEM
@media responsiveness
*/
/*IDEJE
- napraviti kategorije postova i filtere za prikazivanje MOZE
- editovanje posta MOZE
- staviti Lazy Loading POGLEDATI NETWORK
- dodati generisani datum kada je submitovan post MOZE
- dodati random sliku svakom korisniku
*/
