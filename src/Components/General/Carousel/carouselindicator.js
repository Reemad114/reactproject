import React from "react"
import '../../Pages/Home/discountCarousels/carousel.css'

class Carouselindicator extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <li
        data-target={this.props.target}
        data-slide-to={this.props.slideto}
        className={this.props.indclassName}>
      </li>
    );
  }
}
export default Carouselindicator
