import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

import Home from "./pages/Home";
import Ticket from "./pages/Ticket";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
