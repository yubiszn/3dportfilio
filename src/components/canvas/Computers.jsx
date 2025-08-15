import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, tiltX }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.75, -1.5]}
        rotation={[-0.01, -0.2 + tiltX, -0.1]} 
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
  const isMobile = typeof window !== "undefined" ? window.innerWidth <= 500 : false;

  // Track horizontal tilt
  const [tiltX, setTiltX] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { width, left } = currentTarget.getBoundingClientRect();

    
    const x = ((clientX - left) / width - 0.5) * 0.8;
    setTiltX(x);
  };

  const handleMouseLeave = () => {
    setTiltX(0); // reset tilt
  };

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Computers isMobile={isMobile} tiltX={tiltX} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
