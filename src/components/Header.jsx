import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./header.css";
import D1 from "../assets/images/D1 1.png";
import DT from "../assets/images/DT.png";


function Header() {
  return (
    <div className="nav-container">
      <a href="/">
        <div className="logo-wrapper">
          <img class="img-1" src={D1} alt="" />
          <img className="img-2" src={DT} alt="" />
        </div>
      </a>

      <div className="nav-btn">
        <Link className="btn" to="/ticket">
          Get ticket
        </Link>
      </div>
    </div>
  );
}

export default Header;
