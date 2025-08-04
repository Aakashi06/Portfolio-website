// src/components/Contact.jsx

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";
import { FaPenNib as FaBlog } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen w-full flex flex-col items-center justify-center bg-[#1e004a] relative overflow-hidden p-4 md:p-10"
      >
        {/* Subtle Stars Layer */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(187,134,252,0.08)_0%,_transparent_70%)] animate-pulse" />

        {/* Content Container */}
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 relative z-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#1a0036] to-[#0e0024] rounded-xl border border-purple-500/30 shadow-[8px_8px_0px_#bb86fc] p-6 md:p-8 backdrop-blur-md"
          >
            <div className="text-green-400 font-mono mb-4">contact-form.js</div>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleChange}
                className="bg-[#0a0022] border border-purple-700 rounded px-4 py-2 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={formData.email}
                onChange={handleChange}
                className="bg-[#0a0022] border border-purple-700 rounded px-4 py-2 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter subject..."
                value={formData.subject}
                onChange={handleChange}
                className="bg-[#0a0022] border border-purple-700 rounded px-4 py-2 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <textarea
                name="message"
                placeholder="Enter your message..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-[#0a0022] border border-purple-700 rounded px-4 py-2 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white font-mono font-semibold px-4 py-2 rounded shadow-[4px_4px_0px_#00FF7F] transition"
              >
                🚀 Execute Send()
              </button>
            </form>
          </motion.div>

          {/* cat contact.json */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-gradient-to-br from-[#1a0036] to-[#0e0024] rounded-xl border border-purple-500/30 shadow-[8px_8px_0px_#bb86fc] p-6 md:p-8 backdrop-blur-md flex flex-col justify-between"
          >
            <pre className="text-green-400 font-mono mb-4">cat contact.json</pre>
            <pre className="text-purple-200 text-sm font-mono bg-[#0a0022]/50 p-4 rounded-lg border border-purple-700">
{`{
  name: "Aakashi Jaiswal",
  email: "jaiswalaakashi123@gmail.com",
  location: "India",
  status: "available"
}`}
            </pre>
            <pre className="text-green-400 font-mono mt-6 mb-2">ls social/</pre>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/Aakashi06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-[#bb86fc] transition text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aakashi-jaiswal-6b448524b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-[#bb86fc] transition text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/Aakashi_123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-[#bb86fc] transition text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://leetcode.com/u/Aakashi_j/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-[#bb86fc] transition text-2xl"
              >
                <FaCode />
              </a>
              <a
                href="https://hashnode.com/@Aakashi06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-[#bb86fc] transition text-2xl"
              >
                <FaBlog />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#0a0022] text-center text-purple-300 border-t border-purple-800 py-6 px-4 font-mono text-sm">
        <p>
          &gt; echo "<span className="text-cyan-400">© 2025 Aakashi Jaiswal. All rights reserved.</span>"
        </p>
        <p className="mt-1 text-purple-400">Built with ❤️ and lots of ☕</p>
      </footer>
    </>
  );
};

export default Contact;
