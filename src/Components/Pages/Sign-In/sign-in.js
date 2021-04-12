import React from 'react';
import Header from '../../Parts/Header/header.js';
import Content from './content.js';
import Footer from '../../Parts/Footer/footer.js';
import './sign-in.css'

  class SignIn extends React.Component{
    render() {
      return (
        <div className="Signin">
          <Header />
          <Content className="SignInContent"/>
          <Footer />
        </div>
      );
    }
  }
  export default SignIn;
