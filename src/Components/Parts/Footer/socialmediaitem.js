import React from "react"

class SocialItem extends React.Component{
  render() {
    return (
      <a href={this.props.url} className={this.props.className}><i className={this.props.icon}></i></a>
    )
  }
}
export default SocialItem
