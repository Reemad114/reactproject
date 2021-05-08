import React from 'react';

class HotelRes extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="car-res">
        <ul>
          <li>{this.props.data.bookingNum}</li>
          <li>{this.props.data.pin}</li>
          <li>{this.props.data.email}</li>
          <li>{this.props.data.res}</li>
          <li>{this.props.data.checkin}</li>
          <li>{this.props.data.checkout}</li>
          <li>{this.props.data.price}</li>
        </ul>
      </div>
    );
  }
}
export default HotelRes
