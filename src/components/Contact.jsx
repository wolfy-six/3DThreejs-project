import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";
import Illustrations from "./Illustrations";
import SocialMedia from "./SocialMedia";

const data = [
  "WebDesigner",
  "Development",
  "Illustration",
  "ProductDesign",
  "SocialMedia",
];
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:786px){
  width:100%;
  flex-direction:column;
  }

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;

  @media only screen and (max-width:786px){
   padding:20px;
   justify-content:center;
  }

`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  gap: 20px;
`;
const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width:786px){
   font-size:30px;
   text-transform:uppercase;
   color:white;
   -webkit-text-stroke:0px;
   
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0px;
    overflow: hidden;
    white-spac: nowrap;
  }

  &:hover {
    ::after {
      animation: movaText 0.5s linear both;

      @keyframes movaText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  padding-bottom:50px;
`;

function Contact() {
  const [work, setWork] = useState("WebDesigner");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work == "WebDesigner" ? (
            <WebDesign />
          ) : work == "Development" ? (
            <Development />
          ) : work == "Illustration" ? (
            <Illustrations />
          ) : work == "SocialMedia" ? (
            <SocialMedia />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
}

export default Contact;
