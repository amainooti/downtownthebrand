import React from 'react';
import "./Successpage.css";

function Sucesspage() {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let transform = today.toLocaleDateString("en-us", options);


  return (
    <div className='success-wrapper'>
        <div className='top-wrapper'>
            <div className="image-wrapper">

            </div>
            <div className="date-wrapper">
                <div className="time-wrapper">
                    <p>Downtown the brand - Ticketing</p>
                    <p>{transform}</p>
                </div>
            </div>
        </div>
        <div className="middle-wrapper">

        </div>
    </div>
  )
}

export default Sucesspage