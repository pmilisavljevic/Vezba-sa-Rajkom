import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import TestPage from "./pages/TestPage";
import Post from "./pages/NewPost";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { ContextProvider } from "./state/context";
import MainBlogPage from "./pages/MainBlogPage";
import MyPosts from "./pages/MyPosts";
import EditProfile from "./pages/EditProfile";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/TestPage" element={<TestPage />} />

          <Route path="RegisterPage" element={<RegisterPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route
            path="MainBlog"
            element={
              <ProtectedRoute>
                <MainBlogPage />
              </ProtectedRoute>
            }
          >
            <Route index element={<MyPosts />} />
            <Route path="Post" element={<Post />} />
            <Route path="EditProfile" element={<EditProfile />} />
          </Route>

          <Route path="/" element={<Homepage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

// nakon logina se ulazi na main UI sa buttonima za profil, logout, create new post? DONE
// isAuthenticated staviti gde? DONE
// napraviti nove nested rute za main UI i staviti Protected routes oko MainUI elementa DONE
// kondicionalno renderovanje dugmica DONE
// napraviti logiku za logout dugme DONE
// napraviti page za pravljenje posta i editovanje profila DONE
// github i pull request DONE
// gde staviti isLoading? DONE
// DISPLAY I LOGIKA ZA PRAVLJENJE POSTA DONE

// DISPLAY I LOGIKA za editovanje profila

// sass DONE, ali nauciti

/* ZA DALJE
Error ako nije pronadjen korisnik
truthy and falsy what are they
hook za get user data
koriscenje scss u reactu
napraviti react tostify
- kako renderovati postove u MainBlogPage? (map?)
- ideja prepoznavanja usera i dodeljivanja id-ja postovima
- struktura db-a? posts/?
*/

/*IDEJE
- napraviti kategorije postova i filtere za prikazivanje
- editovanje posta
*/
