
import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Stage } from "@react-three/drei";
import King from "./King"


function Illustrations() {
  return (
    <Canvas>
    <Stage environment="city" intensity={0.6}>
      <King />
    </Stage>
    <OrbitControls enableZoom={false} />
  </Canvas>
  )
}

export default Illustrations



