import React from "react"
import Card from 'react-bootstrap/Card';

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
            className={this.props.item.img_classN}
            variant={this.props.item.img_variant}
            src={this.props.item.img_src}
          />
        <Card.Body className="cardbody">
          <Card.Title className = {this.props.item.title_classN}>
            {this.props.item.title}
          </Card.Title>
          <Card.Text className = {this.props.item.text_classN}>
            {this.props.item.text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
export default MyCard
