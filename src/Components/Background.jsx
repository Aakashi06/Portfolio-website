// src/components/Background.jsx

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function GalaxyBackground() {
  const pointsRef = useRef();

  // Generate fewer points for a less dense, cleaner look
  const vertices = useMemo(() => {
    return Array.from({ length: 1500 }, () => [
      THREE.MathUtils.randFloatSpread(60),
      THREE.MathUtils.randFloatSpread(60),
      THREE.MathUtils.randFloatSpread(60),
    ]).flat();
  }, []);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    return geom;
  }, [vertices]);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005; // subtle rotation
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color="#00ffff"
        size={0.15}
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  );
}

export default function Background() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 75 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // your Home.jsx gradient
      }}
    >
      <color attach="background" args={["#0f2027"]} />
      <fog attach="fog" args={["#0f2027", 20, 60]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
      <GalaxyBackground />
    </Canvas>
  );
}
