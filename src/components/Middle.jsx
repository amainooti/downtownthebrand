import React from "react";
import "./Middle.css";
import Jonzing from "../assets/images/jonzing.PNG";
import monster from "../assets/images/Monster Logo.png";
import Impero from "../assets/images/Impero Logo.png";
import Vibes from "../assets/images/Vibes on Vibes Logo.png";
import Redbull from "../assets/images/redbull.PNG";

function Middle() {
  return (
    <div className='container'>
        <div className="image-wrapper">
            <img src= {Redbull} alt="" />
            <img className='monster' src={monster} alt="" />
            <img src={Jonzing} alt="" />
            <img className='impero' src={Impero} alt="" />
            <img className='vibes-on-vibes' src={Vibes} alt="" />
        </div>
    </div>
  );
}

export default Middle;
