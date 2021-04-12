import React from 'react';
import MenuItems from './menuitems.js';
import Item from './Item.js'
import "./menu.css";

class Menu extends React.Component{
   myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  render() {
    const menuComponents = MenuItems.map(item =>
        <Item
        name = {item.title}
        to = {item.url}
        cName = {item.cName}
        iconname = {item.iconname}
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
