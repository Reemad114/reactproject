import React from 'react';
import Menu from './Menu/menu.js';

class Header extends React.Component{
  render() {
    return (
      <div className="header container-fluid">
        <Menu />
      </div>
    );
  }
}
export default Header
