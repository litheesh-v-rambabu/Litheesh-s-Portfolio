import React, { Suspense, useEffect, useState, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useInView } from 'react-intersection-observer';

import CanvasLoader from "../Loader";

const Computers = memo(({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.optimized.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
});

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div ref={ref} className='w-full h-full'>
      {/* Only render the Canvas when the component is in view */}
      {inView && (
        <Canvas
          frameloop='demand'
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default memo(ComputersCanvas);