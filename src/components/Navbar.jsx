import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 786px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;

  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  @media only screen and (max-width: 786px) {
    weight: 100%;
    padding: 10px;
  }
`;
const Links = styled.div`
  display: flex;
  aline-items: center;
  gap: 25px;
`;
const Logo = styled.p`
  font-weight: bold;
  font-size: 1rem;

  @media only screen and (max-width: 786px) {
    font-size: 2rem;
  }
`;
const List = styled.ul`
  display: flex;
  gap: 35px;
  list-style: none;

  @media only screen and (max-width: 786px) {
    display: none;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  filter: invert(100%);

  @media only screen and (max-width: 786px) {
    width: 20px;
    height: 20px;
    margin: auto;
  }
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #d90368;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media only screen and (max-width: 786px) {
    width: 90px;
    padding: 8px;
  }
`;
const Icons = styled.div`
  display: flex;
  aline-items: center;
  gap: 25px;
`;

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo>.SENETH</Logo>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>About</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Read More</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;
