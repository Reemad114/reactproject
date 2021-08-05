import React from 'react';
import Modal from '../../../General/Modal/modal.js'
// import FlightRes from './Flight/flightRes.js'
import HotelRes from './Hotel/hotelRes.js'
import CarRes from './Car/carRes.js'
import FlightRes from '../.././../General/FlightRes/flightres'
import '../content.css'
class NextRes extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="next-res">
        <h1 id="nexttitle" className="text-center shadow mt-2">Next Reservations</h1>
        {/* <div>
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
        </div> */}
        <FlightRes data={this.props.data.Flight}/>
      </div>
    );
  }
}
export default NextRes
