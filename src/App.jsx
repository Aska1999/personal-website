"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    // Ensure AOS is defined before initialization
    if (AOS) {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
      });
    }
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <section id="about" className="section">
          <About />
        </section>
        <section id="education" className="section">
          <Education />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
