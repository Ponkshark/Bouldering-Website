import React from 'react'
import '../App.css';
import { CustomButton } from './CustomButton'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/stockclimbing.mp4' autoPlay loop muted />
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
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