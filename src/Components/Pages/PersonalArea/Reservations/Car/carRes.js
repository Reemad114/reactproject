import React from 'react';

class CarRes extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="car-res">
        <ul>
          <li>{this.props.data.pickup}</li>
          <li>{this.props.data.return}</li>
          <li>{this.props.data.renduration}</li>
        </ul>
      </div>
    );
  }
}
export default CarRes
