import React from 'react'
import '../App.css';
import { CustomButton } from './CustomButton'
import './HeroSection.css';

function HeroSection() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        };
  return (
    <div className='hero-container'>
        <video src='/videos/stockclimbing2.mp4' autoPlay loop muted />
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns"  onClick={handleClick}>
            <CustomButton 
                className="btns" 
                buttonStyle="btn--outline"
                buttonSize="btn--large"
            >
                Get Started
            </CustomButton>
            <CustomButton 
                className="btns" 
                buttonStyle="btn--primary"
                buttonSize="btn--large"
            >
                Watch Trailer <i className='far far-play-circle' />
            </CustomButton>
        </div>
    </div>
  )
}

export default HeroSection