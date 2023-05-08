import React from 'react'
import '../styles/HeroBanner.css'
import HeroImg from "../assets/images/HeroImg.jpg"


const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div>
        <p className='hero-first'>
          Gym Club
        </p>
        <p className='hero-second'>
          Train, Smile <br /> and Repeat
        </p>
        <p className='hero-third'>
          Check out the most effective exercises
        </p>
        <button className='hero-btn' href="#exercises">Explore</button>
        <p className='hero-bg-text'>Exercise</p>
      </div>
      <img src={HeroImg} alt="hero-img" className='hero-img'/>
    </div>
  )
}

export default HeroBanner
