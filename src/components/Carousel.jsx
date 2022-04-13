import React, { useState } from 'react';
import styled from "styled-components";
import Card from './Card';
import Dictionary from "./Dictionary";


  {/* imgUrl:"/images/image1.png",
        name: "Ruger live in ABUAD",
        date: "fri, april 22, 5:00pm",
        venue: "Alfa Belgore Hall - Afebabalola University",
        price: "starts at  ₦2500" */}

function createCard(DicIndex){
    return <Card
            image = {DicIndex.imgUrl}
            name = {DicIndex.name}
            date = {DicIndex.date}
            venue = {DicIndex.venue}
            price = {DicIndex.price}
            btn = {DicIndex.btn}
     />
}



function Carousel() {

  return (
    <CarouselWrap>
        {Dictionary.map(createCard)}



    </CarouselWrap>
  )
}

const CarouselWrap = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    background-color:#F3F3F3;
    height: 150vh;
      @media screen (max-width:1092) {
        flex-direction:row;

    }

`


export default Carousel