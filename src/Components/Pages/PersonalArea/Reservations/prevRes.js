import React from 'react';
import Modal from '../../../General/Modal/modal.js'
import FlightRes from './Flight/flightRes.js'
import HotelRes from './Hotel/hotelRes.js'
import CarRes from './Car/carRes.js'

class PrevRes extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="next-res">
      <h2>Previous Reservations</h2>
        <div>
          <Modal
          val = "Flights"
          data = {
            this.props.data.Flight.map(item =>
              <FlightRes data={item} />
            )
          }
          />
        </div>
        <div>
          <Modal
          val = "Hotels"
          data = {
            this.props.data.Hotel.map(item =>
              <HotelRes data={item} />
            )
          }
          />
        </div>
        <div>
          <Modal
          val = "Car Rental"
          data = {
            this.props.data.Car.map(item =>
              <CarRes data={item} />
            )
          }
          />
        </div>
      </div>
    );
  }
}
export default PrevRes
