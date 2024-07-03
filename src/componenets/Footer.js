import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./FooterStyles.css";
import { SiIndeed } from "react-icons/si";


import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container"> 
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Sacramento, CA</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                (510) 439-8694</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                saulserrano18@yahoo.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About this Site</h4>
                <p>This is my personl portfolio website where I share projects that I have built. 
                    Feel free to contact me with questions or to discuss colaborations.  </p>
                <div className="social">
                    <SiIndeed size={20} style={{color:"#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={20} style={{color:"#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer