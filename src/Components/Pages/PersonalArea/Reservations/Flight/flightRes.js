import React from 'react';

class FlightRes extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="flight-res">
        <ul>
          <li>{this.props.data.airline}</li>
          <li>{this.props.data.flightNum}</li>
          <li>{this.props.data.airlineNum}</li>
          <li>{this.props.data.date}</li>
          <li>{this.props.data.TOTime}</li>
          <li>{this.props.data.TOFrom}</li>
          <li>{this.props.data.LTime}</li>
          <li>{this.props.data.LIn}</li>
          <li>{this.props.data.TripTime}</li>
          <li>{this.props.data.Seat}</li>
        </ul>
      </div>
    );
  }
}
export default FlightRes
