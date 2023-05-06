import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Stage } from "@react-three/drei";
import Tree from "./Tree"

function SocialMedia() {
  return (
    <Canvas>
    <Stage environment="city" intensity={0.6} enableZoom={true}>
      <Tree  />
    </Stage>
    <OrbitControls enableZoom={false} />
  </Canvas>
  )
}

export default SocialMedia