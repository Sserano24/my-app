import React from 'react'

import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import Heroimg2 from '../componenets/Heroimg2';
import AboutContent from '../componenets/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT" text="I am a Computer Engineering student"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About