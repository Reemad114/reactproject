import React from "react"

class TabItem extends React.Component{
  render() {
    return (
      <li className={this.props.className}>
        <a className={this.props.aClassName} data-toggle={this.props.datatoggle} href={this.props.href}>
          <i class={this.props.icon}></i> {this.props.title}
        </a>
      </li>
    )
  }
}
export default TabItem
