import styled from "styled-components";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from './components/Header';
import Middle from "./components/Middle";
import Section from "./components/Section";
import Ticket from "./components/Ticket";

function App() {
  return (
    <Container>
      <Header />
      <Section />
      <Middle />
      <Ticket />
      <Carousel />
      <Footer />

    </Container>
  );
}


const Container = styled.div`
  width:100%;
  height:100%;
`

export default App;
