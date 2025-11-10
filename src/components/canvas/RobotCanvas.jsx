import React, { Suspense, useEffect, useState, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useInView } from 'react-intersection-observer';

import CanvasLoader from "../Loader";

const Robot = memo(({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/friendly_robot.optimized.glb");
  return (
    <primitive
      object={scene}
      scale={isMobile ? 2.8 : 3.5}
      position={isMobile ? [0, -1.8, 0] : [0, -2.5, 0]}
      rotation={[0, -0.2, 0]}
    />
  );
});

// THE FIX: Accept `className` as a prop from the parent.
const RobotCanvas = ({ className }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    // THE FIX: Apply the passed-in className to this div.
    // This div now has a guaranteed size (e.g., h-[550px]), so the observer can see it.
    <div ref={ref} className={className}>
      {inView && (
        <Canvas
          frameloop='demand'
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 2, 8], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={0.5} />
            <hemisphereLight intensity={0.8} groundColor='black' />
            <spotLight
              position={[-20, 50, 10]}
              angle={0.12}
              penumbra={1}
              intensity={1}
              castShadow
            />
            <pointLight intensity={1.5} />
            <Robot isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default memo(RobotCanvas);