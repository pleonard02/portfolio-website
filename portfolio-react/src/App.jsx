import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import "./App.css";
import CursorSpotlight from "./components/CursorSpotlight";

function App() {
  return (
    <BrowserRouter>
      <CursorSpotlight />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/skills" element={<h1>Skills</h1>} />
        <Route path="/other" element={<h1>Other</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
