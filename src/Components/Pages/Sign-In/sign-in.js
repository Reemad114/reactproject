import React from 'react';
import Header from '../../Parts/Header/header.js';
import Content from './content.js';
import Footer from '../../Parts/Footer/footer.js';
import './sign-in.css'

  class SignIn extends React.Component{
    constructor() {
    super();
    this.state = { data: [] };
  }
    componentDidMount() {
      fetch(`/auth`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }

    render() {
      if(this.state.data.length == 0)
        return (<p>ops</p>)
      return (
        <div className="Signin">
          <Header data = {this.state.data.Header}/>
          <Content />
          <Footer data = {this.state.data.Footer}/>
        </div>
      );
    }
  }
  export default SignIn;
