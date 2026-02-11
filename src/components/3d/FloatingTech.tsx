import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function FloatingLaptop({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} ref={groupRef}>
        <Box args={[2, 0.1, 1.4]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#1a365d" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[2, 1.2, 0.05]} position={[0, 0.65, -0.65]} rotation={[-0.3, 0, 0]}>
          <meshStandardMaterial color="#0d1b2a" metalness={0.9} roughness={0.1} />
        </Box>
        <Box args={[1.8, 1, 0.02]} position={[0, 0.65, -0.62]} rotation={[-0.3, 0, 0]}>
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
        </Box>
      </group>
    </Float>
  );
}

function FloatingDesktop({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group position={position} ref={groupRef}>
        <Box args={[2.5, 1.5, 0.1]} position={[0, 0.8, 0]}>
          <meshStandardMaterial color="#1a365d" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[2.3, 1.3, 0.05]} position={[0, 0.8, 0.03]}>
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} />
        </Box>
        <Box args={[0.3, 0.8, 0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#0d1b2a" metalness={0.9} roughness={0.1} />
        </Box>
        <Box args={[1, 0.05, 0.6]} position={[0, -0.4, 0.1]}>
          <meshStandardMaterial color="#0d1b2a" metalness={0.9} roughness={0.1} />
        </Box>
      </group>
    </Float>
  );
}

// function FloatingPrinter({ position }: { position: [number, number, number] }) {
//   const groupRef = useRef<THREE.Group>(null);
  
//   useFrame((state) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.1;
//     }
//   });

//   return (
//     <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
//       <group position={position} ref={groupRef}>
//         <Box args={[1.8, 0.8, 1.2]} position={[0, 0, 0]}>
//           <meshStandardMaterial color="#1a365d" metalness={0.7} roughness={0.3} />
//         </Box>
//         <Box args={[1.5, 0.05, 0.8]} position={[0, 0.42, 0.3]}>
//           <meshStandardMaterial color="#f0f0f0" metalness={0.1} roughness={0.8} />
//         </Box>
//         <Box args={[0.4, 0.2, 0.05]} position={[0.5, 0.5, -0.58]}>
//           <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.4} />
//         </Box>
//       </group>
//     </Float>
//   );
// }

function GlowingSphere({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[0.3, 32, 32]} position={position}>
        <MeshDistortMaterial color={color} emissive={color} emissiveIntensity={0.5} distort={0.4} speed={2} roughness={0.1} metalness={0.8} />
      </Sphere>
    </Float>
  );
}

function CircuitLines() {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 50; i++) {
      pts.push(new THREE.Vector3((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10));
    }
    return pts;
  }, []);

  return (
    <group>
      {points.map((point, i) => (
        <Float key={i} speed={1 + Math.random()} floatIntensity={0.5}>
          <Icosahedron args={[0.05]} position={[point.x, point.y, point.z]}>
            <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.8} transparent opacity={0.6} />
          </Icosahedron>
        </Float>
      ))}
    </group>
  );
}

function OrbitingRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });
  return (
    <Torus ref={ref} args={[radius, 0.02, 16, 100]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.4} />
    </Torus>
  );
}

export default function FloatingTech() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#ffffff" />
        <FloatingLaptop position={[-4, 1, -2]} />
        <FloatingDesktop position={[4, 0.5, -3]} />
        {/* <FloatingPrinter position={[0, -2, -1]} /> */}
        <GlowingSphere position={[-3, -1, 1]} color="#00d4ff" />
        <GlowingSphere position={[3, 2, 0]} color="#8b5cf6" />
        <GlowingSphere position={[5, -1, 2]} color="#00d4ff" />
        <GlowingSphere position={[-5, 2, -1]} color="#8b5cf6" />
        <CircuitLines />
        <OrbitingRing radius={6} speed={0.1} color="#00d4ff" />
        <OrbitingRing radius={7} speed={-0.08} color="#8b5cf6" />
        <OrbitingRing radius={5} speed={0.12} color="#00d4ff" />
      </Canvas>
    </div>
  );
}
