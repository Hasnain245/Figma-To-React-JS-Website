import React from 'react'
import "./Testimonials.css"
import {TestimonialImage} from "../../images"

function Testimonials() {
  return (
    <section className='testemonial-section'>
      <div className="testemonial wraper">
          <div className="testImage">
            <img src={TestimonialImage} alt="" />
          </div>
          <div className="testContent">
            <p>Lorem ipsum dolor sit amet consectetur. Eget ultricies ut sit velit magna dolor porttitor magna fringilla. Volutpat est in arcu tristique commodo senectus sagittis leo lacus. Ullamcorper et fringilla eget fusce. Volutpat lectus eu.</p>
            <h3>Wade Warrens <span>Azure Data Engineering</span></h3>
          </div>
      </div>
      {/* <div className="testemonial wraper">
          <div className="testImage">
            <img src={TestimonialImage} alt="" />
          </div>
          <div className="testContent">
            <p>Lorem ipsum dolor sit amet consectetur. Eget ultricies ut sit velit magna dolor porttitor magna fringilla. Volutpat est in arcu tristique commodo senectus sagittis leo lacus. Ullamcorper et fringilla eget fusce. Volutpat lectus eu.</p>
            <h3>Wade Warrens <span>Azure Data Engineering</span></h3>
          </div>
      </div>
      <div className="testemonial wraper">
          <div className="testImage">
            <img src={TestimonialImage} alt="" />
          </div>
          <div className="testContent">
            <p>Lorem ipsum dolor sit amet consectetur. Eget ultricies ut sit velit magna dolor porttitor magna fringilla. Volutpat est in arcu tristique commodo senectus sagittis leo lacus. Ullamcorper et fringilla eget fusce. Volutpat lectus eu.</p>
            <h3>Wade Warrens <span>Azure Data Engineering</span></h3>
          </div>
      </div> */}
    </section>
  )
}

export default Testimonials
