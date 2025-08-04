// src/App.jsx

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact"; // ✅ Import Contact

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <Background />
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section id="home" className="snap-start">
          <Home />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="services" className="snap-start">
          <Services />
        </section>
        <section id="blogs" className="snap-start">
          <Blog />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="certificates" className="snap-start">
          <Certificates />
        </section>
        <section id="contact" className="snap-start">
          <Contact /> {/* ✅ Added Contact section */}
        </section>
      </main>
    </div>
  );
}

export default App;
