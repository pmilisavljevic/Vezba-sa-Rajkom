import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <ContextProvider >
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

// napraviti login formu, material ui
// redirekcija na login posle registracije (useNavigation)
// prikazati greske prilikom ukucavanja podataka 
// login logika
// prikaziti error tokom registracije (try, CATCH, finally)
