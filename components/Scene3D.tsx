"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group, Mesh } from "three";

function Knot() {
  const group = useRef<Group>(null);
  const knot = useRef<Mesh>(null);
  const shell = useRef<Mesh>(null);

  useFrame((state, delta) => {
    // constant spin
    if (knot.current) {
      knot.current.rotation.y += delta * 0.35;
      knot.current.rotation.x += delta * 0.12;
    }
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.06;
      shell.current.rotation.z += delta * 0.04;
    }
    // breathe: slow zoom in & out
    if (group.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.06;
      group.current.scale.setScalar(s);
      // follow the mouse, gently
      group.current.rotation.x +=
        (state.pointer.y * 0.35 - group.current.rotation.x) * 0.04;
      group.current.rotation.y +=
        (state.pointer.x * 0.5 - group.current.rotation.y) * 0.04;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh ref={knot}>
          <torusKnotGeometry args={[1.45, 0.42, 280, 48]} />
          <meshStandardMaterial
            color="#1a3fa8"
            metalness={0.75}
            roughness={0.28}
            emissive="#071533"
            emissiveIntensity={0.7}
          />
        </mesh>
      </Float>
      <mesh ref={shell}>
        <icosahedronGeometry args={[2.9, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.07} />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 6, 6]} intensity={2.2} />
      <directionalLight position={[-5, 3, -6]} intensity={1.4} color="#7fb3ff" />
      <pointLight position={[-7, -2, 4]} intensity={70} color="#22d3ee" />
      <pointLight position={[5, -5, -3]} intensity={45} color="#3b82f6" />
      <pointLight position={[0, 6, -5]} intensity={35} color="#a5c8ff" />
      <Knot />
    </Canvas>
  );
}
