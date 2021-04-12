import React from "react"
import Button from 'react-bootstrap/Button';

class MyButton extends React.Component{
  render() {
    return(
      <Button variant={this.props.btn_variant}>{this.props.btn}</Button>
    )
  }
}
export default MyButton
