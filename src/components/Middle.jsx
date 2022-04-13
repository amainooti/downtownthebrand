import { MotionConfig } from 'framer-motion';
import React from 'react'
import styled from "styled-components";
import {motion} from "framer-motion";
import Fade from 'react-reveal/Fade';


function Middle() {
    return(
        <MiddleContainer>
            <MiddleWrapper>
                <img className='vibes' src="/images/Vibes on Vibes Logo.png" alt="" />
                <img className='monster' src="/images/Monster Logo.png" alt="" />
                <img className='impero' src="/images/Impero Logo.png" alt="" />
                <img className='jonzing' src="/images/jonzing.png" alt="" />
                <img className='bull' src="/images/redbull.PNG" alt="" />
            </MiddleWrapper>
                <motion.h1>Events</motion.h1>
        </MiddleContainer>
    )
}

const MiddleContainer = styled.div `
    width:100%;
    height:800px;
    align-items:center;
    ${'' /* position:relative; */}
    background-color:#F3F3F3;
h1 {
    height:130px;
    text-align:center;
    font-weight:800;
    font-style:normal;
    text-align:center;
    margin-top: 80px;
    font-size:100px;
    background: conic-gradient(from 180deg at 50% 50%, #DDAF17 -47.64deg, #936B00 42.59deg, #CB8900 134.52deg, #AB7100 228.88deg, #DDAF17 312.36deg, #936B00 402.59deg);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}
`

const MiddleWrapper = styled.div`

   transform:translateX(30%);
    position:relative;
    .jonzing{
        width:150px;
        height:100px;
    }
    .bull {
        margin-left:250px;
        width:150px;
        height:100px;

    }
    .vibes {
        margin-top: 80px;
    }
    .monster {
        margin-top: 80px;
    }
    .impero {
        margin-top: 80px;
    }
    img{
        width:130px;
        height:60px;
        transform:translateY(100%);
    }
    .vibes {
        transform:translateX(200%);
        transform:translateY(100%);
        margin-left:240px;
    }
    gap:20px;
    width:50%;
    height:50%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    justify-content:center;
    align-items:center;
     @media (max-width:768px){
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        gap:0;
        img {
            width: 100px;
            margin-left:19px;
        }
    }
`
export default Middle;
