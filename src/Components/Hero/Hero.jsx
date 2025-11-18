import React from 'react'
import'./Hero.css'
import profile from "../../assets/profile.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    
     <div id='home'  className='hero'>
         <img src={profile} alt="Profile" className="hero-profile" />
        <h1> <span>I'm Umar Faraz,</span> frontend developer based in Pakistan</h1>
        <p>I am a Frontend Developer who loves building fast, attractive, and easy-to-use websites with React, 
           JavaScript, HTML, and CSS.</p>
     
      <div className='hero-action'>
          <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink> </div>
          <div className='hero-resume'> My resume</div>
      </div>
    </div>
    
  )
}

export default Hero
