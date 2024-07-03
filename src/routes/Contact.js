import React from 'react'

import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import Heroimg2 from '../componenets/Heroimg2';
import Form from '../componenets/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT" text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact