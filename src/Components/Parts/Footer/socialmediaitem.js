import React from "react"

class SocialItem extends React.Component{
  render() {
    return (
      <a href={this.props.url}><i className={this.props.className}></i></a>
    )
  }
}
export default SocialItem
