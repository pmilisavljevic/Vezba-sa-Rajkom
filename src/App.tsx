import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/TestPage" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
