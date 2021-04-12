import React from 'react';

class FlightRes extends React.Component{
  render() {
    return (
      <div>
        <div class="title">
          <h3>{this.props.item.title} Flight</h3>
        </div>
        <div class="body row">
          <div id="logo1" class="col-3">
          </div>
          <div id="flightinfo" class="col-3">
            <ul>
            <li>{this.props.item.airline}</li>
            <li>flight number:{this.props.item.flightNum}</li>
            <li>airplane number:{this.props.item.airlineNum}</li>
          </ul>
          </div>
          <div class="col-3">
            <ul>
            <li>Date:{this.props.item.date}</li>
            <li>Take Off Time:{this.props.item.TOTime}</li>
            <li>Take Off From:{this.props.item.TOFrom}</li>
            <li>Landing Time:{this.props.item.LTime}</li>
            <li>Landing From:{this.props.item.LIn}</li>
          </ul>
          </div>
          <div class="col-3">
            <ul>
            <li>Trip Time:{this.props.item.TripTime}</li>
            <li>Seat Number:{this.props.item.Seat}</li>
          </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default FlightRes;
