import React from 'react';
import Header from '../../Parts/Header/header.js';
import Footer from '../../Parts/Footer/footer.js';
import Content from './content.js';
import './about-us.css'

  class About extends React.Component{ constructor() {
    super();
    this.state = { data: [] };
}
  componentDidMount() {
    fetch(`/aboutus`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
}
  render() {
    if(this.state.data.length == 0)
      return (<p>Error</p>)
    return (
      <div className = "aboutUs">
        <Header data = {this.state.data.Header}/>
        <Content />
        <Footer data = {this.state.data.Footer}/>
      </div>

    );
    }
  }
  export default About;
