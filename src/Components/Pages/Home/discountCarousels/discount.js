import React from 'react';
import Carousel1 from './carousel.js'

class Discount extends React.Component{
  render() {
    return(
      <div>
        <h2 className = "discounts text-center mt-2 shadow py-2">Hot Sales Don't Miss Out</h2>
            <Carousel1 />
        </div>
      )
    }
  }
export default Discount;
