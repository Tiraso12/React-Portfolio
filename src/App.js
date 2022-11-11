import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Top from './components/Top';
import About from './components/About';
import Project from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {

  useState('home')

  return (
    <Router>
      <div>
        <Top />
        <main className='container min-vh-75'>
          <Routes>
            <Route
              path="/"
              element={<About />}
            />
            <Route
              path="/project"
              element={<Project />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
