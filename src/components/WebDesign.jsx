import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Stage } from "@react-three/drei";
import Disk from "./Disk";

export default function WebDesign() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Disk />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
