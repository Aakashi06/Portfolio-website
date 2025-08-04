// src/components/Services.jsx

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    desc: "Crafting responsive, high-performance websites using modern tech stacks.",
  },
  {
    title: "Social Media Management",
    image: "https://cdn-icons-png.flaticon.com/512/3791/3791363.png",
    desc: "Helping brands grow with strategic social media engagement.",
  },
  {
    title: "Content Designer",
    image: "https://cdn-icons-png.flaticon.com/512/1170/1170627.png",
    desc: "Designing compelling content that tells stories and converts.",
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);

  // 3D tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * -10;
      if (containerRef.current) {
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Retro grid animation
  useEffect(() => {
    const canvas = backgroundRef.current;
    const ctx = canvas.getContext("2d");

    let gridSpacing = 40;
    let speed = 0.5;
    let offset = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(187, 134, 252, 0.15)";
      ctx.lineWidth = 1;

      // Horizontal lines
      for (let y = offset; y < canvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      offset += speed;
      if (offset >= gridSpacing) offset = 0;

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <section
      id="services"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 sm:px-12 overflow-hidden bg-[#1e004a] text-white"
    >
      {/* Animated Retro Grid */}
      <canvas
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-purple-200 mb-20 z-10 font-mono tracking-tight glow-title">
        My Services
      </h2>

      {/* Cards */}
      <div
        ref={containerRef}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 transition-all duration-300"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="group bg-[#190d36] border border-[#ab8ad433] rounded-[2rem] p-6 sm:p-8 backdrop-blur-[8px] shadow-[0_0_35px_#bb86fc33] text-center hover:scale-105 hover:shadow-[0_0_45px_#bb86fc99] transition-transform duration-500 ease-in-out"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-6 drop-shadow-[0_0_12px_#bb86fc88] mx-auto"
            />
            <h3 className="text-2xl font-bold text-purple-100 mb-3 font-mono tracking-wide uppercase">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-purple-300 font-light leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Title glow effect */}
      <style>{`
        .glow-title {
          text-shadow: 0 0 8px rgba(187, 134, 252, 0.6),
                       0 0 18px rgba(187, 134, 252, 0.4),
                       0 0 32px rgba(187, 134, 252, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Services;
