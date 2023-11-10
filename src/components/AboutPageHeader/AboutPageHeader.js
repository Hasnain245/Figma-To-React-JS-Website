import React from 'react'
import "./AboutPageHeader.css"
import Navbar from '../../components/Navbar/Navbar'


function AboutPageHeader() {
  return (
    <section className='AboutPageHeader'>
      <div className="AboutPageTop">
        <Navbar />
        <div className="AboutPageHeaderText">
          <div className="AboutPageHeaderTextTop">

            <div className="AboutPageHeaderTextTopContent">
              <div className="AboutPageHeaderPara">
                <p>
                  Stylus &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewBox="0 0 4 8" fill="none">
                    <circle cx="2" cy="4" r="2" fill="white" />
                  </svg>
                  <span> &nbsp;About</span>
                </p>
              </div>
              <div className="AboutPageHeaderHeading">
                <h3>
                  About
                </h3>
              </div>
            </div>
          </div>
          
          <div className="AboutPageHeaderTextBottom">
            <div className="AboutPageOverlay"></div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutPageHeader
