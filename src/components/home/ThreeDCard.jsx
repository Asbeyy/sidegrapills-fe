import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const gltfPath = "public/viagra_4/scene.gltf"; // Update with the path to your GLTF model
  const gltf = useGLTF(gltfPath);

  // const [rotX, setRotX] = useState(0);
  // const [firstLoad, setFirstLoad] = useState(true);

  // useEffect(() => {
  //   if (firstLoad) {
  //     animate();
  //     setFirstLoad(false);
  //   }
  // }, []);

  // function animate() {
  //   setRotX((currentValue) => currentValue + 0.005);

  //   requestAnimationFrame(animate);
  // }

  return (
    <group>
      <mesh>
        <primitive
          position={[-0.4, 0, 1.6]}
          rotation-x={1.6}
          rotation-z={0.7}
          object={gltf.scene}
        />
      </mesh>
    </group>
  );
}

function ThreeDCard(props) {
  return (
    <div className={`pill-3d-container ${props.classTo}`}>
      <Canvas>
        <ambientLight />
        <pointLight intensity={1} position={[1, 1, -2]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ThreeDCard;
