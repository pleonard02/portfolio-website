import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/skills" element={<h1>Skills</h1>} />
        <Route path="/other" element={<h1>Other</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
