import React from 'react';
import './index.css';
import Home from "./routes/Home"
import About from "./routes/About"
import Portfolio from "./routes/Portfolio"
import Contact from "./routes/Contact"
import Resume from "./routes/Resume"
import {Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
     <Routes>
      <Route path="/portfolio_react_final" element={<Home/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/resume" element={<Resume/>} />
     </Routes>
    </>
  );
}

export default App;