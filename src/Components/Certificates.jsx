// src/components/Certificates.jsx

import React from "react";
import Cert1 from "../assets/Certificate1.png";
import Cert2 from "../assets/Certificate2.png";
import Cert3 from "../assets/Certificate3.png";

import Cert4 from "../assets/Certificate4.png";
// import Cert5 from "../assets/Certificate5.png";
// import Cert6 from "../assets/Certificate6.png";

const certificates = [
  { src: Cert1, title: "Foundations of BI" },
  { src: Cert2, title: "SQL Case Study" },
  // Uncomment these when you add the files:
   { src: Cert3, title: "Certificate 3" },
  { src: Cert4, title: "Certificate 4" },
  // { src: Cert5, title: "Certificate 5" },
  // { src: Cert6, title: "Certificate 6" },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen w-full px-4 py-20 flex flex-col items-center justify-center bg-[#1e004a] relative overflow-hidden"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-mono">
        🎓 Achievements
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col items-start justify-start
              bg-[#22033f]
              rounded-xl border border-purple-500/40
              p-6
              shadow-[0_0_20px_#bb86fc30]
              hover:shadow-[0_0_40px_#bb86fc60]
              transition-all duration-300 ease-out
              group
            `}
          >
            {/* File name */}
            <div className="w-full text-green-400 font-mono text-sm mb-2">
              {`certificate-${index + 1}.json`}
            </div>
            {/* Image */}
            <img
              src={cert.src}
              alt={cert.title}
              className="w-full rounded-lg object-cover border border-purple-500/20"
            />
            {/* Metadata */}
            <pre
              className="mt-4 text-xs text-purple-200 bg-[#1a012f]/60 p-3 rounded-lg w-full overflow-x-auto font-mono"
            >
{`{
  "title": "${cert.title}"
}`}
            </pre>
           
          </div>
        ))}
      </div>

      {/* Background sparkles */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#bb86fc22 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.3,
        }}
      />
    </section>
  );
};

export default Certificates;
