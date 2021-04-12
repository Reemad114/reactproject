import React from 'react';
import Header from '../../Parts/Header/headerHome.js';
import Content from './content.js';
import Footer from '../../Parts/Footer/footer.js';

  class PersonalArea extends React.Component{
    render() {
      return (
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      );
    }
  }
  export default PersonalArea;
