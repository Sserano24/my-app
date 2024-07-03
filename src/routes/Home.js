import React from 'react';
import Navbar from "../componenets/Navbar";
import Heroimg from "../componenets/Heroimg";
import Footer from "../componenets/Footer";
import Work from "../componenets/Work";

const Home = () => {
  return  <div>
        <Navbar />
        <Heroimg />
        <Work/>
        <Footer/>

    </div>;
  
};

export default Home;