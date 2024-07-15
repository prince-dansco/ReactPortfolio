import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./route/Home";
import Project from "./route/Project";
import About from "./route/About";
import Contact from "./route/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App