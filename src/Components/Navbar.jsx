// src/components/Navbar.jsx

import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Services", link: "#services" },
    { name: "Blogs", link: "#blogs" },
    { name: "Projects", link: "#projects" },
    { name: "Certificates", link: "#certificates" },
    { name: "Contact", link: "#contact" },
  ];

  // Track active section for highlighting
  useEffect(() => {
    const sections = menuItems.map((item) => document.querySelector(item.link));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Show navbar when user hovers near the top
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] max-w-5xl px-6 py-3 flex justify-between items-center z-50 
        transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="text-[#a78bfa] font-bold text-lg tracking-wide">
        Aakashi's Portfolio
      </div>

      {/* Desktop */}
      <div className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`relative px-3 py-1 font-medium transition-colors duration-200 rounded-md ${
              active === item.link
                ? "text-[#1b003d]"
                : "text-white/80 hover:text-[#90e0ef]"
            }`}
          >
            {item.name}
            {active === item.link && (
              <span className="absolute inset-0 bg-white rounded-md -z-10" />
            )}
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-full bg-[#1b003d]/90 backdrop-blur-lg rounded-xl shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-white/90 hover:text-[#90e0ef] transition-colors duration-200 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
