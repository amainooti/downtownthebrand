import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

function Header() {
  return (
        <div className="nav-container">
            <div className="logo-wrapper">
                <img src="images/D1 1.png" alt="" />
                <img className='img-2' src="images/DT.png" alt="" />
            </div>
            <ul className='nav-width'>
                <li className='nav-links'>Events</li>
                <li className='nav-links'>About</li>
                <li className='nav-links'>Content</li>
                <i class="fas fa-bars"></i>
            </ul>
            <div className="nav-btn">
                 <a href="" className='btn'> Get ticket</a>
            </div>
    </div>
  )
}

export default Header