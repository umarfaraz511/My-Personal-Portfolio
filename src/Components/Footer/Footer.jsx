import React from 'react'
import './Footer.css'
import logo from "../../assets/logo.png";
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
            <img src={logo} alt="footer-logo" className='footer-logo' />
            <p>I am a Frontend Developer who loves building fast, attractive, and easy-to-use websites with React, 
           JavaScript, HTML, and CSS.</p>

            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon}alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2025 Umar Faraz. All rights reserevd. </p>
            <div className="footer-bottom-right">
                <p> Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
