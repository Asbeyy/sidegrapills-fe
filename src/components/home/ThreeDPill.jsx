import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const gltfPath = "/pills.gltf"; // Update with the path to your GLTF model
  const gltf = useGLTF(gltfPath);

  const [modelLoaded, setModelLoaded] = useState(false); // Flag to track model loading
  const [meshRotation, setMeshRotation] = useState(
    (1 + props.mouseX * 2) * (Math.PI / 180)
  );

  useEffect(() => {
    const radians = (1 + props.mouseX * 10) * (Math.PI / 180);
    setMeshRotation(radians);
    //console.log(props.mouseX);
  }, [props.mouseX]);

  useEffect(() => {
    if (gltf.scene) {
      setModelLoaded(true); // Mark the model as loaded when the scene is available
    }
  }, [gltf.scene]);

  useEffect(() => {
    if (modelLoaded) {
      console.log("ok charlie"); // Log message when model is fully loaded
    }
  }, [modelLoaded]);

  return (
    <group>
      <mesh>
        <primitive
          rotation-x={0}
          rotation-y={meshRotation}
          position={
            window.innerWidth < 500 ? [-5.5, -10, -24] : [-5.5, -2, -10]
          }
          object={gltf.scene}
        />
      </mesh>
    </group>
  );
}

function ThreeDPill(props) {
  return (
    <div className="canvas-threejs">
      <Canvas>
        <ambientLight />
        <pointLight intensity={0.5} position={[10, 10, 10]} />
        <Model mouseX={props.mouseX} />
      </Canvas>
    </div>
  );
}

export default ThreeDPill;
