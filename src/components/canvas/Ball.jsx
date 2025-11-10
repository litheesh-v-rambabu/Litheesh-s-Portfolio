// Ball.jsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Decal, useTexture } from "@react-three/drei";

export const Ball = ({ imgUrl, position, scale = 1.5 }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      scale={scale}
      position={position}
    >
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#cccccc"
        metalness={0.1}
        roughness={0.4}
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      {/* Front decal */}
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
      {/* Back decal */}
      <Decal
        position={[0, 0, -1]}
        rotation={[2 * Math.PI, Math.PI, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
  );
};
