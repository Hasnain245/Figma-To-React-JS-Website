import React from 'react'
import "./AboutCompany.css"
import { AboutCompanyImage } from '../../images'


function AboutCompany() {
  return (
    <section className='AboutCompany-section'>
      <div className="row">

        <div className="left-side">
          <img src={AboutCompanyImage} alt=''/>
        </div>


        <div className="right-side">
          <div className="content">
            <div className="para">
              <p>AboutCompany the agency</p>
            </div>

            <div className="content-heading">
              <h2>Get to know about <br />
                <span>Stylus Marketing</span></h2>
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

export default AboutCompany
