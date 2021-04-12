import React from "react"
import './menu.css'


class Item extends React.Component{
  render() {
    return (
      <a href={this.props.to} className={this.props.cName}>
        <i class={this.props.iconname}></i> {this.props.name}
      </a>
    )
  }
}
export default Item
