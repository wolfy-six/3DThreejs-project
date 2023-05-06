import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width:786px){
    display:none;
  }

`;
const Title = styled.h1`
  font-size: 64px;
  @media only screen and (max-width:786px){
   font-size:45px; 
  }
`;
const WhatWeDo = styled.div``;

const Subtitle = styled.h2`
  color: #d90368;
`;
const Discription = styled.p`
@media only screen and (max-width:786px){
  text-align:center;
   padding:20px; 
  }

`;

const Button = styled.button`
  padding: 10px;
  width: 120px;
  border-radius: 5px;
  border: none;
  background-color: #d90368;
  color: white;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width:786px){
    align-items:center;
    text-align:center;
    
  }
`;

function About() {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Discription>
            We enjoy shit and more BS from others to suck it
            to you DH
          </Discription>
          <Button>See Our Work</Button>
        </Right>
      </Container>
    </Section>
  );
}
export default About;
