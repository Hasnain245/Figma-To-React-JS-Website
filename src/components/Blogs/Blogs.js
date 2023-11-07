import React from 'react'
import "./Blogs.css"
import { Style } from "../../images"


function Blogs() {
  return (
    <section className='blogSection'>


      <div className="blogs wraper">

        {/*========== Top Heading Portion Of Blog Section =========== */}

        <div className="blog-top">
          <div className="blog-heading">
            <img src={Style} alt="" />
            <p>Our Recent Posts</p>
            <h3>Our Latest <span>News & Articles </span><br />
              From The <span>Blog</span></h3>
          </div>
        </div>


        {/* ========== Bottom Blogs Portion Of Blog Section ===========  */}

        <div className="blog-bottom">


          <div className="blog-1">
            <div className="blog-1-top">
              <div className="blog-1-background"></div>
              <div className="blog-1-content">
                <h3>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                  <path d="M2 13H21" stroke="#F5900D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 6L24 13L17 20" stroke="#F5900D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></h3>
              </div>
            </div>

            <div className="blog-1-bottom">
              <div className="blogContent">
                <p>Design &nbsp; &nbsp; . &nbsp; &nbsp; Comments are closed </p>
                <h3>Lorem ipsum dolor sit amet <br />consectetur</h3>
                <hr />
              </div>
            </div>
          </div>


          <div className="blog-1">
            <div className="blog-1-top">
              <div className="blog-1-background"></div>
              <div className="blog-1-content">
                <h3>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                  <path d="M2 13H21" stroke="#F5900D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 6L24 13L17 20" stroke="#F5900D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></h3>
              </div>
            </div>

            <div className="blog-1-bottom">
              <div className="blogContent">
                <p>Design &nbsp; &nbsp; . &nbsp; &nbsp; Comments are closed </p>
                <h3>Lorem ipsum dolor sit amet <br />consectetur</h3>
                <hr />
              </div>
            </div>
          </div>


          <div className="blog-1">
            <div className="blog-1-top">
              <div className="blog-1-background"></div>
              <div className="blog-1-content">
                <h3>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                  <path d="M2 13H21" stroke="#F5900D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 6L24 13L17 20" stroke="#F5900D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></h3>
              </div>
            </div>

            <div className="blog-1-bottom">
              <div className="blogContent">
                <p>Design &nbsp; &nbsp; . &nbsp; &nbsp; Comments are closed </p>
                <h3>Lorem ipsum dolor sit amet <br />consectetur</h3>
                <hr />
              </div>
            </div>
          </div>


        </div>


      </div>

    </section>
  )
}

export default Blogs
