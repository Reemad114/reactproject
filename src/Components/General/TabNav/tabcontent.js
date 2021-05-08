import React from "react"

class TabItemContent extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div id={this.props.id} className={this.props.className}>
        {this.props.content}
      </div>
    )
  }
}
export default TabItemContent
