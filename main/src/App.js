import React from 'react';
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
    </>
  );
}

export default App;