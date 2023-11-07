import React, { useState } from 'react'
import "./Footer.css"
import { FooterLogo } from '../../images'

function Footer() {

  
  const [email, setEmail] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //Add form submission Logic here, e.g sending data to the server
    console.log('Email:', email);

    //----Alert When Login Button Is Clicked----//
    alert('Subscribed Successfully..!');
  }
  return (
    <div className="footerSection">
      <div className="footer">
        <div className="footerTop wraper">
          <div className="socials-Logo">

            <div className="footerLogo">
              <img src={FooterLogo} alt="" />
            </div>

            <div className="footerSocials">
              <div className="socialIcons">
                <div className="icon-1">
                  <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="28" r="28" fill="black" />
                      <path d="M39 17.0123C38.0424 17.8405 36.9821 18.4739 35.86 18.8882C35.2577 18.0392 34.4573 17.4374 33.567 17.1643C32.6767 16.8911 31.7395 16.9598 30.8821 17.3611C30.0247 17.7623 29.2884 18.4767 28.773 19.4077C28.2575 20.3387 27.9877 21.4413 28 22.5664V23.7924C26.2426 23.8483 24.5013 23.3704 22.931 22.4014C21.3607 21.4324 20.0103 20.0022 19 18.2384C19 18.2384 15 29.2729 24 34.1771C21.9405 35.8911 19.4872 36.7506 17 36.6293C26 42.7596 37 36.6293 37 22.5296C36.9991 22.1881 36.9723 21.8474 36.92 21.512C37.9406 20.2779 38.6608 18.7199 39 17.0123Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                <div className="icon-2">
                  <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="28" r="28" fill="black" />
                      <path d="M35 17H31.1818C29.4941 17 27.8755 17.5795 26.682 18.6109C25.4886 19.6424 24.8182 21.0413 24.8182 22.5V25.8H21V30.2H24.8182V39H29.9091V30.2H33.7273L35 25.8H29.9091V22.5C29.9091 22.2083 30.0432 21.9285 30.2819 21.7222C30.5205 21.5159 30.8443 21.4 31.1818 21.4H35V17Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                <div className="icon-3">
                  <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="28" r="28" fill="black" />
                      <path d="M32.7917 23.6953C34.5709 23.6953 36.2772 24.4395 37.5352 25.7642C38.7933 27.0888 39.5 28.8855 39.5 30.7588V38.9996H35.0278V30.7588C35.0278 30.1344 34.7922 29.5355 34.3729 29.094C33.9535 28.6524 33.3848 28.4043 32.7917 28.4043C32.1987 28.4043 31.6299 28.6524 31.2105 29.094C30.7912 29.5355 30.5556 30.1344 30.5556 30.7588V38.9996H26.0834V30.7588C26.0834 28.8855 26.7901 27.0888 28.0482 25.7642C29.3063 24.4395 31.0125 23.6953 32.7917 23.6953Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21.2917 24.6523H16.5V39.0002H21.2917V24.6523Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18.8958 21.7826C20.219 21.7826 21.2917 20.712 21.2917 19.3913C21.2917 18.0706 20.219 17 18.8958 17C17.5727 17 16.5 18.0706 16.5 19.3913C16.5 20.712 17.5727 21.7826 18.8958 21.7826Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                <div className="icon-4">
                  <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="28" r="28" fill="black" />
                      <path d="M33.5 17H22.5C19.4624 17 17 19.4624 17 22.5V33.5C17 36.5376 19.4624 39 22.5 39H33.5C36.5376 39 39 36.5376 39 33.5V22.5C39 19.4624 36.5376 17 33.5 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32.5338 27.3275C32.6752 28.2812 32.5124 29.2551 32.0683 30.1108C31.6243 30.9665 30.9218 31.6604 30.0607 32.0938C29.1996 32.5272 28.2237 32.6781 27.2719 32.525C26.3201 32.3718 25.4409 31.9224 24.7592 31.2407C24.0775 30.5591 23.6281 29.6798 23.475 28.728C23.3218 27.7762 23.4727 26.8003 23.9061 25.9392C24.3395 25.0781 25.0334 24.3756 25.8891 23.9316C26.7448 23.4876 27.7188 23.3247 28.6724 23.4661C29.6451 23.6103 30.5456 24.0636 31.241 24.7589C31.9363 25.4543 32.3896 26.3548 32.5338 27.3275Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="footerDivider wraper">
          <hr />
        </div>

        <div className="footerDown wraper">

          <div className="footerLeft">
            <div className="footerPara">
              <p>Let’s start working together</p>
            </div>

            <div className="footerHeading">
              <h3>info @stylus marketing .ca</h3>

            </div>
            <div className="footerCopyRight">
              <p>© Copyright 2023 by Stylus Marketing</p>
            </div>
          </div>

          <div className="footerRight">
            <div className="lists">

              <div className="list-2-top">
                <div className="list-2">
                  <ul>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Hiring</a></li>
                    <li><a href="/">Our Blog</a></li>
                  </ul>
                </div>
                <div className="list-2">
                  <ul>
                      <li><a href="/">Website Development</a></li>
                      <li><a href="/">SEO Services</a></li>
                      <li><a href="/">Social Media Marketing</a></li>
                      <li><a href="/">Google Ads Management</a></li>
                  </ul>
                </div>
              </div>

              <div className="list-2-bottom">
                <div className="listBottomForm">

                  <div className="Email">
                    <form onSubmit={handleSubmit}>
                      <input type="email"  onChange={handleEmailChange} placeholder="Enter your email to subscribe" required />
                      <button type='submit'>Subscribe</button>
                    </form>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="footerEnd">
          <div className="footerEndList">
            <ul>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Stylus Marketing</a></li>
              <li><a href="/">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer
