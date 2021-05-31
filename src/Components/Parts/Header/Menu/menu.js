import React from 'react';
import Item from './Item.js'
import "./menu.css";

class Menu extends React.Component{
  constructor(props){
    super(props)
  }
   myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  render() {
    const menuComponents = this.props.data.map(item =>
        <Item
        name = {item.title}
        to = {item.url}
        cName = {item.className}
        iconname = {item.icon}
        />)

    return (
        <div className="topnav" id="myTopnav">
          <a href="/" class="col-1 active" id="logoimg"><img id="logo" className="navbar-brand" src="images/logo.PNG"/></a>
          {menuComponents}
          <a href="javascript:void(0)" className="icon" onClick={this.myFunction}>
            <i className="fa fa-bars"></i>
          </a>
        </div>

    );
  }
}
export default Menu
