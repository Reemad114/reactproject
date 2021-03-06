import React from 'react';
import Menu from './Menu/menu.js';
import Search from './Search/search.js'
import "./header.css";

class Header extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="headerhome container-fluid">
        <Menu data = {this.props.data.Menu}/>
        <Search data = {this.props.data.Search}/>
      </div>
    );
  }
}
export default Header
