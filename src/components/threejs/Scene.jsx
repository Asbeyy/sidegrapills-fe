import React from "react";
import { Canvas } from "@react-three/fiber";

function Scene() {
  return (
    <>
      <Canvas>
        <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  );
}

export default Scene;
