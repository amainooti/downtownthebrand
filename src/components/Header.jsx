import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./header.css";
import D1 from "../assets/images/D1 1.png";
import DT from "../assets/images/DT.png";

const BurgerBtn = styled.button`
  display: block;
  background-color: transparent;
  border: none;
`;

function Header() {
  return (
    <div className="nav-container">
      <a href="/">
        <div className="logo-wrapper">
          <img src={D1} alt="" />
          <img className="img-2" src={DT} alt="" />
        </div>
      </a>
      {/* <ul className="nav-width">
        <li className="nav-links">Events</li>
        <li className="nav-links">About</li>
        <li className="nav-links">Content</li>
      </ul> */}
      <BurgerBtn className="ham-burger">
        <span>
          <i class="fas fa-bars"></i>
        </span>
      </BurgerBtn>
      <div className="nav-btn">
        <Link className="btn" to="/ticket">
          Get ticket
        </Link>
      </div>
    </div>
  );
}

export default Header;
