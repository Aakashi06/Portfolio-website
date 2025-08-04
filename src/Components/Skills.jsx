// src/components/Skills.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
  { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
  { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "Tailwind", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "C++", logo: "https://cdn.worldvectorlogo.com/logos/c.svg" },
  { name: "C", logo: "https://cdn.worldvectorlogo.com/logos/c-1.svg" },
];

const orbits = [
  { radius: 100 },
  { radius: 160 },
  { radius: 220 },
  { radius: 280 },
];

const containerSize = 600;

const positionedSkills = skills.map((skill, index) => {
  let orbitIndex, angle;
  if (skill.name === "C++") {
    orbitIndex = 3;
    angle = Math.PI / 2;
  } else if (skill.name === "C") {
    orbitIndex = 3;
    angle = Math.PI;
  } else {
    orbitIndex = index % orbits.length;
    angle = (index * (2 * Math.PI)) / skills.length;
  }
  return {
    ...skill,
    orbitIndex,
    angle,
  };
});

const Skills = () => {
  const [showStreak, setShowStreak] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setShowStreak((prev) => !prev), 5000);
    return () => clearInterval(interval);
  }, []);

  // Canvas pixel grid animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const cellSize = 30;
    const spacing = 12;
    const grid = [];

    function initGrid() {
      const cols = Math.ceil(window.innerWidth / (cellSize + spacing));
      const rows = Math.ceil(window.innerHeight / (cellSize + spacing));
      grid.length = 0;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (x < 4 || x > cols - 5 || y < 4 || y > rows - 5) {
            grid.push({
              x: x * (cellSize + spacing),
              y: y * (cellSize + spacing),
              opacity: Math.random(),
              targetOpacity: Math.random(),
            });
          }
        }
      }
    }

    function updateGrid() {
      for (let cell of grid) {
        if (Math.abs(cell.opacity - cell.targetOpacity) < 0.01) {
          cell.targetOpacity = Math.random();
        }
        cell.opacity += (cell.targetOpacity - cell.opacity) * 0.02;
      }
    }

    function render() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateGrid();
      for (let cell of grid) {
        ctx.fillStyle = `rgba(75, 52, 139, ${cell.opacity * 0.3})`;
        ctx.fillRect(cell.x, cell.y, cellSize, cellSize);
      }
      animationFrameId = requestAnimationFrame(render);
    }

    initGrid();
    render();
    window.addEventListener("resize", initGrid);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", initGrid);
    };
  }, []);

  return (
    <section
      id="skills"
      className="relative w-full flex flex-col items-center justify-start overflow-hidden pb-24"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ background: "linear-gradient(135deg, #190840, #220c5d)" }}
        animate={{
          background: [
            "linear-gradient(135deg, #190840, #220c5d)",
            "linear-gradient(135deg, #220c5d, #301c6d)",
            "linear-gradient(135deg, #301c6d, #190840)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      />

      {/* Pixel grid canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 mt-24 z-10">
        My Skill Orbits
      </h2>

      {/* Orbits */}
      <div
        className="relative z-10"
        style={{
          width: `${containerSize}px`,
          height: `${containerSize}px`,
        }}
      >
        {orbits.map((orbit, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-dashed border-white/20"
            style={{
              width: `${orbit.radius * 2}px`,
              height: `${orbit.radius * 2}px`,
              top: `${(containerSize / 2) - orbit.radius}px`,
              left: `${(containerSize / 2) - orbit.radius}px`,
            }}
          />
        ))}
        <div
          className="absolute w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
          style={{
            left: `${containerSize / 2 - 32}px`,
            top: `${containerSize / 2 - 32}px`,
          }}
        >
          {"</>"}
        </div>
        {positionedSkills.map((skill, index) => {
          const orbit = orbits[skill.orbitIndex];
          const centerX = containerSize / 2;
          const centerY = containerSize / 2;
          const x = centerX + orbit.radius * Math.cos(skill.angle);
          const y = centerY + orbit.radius * Math.sin(skill.angle);

          return (
            <div
              key={index}
              className="absolute flex flex-col items-center animate-float"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="mt-1 text-xs text-white opacity-80">{skill.name}</span>
            </div>
          );
        })}
      </div>

      {/* GitHub and LeetCode */}
      <div className="mt-32 z-10 w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* GitHub */}
        <div className="w-full md:w-[48%] flex flex-col items-center">
          <h3 className="text-3xl font-semibold text-white mb-4">
            🌱 GitHub Contributions
          </h3>
          <div className="relative w-full h-[500px] rounded-[32px] border border-white/10 backdrop-blur-2xl bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <AnimatePresence mode="wait">
              {showStreak ? (
                <motion.img
                  key="streak"
                  src="https://github-readme-streak-stats.herokuapp.com/?user=Aakashi06&theme=dark&hide_border=false&date_format=M%20j%5B%2C%20Y%5D"
                  alt="GitHub Streak"
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              ) : (
                <motion.img
                  key="contrib"
                  src="https://ghchart.rshah.org/90e0ef/Aakashi06"
                  alt="GitHub Contributions"
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              )}
            </AnimatePresence>
          </div>
          <a
            href="https://github.com/Aakashi06"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors duration-300"
          >
            View GitHub Profile
          </a>
        </div>
        {/* LeetCode */}
        <div className="w-full md:w-[48%] flex flex-col items-center">
          <h3 className="text-3xl font-semibold text-white mb-4">
            🧩 LeetCode Heatmap
          </h3>
          <div className="relative w-full h-[500px] rounded-[32px] border border-white/10 backdrop-blur-2xl bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <AnimatePresence mode="wait">
              {showStreak ? (
                <motion.img
                  key="heatmap"
                  src="https://leetcard.jacoblin.cool/Aakashi_j?theme=dark&ext=heatmap"
                  alt="LeetCode Heatmap"
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              ) : (
                <motion.img
                  key="stats"
                  src="https://leetcard.jacoblin.cool/Aakashi_j?theme=dark"
                  alt="LeetCode Stats"
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              )}
            </AnimatePresence>
          </div>
          <a
            href="https://leetcode.com/u/Aakashi_j/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors duration-300"
          >
            View LeetCode Profile
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
