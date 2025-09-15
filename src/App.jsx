import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail"; // detail page

import "./style.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Halaman utama */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Experience />
              <Services />
              <Projects />
              <Skills />
              <ContactSection />
              <Footer />
            </>
          }
        />

        {/* Halaman detail project */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
