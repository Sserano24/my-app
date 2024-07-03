import "./HeroimgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask"> 
            <img className="into-img" src= {IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <h1>Saul Serrano</h1>
            <p>California State University Sacramento</p>
        
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Heroimg