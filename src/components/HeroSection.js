import React from "react";
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
        `   <video src="/videos/kucamp.mp4" autoPlay loop muted />
            <h1>WELCOME TO KU</h1>
            <p>Sign up for a tour today!</p>
            <div className="hero-btns">
                <button 
                className='btns'  
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                    </button>
                    <button 
                className='btns'  
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    WATCH TRAILER <i className='far
                    fa-play-circle' />
                    </button>
            </div>
        </div>
    );
    }

    export default HeroSection;