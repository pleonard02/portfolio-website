import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
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
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/other" element={<h1>Other</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
