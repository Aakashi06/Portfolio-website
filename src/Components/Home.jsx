// src/components/Home.jsx

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import avatar from "../assets/avatar.png";

function GalaxyBackground() {
  const pointsRef = useRef();

  const vertices = useMemo(
    () =>
      Array.from({ length: 2000 }, () => [
        THREE.MathUtils.randFloatSpread(80),
        THREE.MathUtils.randFloatSpread(80),
        THREE.MathUtils.randFloatSpread(80),
      ]).flat(),
    []
  );

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    return geom;
  }, [vertices]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0008;
      const time = clock.getElapsedTime();
      const material = pointsRef.current.material;
      material.opacity = 0.6 + 0.4 * Math.sin(time * 0.5);
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color="#ffffff"
        size={0.1}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

function Home() {
  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #200a52, #32004d, #4b0060)",
      }}
    >
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <color attach="background" args={["#1e004a"]} />
        <fog attach="fog" args={["#200a52", 30, 80]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#ffffff" />
        <GalaxyBackground />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-12 z-10 px-4">
        {/* Image */}
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl animate-fadeIn relative md:mr-12">
          <img
            src={avatar}
            alt="Aakashi"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: "0 0 60px 15px rgba(255, 255, 255, 0.4)",
            }}
          />
        </div>

        {/* Text */}
        <div className="text-white max-w-2xl text-center md:text-left space-y-6 animate-typing">
          {/* Clean LEGO-style ASCII */}
          <pre
            className=" ascii-type whitespace-pre-wrap text-lg md:text-sm"
            style={{
              fontFamily: "'Courier New', monospace",
              color: "#FCEF91",
              lineHeight: "1.2",
              whiteSpace:"pre-wrap",
            }}
          >
            
{`
 █████╗  █████╗ ██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗ 
██╔══██╗██╔══██╗██║ ██╔╝██╔══██╗██╔════╝██║  ██║██║ 
███████║███████║█████╔╝ ███████║███████╗███████║██║ 
██╔══██║██╔══██║██╔═██╗ ██╔══██║╚════██║██╔══██║██║ 
██║  ██║██║  ██║██║  ██╗██║  ██║███████║██║  ██║██║ 
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝ 

     ██╗ █████╗ ██╗███████╗██╗    ██╗ █████╗ ██╗     
     ██║██╔══██╗██║██╔════╝██║    ██║██╔══██╗██║     
     ██║███████║██║███████╗██║ █╗ ██║███████║██║     
██   ██║██╔══██║██║╚════██║██║███╗██║██╔══██║██║     
╚█████╔╝██║  ██║██║███████║╚███╔███╔╝██║  ██║███████╗
 ╚════╝ ╚═╝  ╚═╝╚═╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝

`}
          </pre>

          {/* About Me */}
         <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-wide text-white">
         I am a developer who loves building cool things on the web and 
         learning something new every day.
         I work with web technologies and data structures 
         & algorithms, constantly exploring new tools and frameworks.
         I write about my projects and tech concepts 
         on my blog, and share insights on LinkedIn and X.
</p>

          
        </div>
      </div>
    </section>
  );
}

export default Home;
