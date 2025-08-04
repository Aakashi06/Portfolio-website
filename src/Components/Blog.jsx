import React from "react";
import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section
      id="blogs"
      className="w-full h-screen flex items-center justify-center bg-[#1e004a] px-4"
    >
      <div
        className="relative w-full max-w-7xl h-full rounded-[30px] overflow-hidden border-4 border-[#bd9fe6] shadow-xl grid grid-cols-1 md:grid-cols-2"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      >
        {/* ✅ LEFT: Girl Illustration */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
          <img
            src="/girl-illustration.png"
            alt="Aakashi Illustration"
            className="w-full h-full object-contain max-h-[90%] relative z-10"
          />
        </div>

        {/* ✅ RIGHT: Text + Button */}
        <div className="relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-12">
          <h1 className="text-[#f9e97d] text-3xl md:text-4xl font-extrabold mb-6 leading-tight drop-shadow">
            I SHARE INSIGHTS<br />& STORIES
          </h1>

          <motion.a
            href="https://aakashi06.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-6 py-3 text-lg font-semibold rounded-xl text-white"
            style={{
              background: "#bd9fe6",
              boxShadow: "0 0 20px #bd9fe6aa",
              border: "2px solid white",
            }}
          >
            Read Now →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
