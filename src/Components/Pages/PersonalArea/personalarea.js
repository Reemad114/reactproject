import React from 'react';
import Header from '../../Parts/Header/headerHome.js';
import Content from './content.js';
import Footer from '../../Parts/Footer/footer.js';
import './content.css'

  class PersonalArea extends React.Component{
    constructor() {
    super();
    this.state = { data: [] };
  }
    componentDidMount() {
      fetch(`/users/profile`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }
    render() {
      if(this.state.data.length == 0)
        return (<p>ops</p>)
      return (
        <div id="profilepage">
        <Header data = {this.state.data.Header}/>
        <Content data = {this.state.data.Content}/>
        <Footer data = {this.state.data.Footer}/>
        </div>
      );
    }
  }
  export default PersonalArea;
