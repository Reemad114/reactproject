
import React from 'react';
// import DiscountJson from './discountJson.js';
import Carousel from '../../../General/Carousel/carousel.js';
import './carousel.css'

class Carousel1 extends React.Component{
  render() {
    {/* sends the discountjson of the carousel to the general carousel class to build it*/}
    return (
      <Carousel
        id="discounts"
        class="carousel slide "
        data="carousel"
        href="#discounts"
        items ={this.props.data}
        />
    )
  }
}
export default Carousel1
