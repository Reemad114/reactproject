import React from 'react';
import Header from '../../Parts/Header/header.js';
import Content from './content.js'
import Footer from '../../Parts/Footer/footer.js';
import './contact-us.css'

  class ContactUs extends React.Component{
    constructor() {
    super();
    this.state = { data: [] };
  }
    componentDidMount() {
      fetch(`/contactus`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }
    render() {
      if(this.state.data.length == 0)
        return (<p>ops</p>)
      return (
        <div className="ContactUs">
          <Header data = {this.state.data.Header}/>
          <Content data = {this.state.data.Content}/>
          <Footer data = {this.state.data.Footer}/>
        </div>

      );
    }
  }
  export default ContactUs;
