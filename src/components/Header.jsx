import React from 'react';
import styled from "styled-components";

function Header() {
  return (
    <Wrap>
        <LogoWrap className='flex'>
                <img className='imgOne' src="/images/D1 1.png" alt="" />
                <img className='imgTwo' src="/images/logo.png" alt="" />
        </LogoWrap>
        <RightNav>
            <li><a href="#">Events</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
            <ButtonWrap>
                <a href="#">get ticket</a>
            </ButtonWrap>
        </RightNav>
    </Wrap>
  )
}


const Wrap = styled.div`
    margin-top:-9px;
    font-family:'Chathura', sans-serif;
    width:100%;
    height:14vh;
    background-color:black;
    display:flex;
    align-items:center;
    justify-content: space-between;
    a {
        font-size:1.6rem;
        color: #fff;
        text-decoration:none;
        text-transform:capitalize;

    }
`
const RightNav = styled.div`
    padding:0 40px;
    gap: 3rem;
    width: 60%;
    color:#fff;
    display:flex;
    list-style:none;
    text-transform: uppercase;
    align-items:center;
    justify-content:space-between;
    li {
        a {
            font-size:1.9rem;
        }
    }
    @media (max-width: 768px){
        display:none;
    }
`

const ButtonWrap = styled.div`
    padding:16px 0;
    width:100%;
    height: 100%;
    display:flex;
    flex-direction:row;
    a {
        border: 1px solid #936B00;
        background-color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        color:#936B00;
        width:90%;
        height:30px;
        text-align:center;
        font-size:1.9rem;
        @media (max-width: 1080px){
            padding:5px 12px;
    }
    }
`
const LogoWrap = styled.div`
    transform: translateX(10%);
    display:flex;
    flex-direction:row;
    width:60%;
    align-items:center;
    margin-left:12px;
    img{
        padding-top:12px;
    }
    .imgOne{
        margin-top:0px;

    }
    .imgTwo {
        width: 139px;
        height: 49px;
        margin-top:22px;
    }

`

export default Header