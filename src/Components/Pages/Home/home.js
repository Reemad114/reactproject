import React from 'react';
import Header from '../../Parts/Header/headerHome.js';
import Content from './content.js';
import Footer from '../../Parts/Footer/footer.js';

class Home extends React.Component{
  constructor() {
    super();
    this.state = { data: [] };
}
  componentDidMount() {
    fetch(`/home`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
}
  render() {
    if(this.state.data.length == 0)
      return (<p>Error</p>)
    return (
      <div>
        <Header data = {this.state.data.Header}/>
        <Content data = {this.state.data.Content}/>
        <Footer data = {this.state.data.Footer}/>
      </div>
    );
  }
}
export default Home;
