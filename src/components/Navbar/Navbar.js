import React from 'react'
import "./Navbar.css"
import { Ellipse1, Ellipse2, Ellipse3 } from '../../images'

function Navbar() {
  return (
    <nav className='wraper'>
      <div className="navbar">
        <div className="navbarLogo">
          <div className="ellipse1">
            <img src={Ellipse1} />
          </div>
          <div className="ellipse2">
            <img src={Ellipse2} />
          </div>
          <div className="ellipse3">
            <img src={Ellipse3} />
          </div>
        </div>


        <div className="navElements">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Carees</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
