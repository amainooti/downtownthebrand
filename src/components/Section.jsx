import React from "react";
import "./section.css";
import RugerLive from "../assets/images/RUGER.png";
import RugerImage from "../assets/images/image1.png";
import { Link } from "react-router-dom";

function Section() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="top-hero">
          <div className="live-wrapper">
            <img src={RugerLive} alt="" />
          </div>
          <div className="date-wrapper">
            <p className="wrapper-p">22</p>
            <p className="april">April</p>
            <p>5PM</p>
          </div>
        </div>
        <div className="middle-hero">
          <h1 className="first-child">Tickets</h1>
          <div className="vertical"></div>
          <h1>#2000</h1>
        </div>
        <div className="bottom-hero">
          <Link to="/ticket">Get ticket</Link>
        </div>
      </div>
      <div className="ruger-image-wrapper">
        <img src={RugerImage} alt="" />
      </div>
    </div>
  );
}

export default Section;
