import React from "react"
import Carouselitem from './carouselitem.js';
import Carouselindicator from './carouselindicator.js';

class Carousel extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    const carouselitems = this.props.items.map(oneitem =>
        <Carouselitem
           imgName = {oneitem.imgName}
           imgsrc = {oneitem.imgsrc}
           imgalt = {oneitem.imgalt}
           caption = {oneitem.caption}
           href = {oneitem.href}
         />)
   const carouselindicators = this.props.items.map(oneitem =>
     <Carouselindicator
     target = {oneitem.indicators.target}
     slideto = {oneitem.indicators.slideto}
     indclassName = {oneitem.indicators.indclassName}
     />
       )
    return(
      <div id={this.props.id} className={this.props.class} data-ride={this.props.data}>
        <ul className="carousel-indicators">
          {carouselindicators}
        </ul>
        <div className="carousel-inner">
          {carouselitems}
        </div>
        <a className="carousel-control-prev" href={this.props.href} data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href={this.props.href} data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    )
  }
}
export default Carousel
