import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Stage } from "@react-three/drei";
import Island from "./Island";

export default function ProductDesign() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Island />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
