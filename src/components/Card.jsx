import React from 'react';
import styled from 'styled-components';
import {Fade} from "react-reveal/Fade";

function Card(props) {
  return (

    <CardContainer>

        <CardTop>
        <img src= {props.image} alt="" />
        </CardTop>
        <CardBottom>
            <h1>{props.name}</h1>
            <p className='date'>{props.date}</p>
            <p className='location'>{props.venue}</p>
            <p className='price'>{props.price}</p>
            <ButtonWrapper>
                <a href="#">{props.btn}</a>
            </ButtonWrapper>
        </CardBottom>
    </CardContainer>
  )
}

const CardContainer = styled.div`
    background-color:#fff;
    width: 245.99px;
    display:flex;
    flex-direction:column;
    border-radius:8px;
    height: 239.36px;
    background-color:#fff;
    margin-top:6%;
    margin-left:32px;
    ${'' /* text-align:center; */}

`
const CardTop = styled.div`

    display:flex;
    width:100%;
    height:100%;
    align-self:center;
    justify-content:center;
    img{
        width: 100%;
        height: 180px;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
    }
`
const CardBottom = styled.div`
    text-transform:Capitalize;
    display:flex;
    flex-direction:column;
    width: 100%;
    height:100%;
    background-color:white;
    padding:0;
    border-bottom-left-radius:8px;
    border-bottom-right-radius:8px;
    box-shadow:5px 3px 3px #eee;
    h1 {
        margin-left:15px;
        font-size:1.5rem;
        font-weight: bold;
    }
    .date {
        margin-left:15px;
        font-family: 'Chathura';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        color: #EB5515;
    }
    .location {
        margin-left:15px;
        font-family: 'Chathura';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        color: #959595;
    }
    .price {
        margin-left:15px;
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        color: #959595;
        margin-bottom: 8px;
    }
`

const ButtonWrapper = styled.div `
    display:flex;
    width:100%;
    height:30px;
    margin-bottom:30px;
    text-align:center;
    margin-left: -25px;
    a {
        padding-bottom:5px;
        font-size: 1.5rem;
        text-decoration: none;
        width:100%;
        height:100%;
        text-self:center;
        margin-left:40px;
        border: 1px solid rgba(147, 107, 0, 1);
        background: #F3F3F3;
        color: rgba(147, 107, 0, 1);
        text-align:center;
    }
`

export default Card