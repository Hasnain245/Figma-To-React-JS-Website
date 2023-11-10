import React from 'react'
import "./ServicesPageHeader.css"
import Navbar from '../../components/Navbar/Navbar'


function ServicesPageHeader() {
  return (
    <section className='ServicesPageHeader'>
      <div className="ServicesPageTop">
        <Navbar />
        <div className="ServicesPageHeaderText">
          <div className="ServicesPageHeaderTextTop">

            <div className="ServicesPageHeaderTextTopContent">
              <div className="ServicesPageHeaderPara">
                <p>
                  Stylus &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewBox="0 0 4 8" fill="none">
                    <circle cx="2" cy="4" r="2" fill="white" />
                  </svg>
                  <span> &nbsp;Services</span>
                </p>
              </div>
              <div className="ServicesPageHeaderHeading">
                <h3>
                Services
                </h3>
              </div>
            </div>
          </div>
          
          <div className="ServicesPageHeaderTextBottom">
            <div className="ServicesPageOverlay"></div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ServicesPageHeader
