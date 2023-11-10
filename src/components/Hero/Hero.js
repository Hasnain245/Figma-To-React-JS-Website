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

        <Navbar />
      <div className="design">
        <div className="designContent">
          <div className="social">
            <div className="social-icons ">
              <a href="https://x.com/HaSnain56734401?t=SZ1HOgAgEiYQFL5FMqrtgA&s=09" target='_blank' className='twitter' rel="noopener noreferrer">
                <img src={twitterLogo} alt="" />
              </a>

              <a href="https://facebook.com/mirza.hasnain.33865" target='_blank' className='facebook' rel="noopener noreferrer">
                <img src={facebookLogo} alt="" />
              </a>

              <a href="https://www.linkedin.com/in/hasnain-ali-3481a4295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className='linkedinIcon' rel="noopener noreferrer">
                <img src={linkedinIcon} alt="" />
              </a>

              <a href="https://instagram.com/mirza_1433?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' className='instagramIcon' rel="noopener noreferrer">
                <img src={instagramIcon} alt="" />
              </a>
            </div>

            <div className="number">
              +347 585 7872
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
