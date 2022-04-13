import React from 'react';
import styled from "styled-components";
import { Fade } from 'react-reveal';


function Section() {
  return (
    <SectionContainer>
    <SectionWrapper>
        <GenWrapper>
            <LiveWrapper>
            <Fade left>
                <img className='rugarLive' src="/images/RUGER.png" alt="rugar live" />
            </Fade>
                <TicketWrapper>
                <Fade left>
                    <h1>TICKETS</h1>
                    <Fade left>
                    <Vertical></Vertical>
                    </Fade>
                    <span>2000</span>
                </Fade>
                </TicketWrapper>
                <ButtonWrapper className='ticket button'>
                        <a href="#">Get ticket</a>
                 </ButtonWrapper>
            </LiveWrapper>
        </GenWrapper>
        <RugarImage>
            <img className='rugarHimself' src="/images/image1.png" alt="rugar poster" />
        </RugarImage>
    </SectionWrapper>
</SectionContainer>
)
}

const SectionContainer = styled.div`
${'' /* margin-left:-8px; */}
background-color:#000;
width:100%;
height:120vh;

`

const SectionWrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction: row;
.rugarLive {
  margin-top:30px;
  margin-left: 62px;
  width:500px;
  height:200px;
}

@media screen and (max-width:764px){
      flex-direction: column;
  }

`

const RugarImage = styled.div`
width: 50%;
margin-left: 80px;
@media screen and (max-width:678px){
    display:block;
}
.rugarHimself {
    width:450px;
    height:500px;
    margin-left:350px;
    @media (max-width:768px){
        width:300px;
        height:300px;
        display:column;
    }
}
`

const LiveWrapper = styled.div`
position:absolute;
left: 12px;
width:50%;
height: 200px;
display:flex;
flex-direction:row;
justify-content: space-between;
z-index:1;
'rugarLive{
     width:400px;
     height:200px;
 }
`
const GenWrapper = styled.div`
display:flex;
flex-direction:column;
width:50%;
width:50vh;
justify-content:space-between;
position:relative;

`

const TicketWrapper = styled.div`
display:flex;
gap: 20px;
position:absolute;
top:300px;
left:150px;
span {
    color:#fff;
    font-size: 3.3rem;
    margin-top: 1.9rem;
    @media (max-width:1006px) {
        transform: translateX(-80%);
        margin-top:200px;
    }

}
span::before {
    content:"₦";
    font-size: 1.8rem;
}
span::after {
    content: ""
}
h1 {
    margin-top: 2.4rem;
    font-size: 2.8rem;
    padding:0 12px;
    background: conic-gradient(from 180deg at 50% 50%, #DDAF17 -47.64deg, #936B00 42.59deg, #CB8900 134.52deg, #AB7100 228.88deg, #DDAF17 312.36deg, #936B00 402.59deg);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width:1006px) {
        transform: translateX(-80%);
        margin-top:209px;

    }
}
`

const Vertical = styled.div`
margin-top: 2.9rem;
width: 2px;
height: 50px;
background-color:#936B00;
@media (max-width:1006px) {
        margin-top:218px;
        transform: translateX(-80px);
    }
`

const ButtonWrapper = styled.div`
display:flex;
flex-direction:column;
text-align:center;
justify-content:center;
width:100%;
height:5%;
position:absolute;
top:200%;
left:150%;
padding: 50% 25%;
a {
    width:100%;
    justify-self:center;
    height:35px;
    text-decoration:none;
    font-size:1.7rem;
    background-color:#fff;
    color:#DB9E25;
    padding-bottom:5px;
}
`


export default Section