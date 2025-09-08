import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./style.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
       <Experience />
         <Services />
           <Projects />
      <Skills />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
