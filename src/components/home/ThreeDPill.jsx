import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const gltfPath = "/pills.gltf"; // Update with the path to your GLTF model
  const gltf = useGLTF(gltfPath);

  const [modelLoaded, setModelLoaded] = useState(false); // Flag to track model loading

  const [firstLoad, setFirstLoad] = useState(true);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [meshRotation, setMeshRotation] = useState(
    (1 + props.mouseX * 10) * (Math.PI / 180)
  );

  useEffect(() => {
    const radians = (1 + props.mouseX * 10) * (Math.PI / 180);
    setMeshRotation(radians);
  }, [props.mouseX]);

  useEffect(() => {
    if (firstLoad) {
      animate();
      setFirstLoad(false);
    }
  }, []);

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

  function animate() {
    setCurrentRotation((currentValue) => currentValue + 0.01);
    requestAnimationFrame(animate);
  }

  return (
    <group>
      <mesh>
        <primitive
          rotation-x={Math.sin(currentRotation) * 0.1}
          rotation-y={-0.3 + Math.sin(currentRotation) / 3 + meshRotation}
          position={[-5, -3, -10]}
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
