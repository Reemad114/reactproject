import React from "react"
import Card from 'react-bootstrap/Card';
import Button from '../Button/button.js';

class MyCard extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <Card
          id={this.props.item.id}
          className = {this.props.item.classN}
      >
        <Card.Img
            className={this.props.item.img.className}
            variant={this.props.item.img.variant}
            src={this.props.item.img.src}
          />
        <Card.Body className="cardbody">
          <Card.Title className = "title">
            {this.props.item.title}
          </Card.Title>
          <Card.Text className = "text">
            {this.props.item.text}
          </Card.Text>
          <Button className="cardbtn"
            btn_variant={this.props.item.button.variant}
            btn={this.props.item.button.btn}
            />
        </Card.Body>
      </Card>
    )
  }
}
export default MyCard
