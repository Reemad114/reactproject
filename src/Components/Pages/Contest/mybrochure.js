import React from 'react';
import Header from '../../Parts/Header/header.js';
import Footer from '../../Parts/Footer/footer.js';
import Content from './content.js';
import './contest.css'

  class Contest extends React.Component{
    constructor() {
    super();
    this.state = { data: [] };
  }
    componentDidMount() {
      fetch(`/contest`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }
    render() {
      if(this.state.data.length == 0)
        return (<p>ops</p>)
      return (
        <div id = "contestpage" className = "contest">
          <Header data = {this.state.data.Header}/>
          <Content/>
          <Footer data = {this.state.data.Footer}/>
        </div>
      );
    }
  }
  export default Contest;
