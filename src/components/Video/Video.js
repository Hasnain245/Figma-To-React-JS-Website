import React from 'react'
import "./Video.css"
import { VideoImage, VideoImageDesign, VideoImagePlayButton } from "../../images"

function Video() {
  return (
    <section className='VideoSection'>
      <div className="wraper videoImage">
      <div className="playbutton">
       <img src={VideoImagePlayButton} alt="" />
      </div>

      
       <img src={VideoImageDesign} alt="" />


      </div>

    </section>
  )
}

export default Video
