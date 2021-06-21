import React from 'react';
import Header from '../../Parts/Header/header';
import Content from './content.js';
import Footer from '../../Parts/Footer/footer.js';

class Destinations extends React.Component{
  //the constructor of the component 
  constructor() {
    super(); 
    this.state = { data: [] };//defines the data state
}
  componentDidMount() {
    fetch(`/firstdest`) //fetch API that fetches data from the server to the client
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
export default Destinations;
