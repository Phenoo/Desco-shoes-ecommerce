import React, { useRef, useState } from 'react'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import { SiApple, SiGoogleplay } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="main-footer">
          <div className="footer-container">
            <div>
              <div className="logo">
                <h3>desco</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate impedit reiciendis minus commodi suscipit officia culpa recusandae iste ex at
              </p>
            </div>
            <div className="foot">
              <h4>quick link</h4>
              <ul>
                <li>
                  <a href="#collection">collection</a>
                </li>
                <li>
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#shop">shop</a>
                </li>
              </ul>
            </div>
            <div className="foot">
              <h4>support</h4>
              <ul>
                <li>
                  <a href="#termsconditions">terms & conditions</a>
                </li>
                <li>
                  <a href="#help">help</a>
                </li>
                <li>
                  <a href="#faq">faq</a>
                </li>
              </ul>
            </div>
            <div className="foot contact">
              <h4>contact</h4>
              <h6>descometusah@gmail.com</h6>
              <h6>0703 - 517 - 2208</h6>
              <div className="social">
                <div className="svg">
                  <FaFacebook />
                </div>
                <div className="svg">
                  <AiOutlineInstagram />
                </div>
                <div className="svg">
                  <AiOutlineGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>&copy; Desco 2022</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer