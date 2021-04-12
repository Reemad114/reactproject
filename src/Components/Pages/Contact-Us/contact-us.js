import React from 'react';
import Header from '../../Parts/Header/header.js';
import Content from './content.js'
import Footer from '../../Parts/Footer/footer.js';
import './contact-us.css'

  class ContactUs extends React.Component{
    render() {
      return (
        <div className="ContactUs">
          <Header />
          <Content />
          <Footer />
        </div>

      );
    }
  }
  export default ContactUs;
