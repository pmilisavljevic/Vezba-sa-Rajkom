import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import TestPage from "./pages/TestPage";
import Post from "./pages/Post";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TestPage" element={<TestPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="RegisterPage" element={<RegisterPage />} />
        <Route path="LoginPage" element={<LoginPage />} />

        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// napraviti login formu DONE , material ui DONE
// redirekcija na login posle registracije DONE
// prikazati greske prilikom ukucavanja podataka DONE
// login logika!
// prikaziti error tokom registracije (try, CATCH, finally) DONE?
