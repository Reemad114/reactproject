import React from 'react';
import Help from './Help/help.js';
import Destinations from './Destinations/destinations.js'
import Reservation from "./Reservations/reservation.js"

class Content extends React.Component{
  render() {
    return (
      <div className="container">
        <Help/>
        <Destinations/>
        <Reservation/>
      </div>
    );
  }
}
export default Content
