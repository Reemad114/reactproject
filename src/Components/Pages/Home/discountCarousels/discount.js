import React from 'react';
import Carousel1 from './carousel.js'

class Discount extends React.Component{
  render() {
    return(
      <div>
        <h2 className = "discounts text-center mt-4 shadow py-2">Hot Sales Don't Miss Out</h2>
            <div className="mt-4">
              <Carousel1 data = {this.props.data}/>
            </div>
        </div>
      )
    }
  }
export default Discount;
