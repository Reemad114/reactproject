import React from "react"

class Form extends React.Component{
  render() {
      if(this.props.item.element == "input"){
        if(this.props.item.type == "text" || this.props.item.type == "email"){
          return (
            <input
              type={this.props.item.type}
              id={this.props.item.id}
              name={this.props.item.name}
              placeholder={this.props.item.placeholder}
              required
            />
          )
        }
        else if(this.props.item.type == "date" || this.props.item.type == "time"){
          return(
            <input
              type={this.props.item.type}
              id={this.props.item.id}
              name={this.props.item.name}
              required
            />
          )
        }
        else if(this.props.item.type == "submit"){
          return(
            <input
              type={this.props.item.type}
              id={this.props.item.id}
              value={this.props.item.value}
              required
            />
          )
        }
        else if(this.props.item.type == "checkbox"){
          return(
            <input
              type={this.props.item.type}
              id={this.props.item.id}
              name={this.props.item.name}
              required
            />
          )
        }
      }
      else if(this.props.item.element == "label"){
        return(
          <label id={this.props.item.id}>
            {this.props.item.text}
          </label>
        )
      }
      else if(this.props.item.element == "textarea"){
        return(
          <textarea
            id={this.props.item.id}
            row={this.props.item.row}
            placeholder={this.props.item.placeholder}
            name={this.props.item.name}>
          </textarea>
        )
      }
  }
}
export default Form
