import "./AboutContentStyles.css";

import React from 'react'
import {Link} from "react-router-dom";
import react1 from "../assets/react.png";
import node1 from "../assets/node.png";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am student</p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={node1} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent