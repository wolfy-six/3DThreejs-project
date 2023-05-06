import React, { useState, useRef } from "react";
import styled from "styled-components";
import MapChart from "./MapChart";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  justify-content: flex-end;

  @media only screen and (max-width:786px){
    justify-content:center;
  }

`;
const Title = styled.h1`
  font-weight: 600;
`;
const Form = styled.form`
  width: 550px;
  display: flex;
  margin: auto 0;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width:786px){
    width:300px;
  }

`;
const Input = styled.input`
  padding: 20px;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #d90368;
  padding: 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width:786px){
    display:none;
  }
`;

function Works() {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kos0qcc",
        "template_hfob2fl",
        form.current,
        "UJMR8IW_kbo6jaKjq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" type="text" name="name" />
            <Input placeholder="Email" type="email" name="email" />
            <TextArea
              type="text"
              row={10}
              placeholder="Write Your Message"
              name="message"
            />
            <Button type="submit" value="send">
              Send
            </Button>
            {success &&
              "Your message has been sent. We'll get back to you soon. ✌"}
          </Form>
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  );
}

export default Works;
