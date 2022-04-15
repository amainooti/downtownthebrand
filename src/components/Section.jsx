import React from 'react';
import "./section.css";

function Section() {
  return (
    <div className='hero-container'>
        <div className="hero-content">
            <div className="top-hero">
                <div className="live-wrapper">
                    <img src="images/RUGER.png" alt="" />
                </div>
                <div className="date-wrapper">
                    <p className='wrapper-p'>22</p>
                    <p className='april'>April</p>
                    <p>5PM</p>
                </div>
            </div>
            <div className="middle-hero">
                <h1 className='first-child'>Tickets</h1>
                <div className="vertical"></div>
                <h1>#2000</h1>
            </div>
            <div className="bottom-hero">
                <a href="#">Get ticket</a>
            </div>
        </div>
        <div className="ruger-image-wrapper">
            <img src="/images/image1.png" alt="" />
        </div>
    </div>
  )
}

export default Section