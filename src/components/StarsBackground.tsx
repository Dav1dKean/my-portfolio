'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingStars() {
  const groupRef = useRef<THREE.Group>(null);

  // Rotate the group of stars
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0002;
groupRef.current.rotation.x += 0.00005;
;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </group>
  );
}

export default function StarsBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <RotatingStars />
      </Canvas>
    </div>
  );
}
