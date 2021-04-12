import React from 'react';

class MainTabNav extends React.Component{
  render() {
    return (
        <ul id={this.props.id} className={this.props.className}>
          {this.props.maintabs}
        </ul>
    );
  }
}
export default MainTabNav
