// tech.jsx
import React, { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  Stars,
} from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Ball } from "./canvas/Ball";
import CanvasLoader from "./Loader";

// 🌌 Orbital Galaxy Layout
const OrbitalGalaxy = ({ isMobile }) => {
  const groupRef = useRef();

  const radius = isMobile ? 3.5 : 6.5;
  const baseScale = isMobile ? 1.2 : 2.0;
  const variation = isMobile ? 0.3 : 0.7;

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  const items = useMemo(() => {
    return technologies.map((tech, i) => {
      const angle = (i / technologies.length) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      const y = (Math.random() - 0.5) * (isMobile ? 4 : 6);

      const scale = baseScale + (Math.random() - 0.5) * variation;

      return {
        ...tech,
        position: [x, y, z],
        scale,
      };
    });
  }, [isMobile]);

  return (
    <group ref={groupRef}>
      {items.map((item, idx) => (
        <Ball
          key={idx}
          imgUrl={item.icon}
          position={item.position}
          scale={item.scale}
        />
      ))}
    </group>
  );
};

const Tech = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isMobile = window.innerWidth < 768;
  const cameraPosition = isMobile ? [0, 0, 20] : [30, 0, 0];

  return (
    <div className="relative">
      {/* Title (desktop only) */}
      <div
        className={`${
          isMobile ? "hidden" : "block"
        } absolute top-0 left-0 w-full z-10 text-center mt-12`}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My Skills
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Technologies.
        </h2>
      </div>

      <div ref={ref} className="w-full h-[60vh] sm:h-[80vh] md:h-screen">
        {inView && (
          <Canvas
            frameloop="always"
            dpr={[1, 2]}
            camera={{ position: cameraPosition, fov: 45 }}
            gl={{ preserveDrawingBuffer: true, antialias: true }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={0.4}
                maxPolarAngle={isMobile ? Math.PI / 2 : Math.PI}
                minPolarAngle={isMobile ? Math.PI / 2 : 0}
              />
              <ambientLight intensity={0.3} />
              <hemisphereLight
                skyColor="#8888ff"
                groundColor="#444444"
                intensity={0.4}
              />
              <directionalLight
                position={[-10, 10, 5]}
                intensity={1}
                castShadow
              />

              <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
              />
              <OrbitalGalaxy isMobile={isMobile} />
            </Suspense>
            <Preload all />
          </Canvas>
        )}
      </div>
    </div>
  );
};

export default Tech;
