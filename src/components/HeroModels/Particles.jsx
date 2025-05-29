import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 200 }) => {
  const particles = useRef();
  
  // Initialize particles with random positions and velocities
  const particlesData = useMemo(() => {
    const data = new Float32Array(count * 4); // x, y, z, speed
    for (let i = 0; i < count; i++) {
      const i4 = i * 4;
      // Position
      data[i4] = (Math.random() - 0.5) * 20; // x
      data[i4 + 1] = Math.random() * 15 + 5; // y (start above)
      data[i4 + 2] = (Math.random() - 0.5) * 20; // z
      // Speed
      data[i4 + 3] = 0.01 + Math.random() * 0.02;
    }
    return data;
  }, [count]);

  // Create initial positions buffer
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i4 = i * 4;
      const i3 = i * 3;
      pos[i3] = particlesData[i4];
      pos[i3 + 1] = particlesData[i4 + 1];
      pos[i3 + 2] = particlesData[i4 + 2];
    }
    return pos;
  }, [count, particlesData]);

  // Animation loop
  useFrame(() => {
    if (!particles.current) return;
    
    const positions = particles.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      const i4 = i * 4;
      const i3 = i * 3;
      
      // Update Y position based on speed
      positions[i3 + 1] -= particlesData[i4 + 3];
      
      // Reset particle when it falls below threshold
      if (positions[i3 + 1] < -5) {
        positions[i3] = (Math.random() - 0.5) * 20;
        positions[i3 + 1] = Math.random() * 5 + 15;
        positions[i3 + 2] = (Math.random() - 0.5) * 20;
      }
    }
    
    particles.current.geometry.attributes.position.needsUpdate = true;
    particles.current.rotation.y += 0.0005; // Slow rotation
  });

  return (
    <points ref={particles}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.08}
        color="#4cc9f0"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
        alphaTest={0.01}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;