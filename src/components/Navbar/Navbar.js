import { useRef } from "react";
import React from 'react'
import "./Navbar.css"
import { Ellipse1, Ellipse2, Ellipse3 } from '../../images'
import { useNavigate } from "react-router-dom";

import { FaBars } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate("");

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <nav className='wraper'>
      <div className="navbar">
        <div className="navbarLogo">
          <div className="ellipse1">
            <img src={Ellipse1} alt='' />
          </div>
          <div className="ellipse2">
            <img src={Ellipse2} alt='' />
          </div>
          <div className="ellipse3">
            <img src={Ellipse3} alt='' />
          </div>
        </div>


        <div className="navElements" ref={navRef}>
          <ul>
            <li>
              <button onClick={() => navigate("/")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/AboutPage")}>About</button>
            </li>
            <li>
              <button onClick={() => navigate("/ServicesPage")}>Services</button>
            </li>
            <li>
              <button >Blog</button>
            </li>
            <li>
              <button >Carees</button>
            </li>
            <li>
              <button >Contact</button>
            </li>
          </ul>
        </div>
        <div className="navElementBtns">
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars/>
          </button>
        </div>



      </div>
    </nav>
  )
}

export default Navbar
