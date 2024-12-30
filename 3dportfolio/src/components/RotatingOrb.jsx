import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function WireframePolygon() {
  const meshRef = React.useRef();

  // Rotate the polygon along multiple axes
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Icosahedron geometry (20-sided polygon) */}
      <icosahedronGeometry args={[2, 0]} />
      {/* Wireframe material */}
      <meshStandardMaterial color="#dadeef" wireframe />
    </mesh>
  );
}

export default function RotatingPolygon() {
  return (
    <Canvas className="absolute inset-0" camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <WireframePolygon />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
