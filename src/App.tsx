// src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>

      {/* Navbar appears on all pages */}
      <Navbar />

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}