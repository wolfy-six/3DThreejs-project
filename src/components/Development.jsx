import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Stage } from "@react-three/drei";
import Bike from "./Bike";


export default function Development() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Bike />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

