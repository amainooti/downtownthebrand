import styled from "styled-components";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from './components/Header';
import Middle from "./components/Middle";
import Section from "./components/Section";
import Ticket from "./components/Ticket";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Middle />
      <Ticket />
      {/* <Carousel /> */}
      <Footer />
    </div>
  );
}



export default App;
