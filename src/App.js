import React from 'react';
import './index.css';
import Home from "./routes/Home"
import About from "./routes/About"
import Portfolio from "./routes/Portfolio"
import Contact from "./routes/Contact"
import Resume from "./routes/Resume"
import {HashRouter as Router, Route, Routes } from "react-router-dom"

//Difine App component given through react
function App() {
  return (
    <>
    <Router>
    {/* Create routes with a path name and which route folder to go to */}
     <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/resume" element={<Resume/>} />
     </Routes>
     </Router>
    </>
  );
}

export default App;