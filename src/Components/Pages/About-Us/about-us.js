import React from 'react';
import Header from '../../Parts/Header/header.js';
import Footer from '../../Parts/Footer/footer.js';
import Content from './content.js';
import './about-us.css'

  class About extends React.Component{
    render() {
      return (
        <div className = "aboutUs">
          <Header />
          <Content />
          <Footer />
        </div>

      );
    }
  }
  export default About;
