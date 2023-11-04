import React from 'react'
import "./About.css"
import { AboutImage } from '../../images'

function About() {
  return (
    <section className='about-section'>
      <div className="row">

        <div className="left-side">
          <img src={AboutImage} alt='About Image'/>
        </div>


        <div className="right-side">
          <div className="content">
            <div className="para">
              <p>about the agency</p>
            </div>

            <div className="content-heading">
              <h2>We’re Top Notch & Best <br />
                <span>Web Design & SEO</span> <br />
                Agency</h2>
            </div>

            <div className="para-2">
              <p>Lorem ipsum dolor sit amet consectetur. Metus vitae a aenean mi aenean nulla elementum eget viverra. Tellus phasellus velit aliquam.</p>
            </div>

            <div className="para-3">
              <p>Lorem ipsum dolor sit amet consectetur. Sagittis dignissim et tortor sem. Ut tempor velit magna aliquet dignissim in purus molestie congue. Imperdiet sit ante urna massa eu. Massa magna pellentesque rhoncus ornare ut. Ullamcorper varius.</p>
            </div>

            <div className="left-btn">
              <button>Discover More</button>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default About
