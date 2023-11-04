import React from 'react'
import "./Hero.css"
import Navbar from "../Navbar/Navbar"

import {
  HeroImage1,
  HeroImage2,
  facebookLogo,
  twitterLogo,
  linkedinIcon,
  instagramIcon
} from "../../images"

function Hero() {

  
  return (
    <header>

      <div className="rightImage">
        <img src={HeroImage2} alt="" />
      </div>

      <div className="design">
        <Navbar />
        <div className="designContent">
          <div className="social">
            <div className="social-icons ">
              <a href="www.example.com" className='twitter'>
                <img src={twitterLogo} alt="" />
              </a>

              <a href="www.example.com" className='facebook'>
                <img src={facebookLogo} alt="" />
              </a>

              <a href="www.example.com" className='linkedinIcon'>
                <img src={linkedinIcon} alt="" />
              </a>

              <a href="www.example.com" className='instagramIcon'>
                <img src={instagramIcon} alt="" />
              </a>
            </div>

            <div className="number">
              +905 844 7550
            </div>
          </div>


          <div className="heading">

            <div className="heroheading">
              <h1>More than <br />
                just a design
                agency</h1>
            </div>

            <div className="btn">
              <button>Discover More</button>
            </div>

          </div>
          <div className="image-1">
            <img src={HeroImage1} alt="" />
          </div>
          <div className="emoity"></div>
        </div>
      </div>


    </header>
  )
}

export default Hero
