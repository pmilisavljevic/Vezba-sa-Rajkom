import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import TestPage from "./pages/TestPage";
import Post from "./pages/Post";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ContextProvider from "./state/context";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/TestPage" element={<TestPage />} />
          <Route path="/post" element={<Post />} />
          <Route path="RegisterPage" element={<RegisterPage />} />
          <Route path="LoginPage" element={<LoginPage />} />

          <Route path="/" element={<Homepage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

// nakon logina se ulazi na main UI sa buttonima za profil, logout, create new post?
// isAuthenticated staviti gde?
// napraviti nove nested rute za main UI i staviti Protected routes oko MainUI elementa
// kondicionalno renderovanje dugmica

// napraviti page za pravljenje posta
// napraviti page i LOGIKU za editovanje profila
// napraviti logiku za logout dugme
// sass
// github i pull request
// gde staviti isLoading?

// PROTECTED ROUTE

// function ProtectedRoute({ children }) {
//   const { isAuthenticated } = useAppContext();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated) navigate("/");
//   }, [isAuthenticated, navigate]);

//   return isAuthenticated ? children : null;
// }
// export default ProtectedRoute

//tuthy and falsy what are they
// hook za get user data
// koriscenje scss u reactu
// napraviti react tostify
// Dodati rajko na repo da radi reviev PRova
