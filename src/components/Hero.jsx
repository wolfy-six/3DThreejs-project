import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width:786px){
    height:200vh;
  }

`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:786px){
    width:100%;
   flex-direction:column;
   align-items:center;
   justify-content:center;
  }

`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width:786px){
    flex:1;
    align-items:center;
  }

`;
const Title = styled.h1`
  font-size: 64px;
  @media only screen and (max-width:786px){
    text-align:center; 
  }
`;
const WhatWeDo = styled.div``;
const Subtitle = styled.h2`
  color: #d90368;
`;
const Discription = styled.p`

font-size:16px;
padding:20px;

@media only screen and (max-width:786px){
    text-align:center; 
  }

`;
const Button = styled.button`
  padding: 10px;
  width: 100px;
  border-radius: 5px;
  border: none;
  background-color: #d90368;
  color: white;
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width:786px){
    flex:1;
    width:100%; 
  }
`;
const Img = styled.img`
  height: 800px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @media only screen and (max-width:786px){
    width:100%;
    height:100%;
  }

  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(35px);
    }
  }
`;

function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Discription>
            We enjoy shit and more BS from others to suck it or leave it its up
            to you DH
          </Discription>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#d90368"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/11.png" />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;
