import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import DTlogo from "../assets/images/DTlogo.png";
import DTstage from "../assets/images/DTstage.png";
import DTStoski from "../assets/images/DTtoski.png";
import DT from "../assets/images/DT.png";

function Footer() {
  const datetime = new Date().getFullYear;

  return (
    <footer>
      <FooterWrapper>
        <ImageWrapper>

          <img className="logo" src={DTlogo} alt="" />
          <img className="stage" src={DTstage} alt="" />
          <img className="toski" src={DTStoski} alt="" />
        </ImageWrapper>
        <TextWrapper>
          <img className="DT" src={DT} alt="" />
          <Fade right>
          <p>
            At Downtown the Brand, we provide people with lasting memories as well
            as unending happiness and comfort through our Events, Clothing Line,
            Bloggists and Managerial Services. Downtown the Brand stands out to
            make an impression on all clients we serve.
          </p>
          </Fade>
        </TextWrapper>
      </FooterWrapper>

      <p> Copyright &copy; Downtown the brand {datetime} all rights reserved. </p>

      </footer>
  );
}

const FooterWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 700px;
  background-color: #000;
  display: flex;
  @media (max-width: 768px) {
    display: block;
    height: fit-content;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  img {
    width: 250px;
    height: 200px;
    position: absolute;
  }
  .logo {
    right: 150px;
    top: 200px;
    width: 250px;
    height: 250px;
    z-index: 10;
  }
  .toski {
    top: 400px;
    bottom: 0;
    right: 0;
    z-index: 100;
    width: 220px;
    height: 207px;
  }
  .stage {
    right: 0px;
    top: 80px;
    z-index: 1;
    width: 262px;
    height: 200px;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    justify-content: flex-start;
    align-items: center;
    img {
      position: relative;
      top: unset !important;
      left: unset !important;
      right: unset !important;
      width: 250px !important;
      height: 250px !important;
    }
  }
`;
const TextWrapper = styled.div`
  width: 55%;
  height: 85%;
  margin-left: 100px;
  margin-top: 100px;
  .DT {
    text-align: center;
  }

  p {
    color: white;
    font-size: 35px;
    line-height: 64.88px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    text-align: center;
    padding: 20px 5px;
    margin: 0px;
    img {
    }
    p {
      margin-top: 20px;
      line-height: 30px;
    }
  }
`;




export default Footer;
