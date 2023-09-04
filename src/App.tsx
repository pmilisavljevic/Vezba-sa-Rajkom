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

// napraviti register formu, login formu, material ui, ubaciti buttone i linkovati ih
