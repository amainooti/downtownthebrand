import React from 'react';
import "./Ticket.css";

function Ticket() {
  return (
    <div className='ticket-container'>
        <div className="ticket-form">
            <div className="top-section">
                <div className="ticket-write">
                    <h1>Ticket type</h1>
                    <p>Ruger live in ABUAD</p>
                </div>
                <div className="price">
                    <h1>Unit price</h1>
                    <p> ₦2000 </p>
                </div>
            </div>
                <form action="#"  className='form-cover'>
                    <input type="text"  placeholder='First Name'/>
                    <input type="text" placeholder='Last Name' />
                    <input type="email" placeholder='Email' />
                    <input type="text" placeholder='Phone' />
                </form>
            </div>
            <div className="ticket-content">
                <div className="image-wrapper">
                    <img className='ruger' src="images/Rugerlive.jpg" alt="RUGER" />
                </div>
                <div className="ticket-inner">
                    <div className="typography">
                        <h1>Purchase Summary</h1>
                        <p>Name</p>
                        <p>Email</p>
                        <p>Phone</p>
                    </div>
                    <div className="button-wrapper">
                        <a href="#" className='btn-2'>Submit</a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Ticket