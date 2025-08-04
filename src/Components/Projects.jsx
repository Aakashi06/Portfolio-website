// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  // Replace titles, descriptions, and links with your actual project data
  const projects = [
    {
      title: "Aura CV",
      description: "A fully responsive developer portfolio built with React, Tailwind, and GSAP animations to showcase projects and blogs dynamically.",
      link: "https://www.auracv.shop/",
      bgColor: "#ffdce0",
    },
    {
      title: "AI Content Generator",
      description: "A web app using OpenAI API to generate SEO-friendly blog content with custom tone and structure.",
      link: "https://github.com/yourrepo2",
      bgColor: "#e6e6fa",
    },
    {
      title: "FocusAura Timer",
      description: "An aesthetic pomodoro timer with ambient video backgrounds, analytics, and gamified streak tracking.",
      link: "https://github.com/yourrepo3",
      bgColor: "#d5fdd5",
    },
    {
      title: "Hashnode Blog Scraper",
      description: "A scraper and API to fetch latest Hashnode blogs automatically to display on personal sites with caching.",
      link: "https://github.com/yourrepo4",
      bgColor: "#ffe5b4",
    },
    {
      title: "Vaporwave Landing Page",
      description: "A vaporwave aesthetic landing page with pixel UI and GSAP animations for indie projects.",
      link: "https://github.com/yourrepo5",
      bgColor: "#cceeff",
    },
    {
      title: "Pixel Habit Tracker",
      description: "A blockchain-based habit tracker with daily check-ins and pixel badge rewards for maintaining streaks.",
      link: "https://github.com/yourrepo6",
      bgColor: "#fffacd",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex items-center justify-center bg-[#1e004a] p-6"
    >
      {/* 3D Pixel Dotted Border Wrapper */}
      <div
        className="relative rounded-3xl p-4 sm:p-8 md:p-12 max-w-7xl w-full shadow-[8px_8px_0px_0px_#bb86fc,16px_16px_0px_0px_#ff79c6]"
        style={{
          background: "repeating-conic-gradient(from 45deg, #1e004a 0deg 10deg, #21005a 10deg 20deg)",
          borderImage: "repeating-linear-gradient(45deg, #bb86fc 0 2px, transparent 2px 6px) 20",
          borderWidth: "4px",
          borderStyle: "solid",
        }}
      >
        {/* CRT Scanline Overlay */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none z-10" style={{
          background: "linear-gradient(rgba(0,0,0,0.1) 50%, transparent 50%)",
          backgroundSize: "100% 4px",
          mixBlendMode: "overlay"
        }} />

        {/* Cards Grid Inside Border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 relative z-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl p-4 sm:p-6 md:p-8 font-mono text-sm flex flex-col justify-between shadow-[4px_4px_0px_0px_#bb86fc]"
              style={{ backgroundColor: project.bgColor, color: "#1e004a" }}
            >
              <div className="flex items-start gap-2">
                <span className="text-lg">🐙</span>
                <h3 className="font-bold text-base sm:text-lg">{project.title}</h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-[#333]">
                {project.description}
              </p>
              <button
                onClick={() => handleProjectClick(project.link)}
                className="mt-4 px-4 py-2 border-2 border-[#ff79c6] rounded font-bold flex items-center justify-center gap-1 shadow-[2px_2px_0px_0px_#bb86fc] hover:bg-[#ffefda] transition"
                style={{ backgroundColor: project.bgColor }}
              >
                Checkout Now ↘
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
