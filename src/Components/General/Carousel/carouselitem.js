import React from "react"
import '../../Pages/Home/discountCarousels/carousel.css'

class Carouselitem extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className={this.props.imgName}>
          <img src={this.props.imgsrc} alt={this.props.imgalt}/>
          <div className="carousel-caption">
            <a href={this.props.href}>{this.props.caption}</a>
          </div>
         </div>
      )
    }
  }
  export default Carouselitem
