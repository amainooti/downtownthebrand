import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

// import ending from "./components/ending";
import Header from "./components/Header";
import "./App.css";

import Home from "./pages/Home";
import Ticket from "./pages/Ticket";
import Footer from "./components/Footer";
import Sucesspage from "./pages/Sucesspage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/ticket" element={<Ticket />} />
        </Routes>
        <Routes>
          <Route exact path="/paystack/success" element={<Sucesspage />} />
        </Routes>
        {/* <Route path="*" exact element = { <Navigate to= "/" />} /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
