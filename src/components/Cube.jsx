import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";

function Cube() {
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial color="white">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#c77dff"]} />

          <Text fontSize={0.7} position={[0, 1, 1]} color="Black">
            SENETH
          </Text>
          <Text fontSize={1} color="Black">
            Mendis
          </Text>
          <Text fontSize={0.7} position={[0, -1, 1]} color="Black">
            WebDev
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default Cube;
