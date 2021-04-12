
import React from 'react';
import DiscountJson from './discountJson.js';
import Carousel from '../../../General/Carousel/carousel.js';
import './carousel.css'

class Carousel1 extends React.Component{
  render() {

    return (
      <Carousel
        id="discounts"
        class="carousel slide "
        data="carousel"
        href="#discounts"
        items ={DiscountJson}
        />
    )
  }
}
export default Carousel1
