import React from 'react'
import "./Slider.css"

function Slider() {
  return (
    <section className='slider-section'>
      
        <marquee behavior="alternate" direction="right" scrollamount="20">
        Web Design <span>-</span> Web Development <span>-</span> SEO Agency <span>-</span>
        </marquee>
     
    </section>
  )
}

export default Slider
