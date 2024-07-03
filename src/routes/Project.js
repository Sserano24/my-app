import React from 'react'

import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import Heroimg2 from '../componenets/Heroimg2';
import Work from '../componenets/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="Some of my most recent work"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project