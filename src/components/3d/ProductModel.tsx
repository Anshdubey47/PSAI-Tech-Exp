import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

interface ProductModelProps {
  type: 'laptop' | 'desktop' | 'printer';
}

function Laptop() {
  const groupRef = useRef<THREE.Group>(null);
  
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} scale={1.2}>
        {/* Laptop base */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 0.15, 2]} />
          <meshStandardMaterial color="#1e3a5f" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Keyboard area */}
        <mesh position={[0, 0.08, 0.2]}>
          <boxGeometry args={[2.6, 0.02, 1.2]} />
          <meshStandardMaterial color="#0a1929" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Trackpad */}
        <mesh position={[0, 0.09, 0.7]}>
          <boxGeometry args={[1, 0.01, 0.5]} />
          <meshStandardMaterial color="#162a43" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Screen */}
        <group position={[0, 0.95, -0.95]} rotation={[-0.4, 0, 0]}>
          <mesh>
            <boxGeometry args={[3, 1.8, 0.08]} />
            <meshStandardMaterial color="#1e3a5f" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Display */}
          <mesh position={[0, 0, 0.05]}>
            <boxGeometry args={[2.7, 1.5, 0.01]} />
            <meshStandardMaterial 
              color="#00d4ff" 
              emissive="#00d4ff" 
              emissiveIntensity={0.3}
              metalness={0.1}
              roughness={0.9}
            />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

function Desktop() {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <group scale={0.8}>
        {/* Monitor */}
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[4, 2.5, 0.15]} />
          <meshStandardMaterial color="#1e3a5f" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 1.5, 0.08]}>
          <boxGeometry args={[3.6, 2.1, 0.01]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#00d4ff" 
            emissiveIntensity={0.25}
          />
        </mesh>
        {/* Stand neck */}
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.4, 1.2, 0.3]} />
          <meshStandardMaterial color="#0a1929" metalness={0.95} roughness={0.05} />
        </mesh>
        {/* Stand base */}
        <mesh position={[0, -0.4, 0.2]}>
          <boxGeometry args={[1.5, 0.08, 0.8]} />
          <meshStandardMaterial color="#0a1929" metalness={0.95} roughness={0.05} />
        </mesh>
        {/* CPU Tower */}
        <mesh position={[2.5, 0.6, 0]}>
          <boxGeometry args={[0.8, 2, 1.5]} />
          <meshStandardMaterial color="#1e3a5f" metalness={0.85} roughness={0.15} />
        </mesh>
        {/* CPU LEDs */}
        <mesh position={[2.92, 1, 0]}>
          <boxGeometry args={[0.02, 0.3, 0.05]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#00d4ff" 
            emissiveIntensity={1}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Printer() {
  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.35}>
      <group scale={1}>
        {/* Main body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 1, 1.8]} />
          <meshStandardMaterial color="#1e3a5f" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Top cover */}
        <mesh position={[0, 0.6, -0.1]}>
          <boxGeometry args={[2.4, 0.15, 1.5]} />
          <meshStandardMaterial color="#162a43" metalness={0.85} roughness={0.15} />
        </mesh>
        {/* Paper output tray */}
        <mesh position={[0, 0.55, 0.6]}>
          <boxGeometry args={[2, 0.05, 0.6]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.1} roughness={0.8} />
        </mesh>
        {/* Control panel */}
        <mesh position={[0.8, 0.6, 0.85]}>
          <boxGeometry args={[0.6, 0.3, 0.1]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#00d4ff" 
            emissiveIntensity={0.4}
          />
        </mesh>
        {/* Status LED */}
        <mesh position={[-0.9, 0.55, 0.9]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial 
            color="#22c55e" 
            emissive="#22c55e" 
            emissiveIntensity={1}
          />
        </mesh>
      </group>
    </Float>
  );
}
function CameraDrift() {
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.3;
    state.camera.position.y = 1 + Math.cos(state.clock.elapsedTime * 0.15) * 0.2;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ProductModel({ type }: ProductModelProps) {
  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
        <CameraDrift /> 
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00d4ff" />
        <spotLight position={[-10, 10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[0, -5, 0]} intensity={0.3} color="#00d4ff" />
        
        <PresentationControls
          global
          rotation={[0.1, 0.4, 0]}
          polar={[-0.4, 0.4]}
          azimuth={[-0.6, 0.6]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          {type === 'laptop' && <Laptop />}
          {type === 'desktop' && <Desktop />}
          {type === 'printer' && <Printer />}
        </PresentationControls>
        
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#00d4ff" />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
