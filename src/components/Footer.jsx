import React from 'react';
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
        <ImageWrapper>
            <img className='logo' src="/images/DTlogo.png" alt="" />
            <img className='stage' src="/images/DTstage.png" alt="" />
            <img className='toski' src="/images/DTtoski.png" alt="" />
        </ImageWrapper>
        <TextWrapper>
            <img className='DT' src="/images/DT.png" alt="" />
            <p>At Downtown the Brand, we provide people with lasting memories as well as unending happiness and comfort through our Events, Clothing Line, Bloggists and Managerial Services. Downtown the Brand stands out to make an impression on all clients we serve.</p>
        </TextWrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
    position:absolute;
    left:0;
    width:100%;
    height:700px;
    background-color:#000;
    display:flex;
    @media (max-width:768px){
        display: block;
        height:1200px;
        position:absolute;
        left:0;

    }
`
const ImageWrapper = styled.div`
    position:relative;
    width:50%;
    img {
        width:250px;
        height:200px;
        position:absolute;
    }
    .logo {
        right:150px;
        top:200px;
        width: 250px;
        height:250px;
        z-index:10;
    }
    .toski {
        top:400px;
        bottom:0;
        right:0;
        z-index:100;
        width:220px;
        height:207px;
    }
    .stage {
        right:0px;
        top:80px;
        z-index:1;
        width:262px;
        height:200px;

    }
    @media (max-width:768px) {
        margin-left:240px;
        margin-top: 180px;
    }
`
const TextWrapper = styled.div`

    width:55%;
    height: 85%;
    margin-left:100px;
    margin-top: 100px;
    .DT {
        text-align:center;
    }

    p{
        color:white;
        font-size:35px;
        line-height:64.88px;
    }
    @media (max-width:768px){
        margin-top:680px;
        padding:0 30px;
        width:80%;

        img {

            margin-right: 80px;
            position:absolute;
            top:80px;

        }
        p {
            margin-left:-120px;
            margin-top:80px;
            transform:translateY(80%);
        }
    }
`

export default Footer