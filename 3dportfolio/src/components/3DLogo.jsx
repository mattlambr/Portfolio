import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// Extend THREE to include TextGeometry
extend({ TextGeometry });

function SpinningText() {
  const textRef = useRef();
  const [font, setFont] = useState();

  // Load the font
  useEffect(() => {
    const loader = new FontLoader();
    loader.load('/fonts/helvetiker_bold.typeface.json', (loadedFont) => {
      setFont(loadedFont);
    });
  }, []);

  useEffect(() => {
    if (textRef.current) {
      // Center the geometry to ensure it rotates around its center
      textRef.current.geometry.center();
    }
  }, [font]);

   // Rotate around itself
  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.005; // Adjust the rotation speed as needed
    }
  }); 

  // Wait for the font to load
  if (!font) return null;

  return (
    <mesh ref={textRef}>
      <textGeometry
        args={[
          'ML',
          {
            font: font,
            size: 2,
            height: 0.5,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelSegments: 10, // Increase bevel segments for smoother edges
            curveSegments: 32, // Add more curve detail
          },
        ]}
      />
      <meshStandardMaterial
        color="#80a0a3"
        roughness={0.1}
        metalness={1}
        emissive="#80a0a3"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function Header3DLogo() {
  return (
    <div
      style={{
        width: '150px', // Increase width of the container
        height: '150px', // Increase height of the container
        overflow: 'visible', // Allow content to overflow if needed
        position: 'relative',
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 10], // Camera stays close
          fov: 50, // Keep FOV standard
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
        gl={{
          antialias: true,
          pixelRatio: Math.min(window.devicePixelRatio, 2),
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        {/* Add Environment for Reflections */}
        <Environment preset="city" />

        {/* Spinning Text */}
        <SpinningText />

        {/* Bloom Effect */}
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        </EffectComposer>

        {/* Optional Controls */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
