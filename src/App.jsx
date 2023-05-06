import styled from "styled-components";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Works from "./components/Works";


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color:white;
  background:url("./img/bg.png");
  background-size:cover;
  background-repeat: no-repeat;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Contact />
      <Works />
      
    </Container>
  );
}

export default App;
